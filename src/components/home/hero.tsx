import bgImg from "@/assets/bg-img.jpg";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Button from "../button";
import { useColorModeValue } from "../ui/color-mode";

const Hero = () => {
  const bgColor = useColorModeValue("#f9f9f9", "#fff");

  return (
    <Flex
      h="87vh"
      backgroundImage={`linear-gradient(rgba(12, 0, 0, 0.8),rgb(0, 122, 255, 0.9)), url(${
        bgImg.src || bgImg
      })`}
      backgroundSize="cover"
      backgroundPosition="top"
      color="white"
      alignItems={"center"}
      justifyContent={"center"}
      textAlign={"center"}
    >
      <Box w={{ base: "100%", lg: "70%" }} px="2rem" mt="5rem">
        <Heading
          as="h1"
          fontSize={{ base: "3rem", md: "3.5rem", lg: "4.5rem" }}
          fontWeight="bold"
          lineHeight={1.3}
        >
          Job Hunting Made Simple
        </Heading>
        <Text
          w={{ base: "100%", md: "85%", lg: "70%" }}
          mx="auto"
          my={4}
          fontSize={{ base: "1rem", md: "1.1rem", lg: "1.2rem" }}
          textAlign={"center"}
        >
          Discover fresh job postings tailored just for you. Browse
          opportunities that match your skills and apply effortlessly.
        </Text>
        <Box h=".55px" w="100%" bg={bgColor} />
        <Button
          href={"/jobs"}
          bg="white"
          mt="3rem"
          color={"#006adc"}
          hover="#f5fafa"
          px="2.5rem"
          py="1.4rem"
        >
          Explore Jobs
        </Button>{" "}
        <Flex
          gap={{ base: 3, md: 5, lg: 8 }}
          mt={"2rem"}
          align="center"
          justifyContent={"center"}
          fontWeight={"500"}
          flexWrap={"wrap"}
        >
          <Text>RELIABLE</Text>|<Text>EASY TO USE</Text>|
          <Text>COMPREHENSIVE</Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Hero;
