import { useState } from 'react';
import { Flex, Select, Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { filterData, getFilterValues } from '../utils/filterData';


export default function SearchFilters() {
  const [filters] = useState(filterData);
  const router = useRouter();
  const [queryExist, setQueryExist ] = useState(false);

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if(item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })
    setQueryExist(true);
    router.push({ pathname: path, query: query });
  };

  const removeQueryParam = (param) => {
    const { pathname, query } = router;
    const params = new URLSearchParams(query);
    params.delete(param);
    router.replace(
        { pathname, query: params.toString() },
        undefined, 
        { shallow: true }
    );
    router.push({ pathname, query: params.toString() });
  }

  const clearFilters = () => {
    router.replace('/search', undefined, { shallow: true });
    const path = router.pathname;
    router.push({ pathname: path, query: '' });
    setQueryExist(false);
  }

  return (
    <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
      {filters?.map((filter) => (
        <Box key={filter.queryName}>
          <Select onChange={(e) => {
            e.target.value === ''? removeQueryParam(filter.queryName) : searchProperties({ [filter.queryName]: e.target.value })
          }} placeholder={filter.placeholder} w='fit-content' p='2' >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
      <Flex flexDir='column'>
        <Button onClick={() => clearFilters()} border='1px' borderColor='gray.200' marginTop='2' >
          {queryExist? 'Clear Search': 'Search'}
        </Button>
      </Flex>
    </Flex>
  );
}
