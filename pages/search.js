import { useState } from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import { useRouter } from "next/router";
import Image from "next/image";
import SearchFilter from "../components/SearchFilter";
import  Property  from "../components/Property";
import noresults from "../assets/images/noresults.jpg";
import { baseUrl, FetchApi } from "../utils/fetchApi";

const Search = ({properties}) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();
  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        p="2"
        borderBottom="1px"
        borderColor="gray.200"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters((searchFilters) => !searchFilters)}
      >
        <Text> Search Property By Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilter />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        properties {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          marginTop="5"
          marginBottom="5"
        >
          <Image alt="no result" src={noresults} />
          <Text fontSize="2xl" marginTop="4">
            No result Found
          </Text>
        </Flex>
      )}
    </Box>
  );
};
export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await FetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  )
  return {
      props: {
          properties: data?.hits
      }
  }
}

export default Search;
