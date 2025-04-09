'use client'

import React from "react";
import { Box, Heading, Text, Link, Tabs } from "@chakra-ui/react";
import AppliedJobs from "./applied";
import SavedJobs from "./saved";
import { useColorModeValue } from "../ui/color-mode";

const MyJob = () => {
    const border = useColorModeValue("#d0d0d0", "#93989d");
      const color = useColorModeValue("#606261", "#fff");
    
  return (
    <Box mt="2rem">
      <Heading as="h2" fontWeight={"bold"}>
        My Job
      </Heading>
      <Text my="0.5rem" color={color} fontSize={"14px"}>
        See all your job activities
      </Text>
      <Box height=".6px" bg={border} w="full" />
      <Tabs.Root defaultValue="applied" variant={"plain"} mt="2rem">
        <Tabs.List mb="1rem">
          <Tabs.Trigger
            value="applied"
            asChild
            _selected={{
              background: "#007AFF",
              color: "white",
              borderRadius: "3rem",
              padding: "1rem",
            }}
          >
            <Link href="#saved" unstyled style={{ fontSize: ".9rem" }}>
              Applied Jobs
            </Link>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="saved"
            asChild
            _selected={{
              background: "#007AFF",
              color: "white",
              borderRadius: "3rem",
              padding: "1rem",
            }}
          >
            <Link
              unstyled
              style={{
                marginLeft: "1.5rem",
                marginRight: "1.5rem",
                fontSize: ".9rem",
              }}
              href="#saved"
            >
              Saved Jobs
            </Link>
          </Tabs.Trigger>
        </Tabs.List>
        <Box height=".6px" bg={border} w="full" />

        <Tabs.Content value="applied">
          <AppliedJobs />
        </Tabs.Content>
        <Tabs.Content value="saved">
          <SavedJobs />
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
};

export default MyJob;
