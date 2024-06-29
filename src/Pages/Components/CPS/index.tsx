import { Circle, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";

const CPSCounter = () => {
    const [setClicks] = useState<number>(0);
    const [cpsRange, setCpsRange] = useState<number>(0.0);
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const startTimeRef = useRef<number | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleClick = () => {
        setClicks(prevClicks => {
            const newClicks = prevClicks + 1;

            if (startTimeRef.current === null) {
                startTimeRef.current = Date.now();

                intervalRef.current = setInterval(() => {
                    const currentTime = Date.now();
                    const timeDiff = (currentTime - startTimeRef.current!) / 1000; // em segundos
                    setElapsedTime(parseFloat(timeDiff.toFixed(2)));
                }, 100);
            }

            const currentTime = Date.now();
            const timeDiff = (currentTime - startTimeRef.current!) / 1000; // em segundos
            setCpsRange(parseFloat((newClicks / timeDiff).toFixed(2)));

            return newClicks;
        });
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <VStack spacing="32px">
            <Text fontFamily="Roboto" color="whitesmoke">
                Your CPS: {cpsRange}
            </Text>
            <Text fontFamily="Roboto" color="whitesmoke">
                Time: {elapsedTime} seconds
            </Text>

            <Circle
                size="256px"
                bg="brand.secundary-color"
                onClick={handleClick}
                _hover={{ cursor: "pointer" }}
            >
                <Text fontFamily="roboto" color="whitesmoke">
                    Click me!
                </Text>
            </Circle>
        </VStack>
    );
};

export default CPSCounter;
