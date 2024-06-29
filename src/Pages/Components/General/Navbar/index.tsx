import {HStack, Image, Link, Text} from "@chakra-ui/react";
import logo from './../../../../assets/logo_app.png'

const NavBar = () => {
    return(
            <HStack justify={'space-between'} bg={'brand.secundary-color'} p={'8px'} paddingRight={'32px'} paddingLeft={"32px"}>

                <HStack fontFamily={'brand.logoFont'}>
                    <Image src={logo} h={'60px'} />
                    <Text fontSize={'22px'} color={'whitesmoke'}>Peregrinoo</Text>
                </HStack>

                <HStack spacing={'16px'} fontFamily={"brand.navFont"}>
                    <Link> <Text color={'whitesmoke'}>CPS Test</Text> </Link>
                    <Link> <Text color={'whitesmoke'}>About me</Text> </Link>
                </HStack>

            </HStack>
    )
}

export default NavBar;