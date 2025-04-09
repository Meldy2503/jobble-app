"use client";

import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Button from "../button";
import { useColorModeValue } from "../ui/color-mode";

const AppliedJobs = () => {
  const textColor = useColorModeValue("#333", "#fff");
  const bgColor = useColorModeValue("#f8fcfc", "#212938");
  return (
    <VStack bg={bgColor} color={textColor} py="4rem" mt="2rem" px="1rem">
      <Heading textAlign={"center"}>You havent applied to any jobs!</Heading>
      <Text my="1rem" textAlign={"center"}>
        Find new opportunities and manage your job search progress here.
      </Text>
      <Button href="/jobs">Browse Jobs</Button>
    </VStack>
  );
};

export default AppliedJobs;
