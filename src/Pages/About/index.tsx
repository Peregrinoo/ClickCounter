import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { SiVite } from "react-icons/si";
import {IoLogoReact} from "react-icons/io5";

const AboutMe = () => {
    return (
        <Flex
            w="full"
            h="90vh"
            bg="brand.primary-color"
            align="center"
            justify="center"
        >
            <Box w="80vw" h="60vh" bg="brand.secundary-color" borderRadius="20px">
                <VStack p="16px" spacing="4" color={'whitesmoke'}>
                    <Heading fontFamily="Roboto">About Me</Heading>

                    <Text fontFamily="Roboto" fontSize="lg">
                        Hi there! I'm creating this demo project to showcase my skills and
                        knowledge.
                    </Text>

                    <Text fontFamily="Roboto" fontSize="lg">
                        I'm using React for the frontend development, Vite for fast
                        development setup, and Figma for prototyping.
                    </Text>

                    <Flex justify="center" w="full">
                        <IoLogoReact size={32} style={{ marginRight: "16px" }} />
                        <SiVite size={32} style={{ marginRight: "16px" }} />
                        <AiFillHtml5 size={32} style={{ marginRight: "16px" }} />
                        <AiFillGithub size={32} />
                    </Flex>
                </VStack>
            </Box>
        </Flex>
    );
};

export default AboutMe;
