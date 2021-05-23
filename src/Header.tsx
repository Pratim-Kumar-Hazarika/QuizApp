import {
  Box,
  Flex,
  Spacer,
  useColorMode,
  Heading,
  useColorModeValue
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import { JamQuora } from "./JamQuora";

export function Header() {
  const { toggleColorMode } = useColorMode();
  const color = useColorModeValue("gray.800", "white");
  return (
    <>
      <Box
        w="100%"
        p={1}
        color="black"
        boxShadow="0 4px 12px 0 rgb(0 0 0 / 5%)"
      >
        <Flex>
          <Box p="4">
            <Flex>
              <Heading as="h2" size="xl" color={color}>
                <JamQuora />{" "}
              </Heading>
              <Heading as="h5" size="sm" mt={1} color={color}>
                uizzify
              </Heading>
            </Flex>
          </Box>
          <Spacer />
          <Box p="4">
            <MoonIcon color={color} onClick={toggleColorMode} w={6} h={6} />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
