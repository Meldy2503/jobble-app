"use client";

import workers from "@/assets/auth/workers.webp";
import Logo from "@/components/logo";
import {
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useColorModeValue } from "../ui/color-mode";

interface AuthWrapperProps {
  children: React.ReactNode;
  authType: keyof typeof authTypes;
}

const authTypes = {
  signup: "Create Your Account",
  login: "Login to Your Account",
};

function AuthWrapper({ children, authType }: AuthWrapperProps) {
  const bgColor = useColorModeValue("#f9f9f9", "#171923");
  const textColor = useColorModeValue("#333", "#fff");
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      h={"100vh"}
      bg={bgColor}
      color={textColor}
    >
      <Box
        display={{ base: "none", md: "block" }}
        w={{ base: "90%", md: "45%", lg: "50%" }}
        backgroundImage={`url(${workers.src || workers})`}
        backgroundSize="cover"
        backgroundPosition="center"
        h="100vh"
      ></Box>
      {/* Right side form */}
      <Flex
        w={{ base: "100%", md: "55%", lg: "50%" }}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"column"}
        px={{ base: "0", sm: "1rem", lg: "2rem", xl: "4rem" }}
      >
        <Box mb={4}>
          <Logo />
        </Box>

        <Heading
          as="h2"
          fontSize={{ base: "1.7rem", md: "2rem" }}
          lineHeight={1.3}
          textAlign="center"
          my={8}
        >
          {authTypes[authType]}
        </Heading>

        <VStack
          gap={4}
          as="form"
          w={"full"}
          px={{ base: "4", md: "8" }}
          maxW={"3xl"}
          h={"full"}
        >
          <Stack gap="4" w={"full"} justify={"center"}>
            {children}
          </Stack>
          {authType === "signup" ? (
            <Text textAlign="center" mt={4} fontSize={"1rem"}>
              Already have an account?{" "}
              <Link
                as={NextLink}
                href="/login"
                color="#006adc"
                style={{ fontWeight: "bold" }}
              >
                Login
              </Link>
            </Text>
          ) : (
            <Text textAlign="center" mt={4} fontSize={"1rem"}>
              Don’t have an account? {""}
              <Link
                as={NextLink}
                href="/signup"
                color="#006adc"
                style={{ fontWeight: "bold" }}
              >
                Sign up
              </Link>
            </Text>
          )}
        </VStack>
      </Flex>
    </Flex>
  );
}
export default AuthWrapper;
