"use client"

import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import sanity from "../lib/sanity";
import { BsFilter } from 'react-icons/bs';

import DocCard from '../components/DocCard';
import SearchFilters from '../components/SearchFilters';
const noresult = '/assets/images/noresult.svg';

const Search = ({ doctors }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        onClick={() => setSearchFilters(!searchFilters)}
        cursor='pointer'
        bg='gray.100'
        borderBottom='1px'
        borderColor='gray.200'
        p='2'
        fontWeight='black'
        fontSize='lg'
        justifyContent='center'
        alignItems='center'
      >
        <Text>Search Doctors By Filters</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize='2xl' p='4' fontWeight='bold'>
      {router.query.specialization?.charAt(0).toUpperCase()}{router.query.specialization?.slice(1)} Doctors 
      </Text>

      <Flex flexWrap='wrap' alignItems='center' justifyContent='center'>
        {doctors.map((doctor) => <DocCard doctor={doctor} key={doctor._id} />)}
      </Flex>

      {doctors.length === 0 && (
        <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
          <Image src={noresult} width={100} height={100} />
          <Text fontSize='xl' marginTop='3'>No Result Found.</Text>
        </Flex>
      )}
    </Box>
  );
};

export async function getServerSideProps({ query }) {

  const specialization = query.specialization || '_';
  const city = query.city || '_';
  const state = query.state || '_';
  let url;
  
  if (specialization !== '_' && city !== '_' && state !== '_'){
    url = `*[_type == "doctors" && specialization == "${specialization}" && city == "${city}" && state == "${state}"]`;
  }
  else if (specialization !== '_' && city !== '_'&& state === '_')
  {
    url = `*[_type == "doctors" && specialization == "${specialization}" && city == "${city}"]`;
  }
  else if(specialization === '_' && city !=='_' && state !== '_')
  {
    url = `*[_type == "doctors" &&  city == "${city}" && state == "${state}"]`;
  }
  else if (specialization !== '_' && city ==='_'  && state !== '_')
  {
    url = `*[_type == "doctors" && specialization == "${specialization}" && state == "${state}"]`;
  }
  else if(specialization !== '_' && city ==='_'  && state === '_')
  {
    url = `*[_type == "doctors" && specialization == "${specialization}"]`;
  }
  else if(specialization === '_' && city !== '_' && state === '_')
  {
    url = `*[_type == "doctors" && city == "${city}"]`;
  }
  else if(specialization === '_' && city === '_' && state !== '_')
  {
    url = `*[_type == "doctors" && state == "${state}"]`;
  }
  else
  {
    url = '*[_type == "doctors"]';
  }

  const data = await sanity.fetch(url);

  return {
    props: {
      doctors: data,
    },
  };
}

export default Search;
