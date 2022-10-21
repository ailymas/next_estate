import { Box, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { GoVerified } from "react-icons/go";

const Property = ({property:{externalID,isVerified,price,rentFrequency}}) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      paddingTop="0px"
      justifyContent="flex-start"
      cusrsor="pointer"
    >
      {/* <Box>
        <Image src={coverPhoto.url} width={400} height={260} />
      </Box> */}
      <Box w="full">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3" color="green.400">
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              AED{price}
              {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  </Link>
);

export default Property;
