import Link from 'next/link';
import Image from 'next/image';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';

const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='gray.100'>
    <Box width={150} fontSize='3xl' color='blue.400' fontWeight='bold'>
      <Flex>
        <Image src="/assets/images/findoc.png" alt="Logo" height={25} width={25}/>
        <Spacer />
        <Link href='/' >FindDoc</Link>
      </Flex>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
        <MenuList>
          <Link href='/' >
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href='/search'>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
