import React from "react";
import contactImage from "@/assets/contact-hero.webp";
import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

const ContactHero = () => {
  return (
    <Flex
      backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5),rgb(0, 0, 0, 0.6)), url(${
        contactImage.src || contactImage
      })`}
      backgroundSize="cover"
      backgroundPosition="top"
      width="100%"
      align={"center"}
      justify={"center"}
      h="70vh"
      color="white"
      textAlign={"center"}
    >
      <VStack px="1rem">
        <Heading
          as="h1"
          fontSize={{ base: "2.5rem", md: "3.5rem", lg: "4rem" }}
          fontWeight="bold"
          lineHeight={1.3}
          w={{ base: "100%", md: "80%", lg: "70%" }}
        >
          Got any Feedbacks or Questions?{" "}
        </Heading>
        <Text mt=".5rem">We are here to assist you every step of the way.</Text>
      </VStack>
    </Flex>
  );
};

export default ContactHero;
