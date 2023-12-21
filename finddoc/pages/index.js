import Link from 'next/link';
import Image from "next/image";
import { Flex, Box, Text, Button } from '@chakra-ui/react';

import DocCard from '../components/DocCard';
import { baseUrl, fetchApi } from '../utils/fetchApi';

export const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image src={imageUrl} width={400} height={300} />
    <Box p='5'>
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
      <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Text>
      <Button fontSize='xl' bg="blue.300" color="white">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);


const Home = ({ propertiesForRent }) => (
  <Box alignItems='center'>
    <Banner
      purpose='Find a Doctor'
      title1='Doctors for Everyone'
      desc1=' Explore from Pediatrician, Dentist, Gynecologist'
      desc2='and more'
      buttonText='Explore Physicians'
      linkName='/search?purpose=for-rent'
      imageUrl='/assets/images/home_2.png'
    />
    <Flex flexWrap='wrap' alignItems='center' justifyContent='center'>
      {propertiesForRent.map((property) => <DocCard property={property} key={property.id} />)}
    </Flex>
  </Box>
);

export async function getStaticProps() {
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;