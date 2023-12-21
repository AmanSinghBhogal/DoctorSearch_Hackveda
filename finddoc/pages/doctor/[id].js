import { Box, Flex, Spacer, Text } from '@chakra-ui/layout';
import { GoVerified } from 'react-icons/go';
import imageUrlFor from "../../utils/imageUrlFor";
import sanity from "../../lib/sanity";

const doctorsQuery = `*[_type == "doctors"] { _id }`;
const specificDoctor = `*[_type == "doctors" && _id == $id][0]`;


const DocDetails = ({ DocDetails }) => (
  <Box maxWidth='1000px' minHeight='90vh' margin='auto' p='4' justifyContent="center" alignItems="center">
    
    {/* Circluar Image of Doctor */}
    <Flex alignItems='center' justifyContent='center' >
      <div style={{borderRadius: '50%', overflow: 'hidden', height: '250px', width: '250px', backgroundImage: `url(${imageUrlFor(DocDetails.imgURL) ? imageUrlFor(DocDetails.imgURL) : DefaultImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',}} />
    </Flex>

    <Box w='full' p='6'>
      
      <Flex alignItems='center' justifyContent='center' >
        <Box paddingRight='3' color='green.400'>{DocDetails.verified && <GoVerified />}</Box>
        <Text fontWeight='bold' fontSize='lg'>
          {DocDetails.name}
        </Text>
      </Flex>

      <Flex alignItems='center' p='1' justifyContent='center'>
        <Text fontSize='lg'>Rs. {DocDetails.fees} Consultation Fees</Text>
      </Flex>

    </Box>

    <Box marginTop='2'>
      <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{DocDetails.specialization}</Text>
      <Text lineHeight='2' color='gray.600'>{DocDetails.about}</Text>
    </Box>

    <Flex marginTop='5' flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
      
      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>City</Text>
        <Text fontWeight='bold'>{DocDetails.city}</Text>
      </Flex>

      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>State</Text>
        <Text fontWeight='bold'>{DocDetails.state}</Text>
      </Flex>

    </Flex>
  </Box>
);

export default DocDetails;

export const getStaticPaths = async () => {
  // Get the paths we want to pre-render based on doctors
  const doctors = await sanity.fetch(doctorsQuery);
  const paths = doctors.map(doctor => ({
    params: { id: doctor._id }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const data = await sanity.fetch(specificDoctor, { id: params.id });
  return { 
            props: { 
                      DocDetails: data 
                    },
          };
};
