import { Circle, Text} from "@chakra-ui/react";

const CPSCounter = () => {
    return(
      <>
          <Circle size={'256px'} bg={'brand.secundary-color'}>
              <Text fontFamily={'roboto'} color={'whitesmoke'}>Click me !</Text>
          </Circle>
      </>
    );
}

export default CPSCounter;