import {Flex} from "@chakra-ui/react";
import CPSCounter from "../../Components/CPS";

const PageCPS = () => {
    return(
        <Flex w={'full'} h={'90vh'} bg={'brand.primary-color'} justifyContent={'center'} align={'center'}>
                <CPSCounter/>
        </Flex>
    )
}

export default PageCPS;