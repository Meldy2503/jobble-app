'use client'

import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { InputElement } from "../ui/input-element";
import { useColorModeValue } from "../ui/color-mode";

const Resume = () => {
  const color = useColorModeValue("#606261", "#fff");
  const border = useColorModeValue("#d0d0d0", "#93989d");

  return (
    <Box mt="2rem">
      <Heading as="h2" fontWeight={"bold"}>
        Resume
      </Heading>
      <Text my="0.5rem" color={color} fontSize={"14px"}>
        Upload your resume
      </Text>
      <Box height=".6px" bg={border} w="full" />
      <Box my={"1rem"}>
        <InputElement type="file" />
      </Box>
    </Box>
  );
};

export default Resume;
