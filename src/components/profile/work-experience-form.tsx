import { Box, Checkbox, Flex } from "@chakra-ui/react";
import React from "react";
import { InputElement } from "../ui/input-element";

const WorkExperienceForm = () => {
  return (
    <Box spaceY={"1.5rem"} as={"form"}>
      <InputElement label="Job title" />
      <InputElement label="Company name" />
      <Checkbox.Root size={"lg"} variant={"outline"} my="4px">
        <Checkbox.HiddenInput />
        <Checkbox.Control rounded={"4px"} />
        <Checkbox.Label>I am currently working in this role</Checkbox.Label>
      </Checkbox.Root>
      <Flex align={"flex-end"} gap="2rem">
        <InputElement label="Start date" placeholder="Month" />
        <InputElement placeholder="Year" />
      </Flex>
      <Flex align={"flex-end"} gap="2rem">
        <InputElement label="End date" placeholder="Month" />
        <InputElement placeholder="Year" />
      </Flex>
      <InputElement h='inherit' type="textarea" label="Responsibility" placeholder="Add Responsibility " />
    </Box>
  );
};

export default WorkExperienceForm;
