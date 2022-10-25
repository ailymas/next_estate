import { Box, Flex, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { filterData, getFilterValues } from "../utils/filterData";
import { useRouter } from "next/dist/client/router";

const SearchFilter = () => {
  const router = useRouter();
  const [filters] = useState(filterData);
  const searchProperties = (FilterValues) => {
    const values = getFilterValues(FilterValues);
    const path = router.pathname;
    const { query } = router;

    values.forEach((item) => {
      if (item.value && filterData?.[item.name]) {
        query[item.name] = item.value;
      }
      router.push({ pathname: path, query });
    });
  };
  return (
    <Flex bg="gray.400" p="4" justifyContent="center" flexWrap="wrap">
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
            w="fit-content"
            p="2"
            placeholder={filter.placeholder}
          >
            {filter?.items.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilter;
