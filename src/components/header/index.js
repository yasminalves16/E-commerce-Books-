import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Logo from "../../assets/logoLivraria.png"
import Home from "../../assets/home.png"
import Cart from "../../assets/cart.png"
import { useHistory } from "react-router-dom"


export default function Header({ type }) {

  const { colorMode, toggleColorMode } = useColorMode();

  const history = useHistory()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={6}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Image borderRadius='full' boxSize='80px' src={Logo} alt='Logo' />

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                {type === "cart" ? <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  onClick={() => history.push('/dashboard')} >
                  <Avatar
                    size={'sm'}
                    src={Cart}
                  />
                </MenuButton> :
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}
                    onClick={() => history.push('/cart')} >
                    <Avatar
                      size={'sm'}
                      src={Cart}
                    />
                  </MenuButton>

                }
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  onClick={() => history.push('/')} >
                  <Avatar
                    size={'sm'}
                    src={Home}
                  />
                </MenuButton>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}