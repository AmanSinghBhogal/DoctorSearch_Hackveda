import Link from 'next/link';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { GoVerified } from 'react-icons/go';
import imageUrlFor from "../utils/imageUrlFor";

const DefaultImage =  '/assets/images/home_1.jpg';

const DocCard = ({ doctor: { _id, name, specialization, imgURL, experience, verified, about, fees, city, state } }) => (
  <Link href="/doctor/[id]" as={`/doctor/${_id}`}>

    <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='center' cursor='pointer' >

      <Box>
        <div style={{borderRadius: '50%', overflow: 'hidden', height: '250px', width: '250px', backgroundImage: `url(${imageUrlFor(imgURL) ? imageUrlFor(imgURL) : DefaultImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',}} />
      </Box>
      
      <Box w='full' >

        <Flex paddingTop='2' alignItems='center' justifyContent='center'>
          <Flex alignItems='center'>
            <Box paddingRight='3' color='green.400'>{verified && <GoVerified />}</Box>
            <Text fontWeight='bold' fontSize='lg'>{name}</Text>
            
          </Flex>
        </Flex>

        <Flex alignItems='center' p='1' justifyContent='center'>
          <Text fontWeight='bold' fontSize='lg'>{specialization}</Text>
        </Flex>
        <Flex alignItems='center' p='1' justifyContent='center'>
          <Text fontSize='md'>{city}</Text>
        </Flex>

        <Text fontSize='lg' textAlign="center" alignItems="center" justifyContent='center'>
          {about.length > 30 ? about.substring(0, 80) + '...' : about}
        </Text>

      </Box>
    </Flex>

  </Link>
);

export default DocCard;