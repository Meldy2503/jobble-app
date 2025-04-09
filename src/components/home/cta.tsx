import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Button from "../button";
import ctaPattern from "@/assets/cta-pattern.png";
import Wrapper from "../ui/wrapper";

const Cta = () => {
  return (
    <Wrapper pt="6rem" pb='7rem'>
      <Box
        rounded={"60px"}
        zIndex={"1"}
        py={16}
        backgroundImage={`url(${ctaPattern.src || ctaPattern})`}
        mx="auto"
        backgroundSize="cover"
        backgroundPosition="center"
        textAlign={"center"}
        color={"white"}
        px={{ base: "1rem", md: "2rem" }}
      >
        <Heading
          as="h1"
          fontSize={{ base: "1.9rem", md: "2.5rem", lg: "3rem" }}
          lineHeight={1.3}
        >
          Ready for a career change? Start applying today!
        </Heading>
        <Text
          fontSize={"1.1rem"}
          fontWeight={"500"}
          my="1rem"
          w={{ base: "90%", md: "70%", lg: "50%" }}
          textAlign={"center"}
          mx="auto"
        >
          Looking for a fresh start? Explore new job opportunities and apply
          with ease. Your next career move is just a click away!
        </Text>
        <Button
          href="/jobs"
          bg="white"
          fontWeight={"bold"}
          color={"#006adc"}
          mt={"1rem"}
          px="3rem"
          hover="#f5fafa"
        >
          Apply Now
        </Button>
      </Box>
    </Wrapper>
  );
};

export default Cta;
