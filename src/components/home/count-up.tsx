"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import CountUp from "react-countup";
import React from "react";
import Wrapper from "../ui/wrapper";
import { useColorModeValue } from "../ui/color-mode";

// Define props for the component
interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

interface CountStatsProps {
  stats: Stat[];
}

const jobStats = [
  { label: "Jobs Available", value: 5000, suffix: "+" },
  { label: "Companies Hiring", value: 200, suffix: "+" },
  { label: "Successful Hires", value: 15000, suffix: "+" },
  { label: "Job Seekers", value: 100000, suffix: "+" },
];

const Counter: React.FC<CountStatsProps> = ({ stats }) => {
  const textColor = useColorModeValue("#5b5b5b", "#fff");

  return (
    <Flex
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems="center"
      gap="2rem"
      color={textColor}
      pt="1.5rem"
      fontFamily={"Chakra Petch"}
      flexWrap={"wrap"}
      mx="auto"
    >
      {stats.map((stat, index) => (
        <Flex
          key={index}
          alignItems="center"
          flexDir="column"
          w={{ base: "47%", lg: "20%" }}
        >
          <Box
            fontWeight="600"
            fontSize={{ base: "2rem", md: "2.5rem" }}
            lineHeight={1.3}
          >
            <CountUp start={0} end={stat.value} delay={0} />
            {stat.suffix}
          </Box>
          <Text textAlign={"center"}>{stat.label}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

const CountStats = () => {
  return (
    <Wrapper pt="0">
      <Counter stats={jobStats} />
    </Wrapper>
  );
};

export default CountStats;
