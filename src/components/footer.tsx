"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "./logo";
import { useColorModeValue } from "./ui/color-mode";

function Footer() {
  const bgColor = useColorModeValue("#f9f9f9", "#212938");
  const border = useColorModeValue("#d0d0d0", "rgba(255, 255, 255, 0.3)");
  const textColor = useColorModeValue("#333", "#fff");
  return (
    <Box bg={bgColor} color={textColor}>
      <VStack borderTopWidth=".6px" borderColor={border} py={8}>
        <Box as="footer" maxW="1200px" color="gray.700" mx="auto" w="90%">
          <Flex
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
            gap="3rem"
          >
            <Box w="30%">
              <Logo />

              <HStack gap={2} mt="1.5rem">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <IconButton
                    aria-label="Facebook"
                    variant="ghost"
                    _hover={{ bg: "gray.100" }}
                    border={"1px solid"}
                    borderColor={border}
                    rounded={"full"}
                  >
                    <FaFacebookF />
                  </IconButton>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <IconButton
                    aria-label="Instagram"
                    variant="ghost"
                    _hover={{ bg: "gray.100" }}
                    border={"1px solid"}
                    borderColor={border}
                    rounded={"full"}
                  >
                    <FaInstagram />
                  </IconButton>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <IconButton
                    aria-label="X (Twitter)"
                    variant="ghost"
                    _hover={{ bg: "gray.100" }}
                    border={"1px solid"}
                    borderColor={border}
                    rounded={"full"}
                  >
                    <FaXTwitter />
                  </IconButton>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <IconButton
                    aria-label="LinkedIn"
                    variant="ghost"
                    _hover={{ bg: "gray.100" }}
                    border={"1px solid"}
                    borderColor={border}
                    rounded={"full"}
                  >
                    <FaLinkedinIn />
                  </IconButton>
                </Link>
              </HStack>
            </Box>
            <Flex
              w={{ base: "100%", md: "auto" }}
              justify="space-between"
              flex="1"
              flexWrap="wrap"
              gap={{ base: 6, md: 10 }}
            >
              {/* Column: Company */}
              <Stack gap={2} minW="130px" color={textColor}>
                <Text fontWeight="semibold" fontSize={"1.1rem"}>
                  Company
                </Text>
                <Link href="/blog">Blog</Link>
                <Link href="/career">Career</Link>
                <Link href="/news">News</Link>
              </Stack>

              {/* Column: Account */}
              <Stack gap={2} minW="130px" color={textColor}>
                <Text fontWeight="semibold" fontSize={"1.1rem"}>
                  Account
                </Text>
                <Link href="/login">Login</Link>
                <Link href="/signup">Sign up</Link>
                <Link href="/settings">Settings</Link>
              </Stack>

              {/* Column: Support */}
              <Stack gap={2} minW="130px" color={textColor}>
                <Text fontWeight="semibold" fontSize={"1.1rem"}>
                  Support
                </Text>
                <Link href="/faq">FAQ</Link>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms Of Use</Link>
              </Stack>

              {/* Column: About Us */}
              <Stack gap={2} minW="130px" color={textColor}>
                <Text fontWeight="semibold" fontSize={"1.1rem"}>
                  About Us
                </Text>
                <Link href="/about">About GoHire</Link>
                <Link href="/jobs">Explore Jobs</Link>
                <Link href="/contact">Contact Us</Link>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </VStack>
      <Flex
        textAlign="center"
        borderTopWidth=".6px"
        borderColor={border}
        py="2rem"
        alignItems={"center"}
        justifyContent="center"
        gap="1rem"
        flexWrap={"wrap"}
      >
        {/* Compliance with Remotive - Adding source link */}
        <Text>
          Jobs sourced from{" "}
          <a
            href="https://remotive.io"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#006adc", textDecoration: "underline" }}
          >
            Remotive.io
          </a>
        </Text>
        <Text fontWeight={"500"} color={"#006adc"}>
          Jobble Copyright © 2025
        </Text>
      </Flex>
    </Box>
  );
}
export default Footer;
