import Image from "next/image";
import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Button from "../button";
import man from "@/assets/working-man.webp";
import Wrapper from "../ui/wrapper";
import pattern from "@/assets/pattern.svg";
import pattern2 from "@/assets/pattern-2.svg";
import { useColorModeValue } from "../ui/color-mode";

const HowItWorks = () => {
    const imageSrc = useColorModeValue(pattern, pattern2);
  return (
    <Box position={"relative"}>
      <Box display={{ base: "none", lg: "block" }}>
        <Image
          src={imageSrc}
          width={250}
          height={250}
          alt="lady"
          style={{ position: "absolute", top: "-5rem", right: "0" }}
        />
      </Box>
      <Wrapper pt={{ base: "5rem", md: "7rem" }}>
        <Flex
          justify="space-between"
          align="center"
          gap={10}
          flexDir={{ base: "column", md: "row" }}
        >
          <Box w={{ base: "100%", md: "50%" }}>
            <Heading as="h2" size="xl" mb={6} color="#006adc" fontWeight="bold">
              How it Works
            </Heading>
            <Heading
              as="h3"
              fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem" }}
              lineHeight={1.3}
              fontWeight="bold"
            >
              Easy Steps to Find and Apply for Your Dream Job
            </Heading>
            <Box spaceY="1.5rem" mt="2rem">
              <Box>
                <Heading as="h4" size="lg" mb={2} color="#006adc">
                  {" "}
                  Upload Your Best Resume and Portfolio
                </Heading>
                <Text w={{ base: "100%", lg: "90%" }}>
                  Easily upload your resume, CV, and portfolio directly to
                  GoHire to showcase your skills.
                </Text>
              </Box>
              <Box>
                <Heading as="h4" size="lg" mb={2} color="#006adc">
                  Stay Updated with Notifications
                </Heading>
                <Text w={{ base: "100%", lg: "90%" }}>
                  Receive alerts for new job vacancies, scheduled interviews,
                  and application updates.
                </Text>
              </Box>
              <Box>
                <Heading as="h4" size="lg" mb={2} color="#006adc">
                  Apply to Top Companies
                </Heading>
                <Text w={{ base: "100%", lg: "90%" }}>
                  Get job recommendations from top companies worldwide and land
                  your dream job!
                </Text>
              </Box>
            </Box>

            <Button href="/jobs" mt={4} px="3rem" py="1.4rem">
              Explore Jobs
            </Button>
          </Box>
          <Box w={{ base: "100%", md: "45%" }}>
            <Image src={man} width={1500} height={1500} alt="working man" />
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default HowItWorks;
