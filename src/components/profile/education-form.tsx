import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { InputElement } from "../ui/input-element";

const EducationForm = () => {
  return (
    <Box spaceY={"1.5rem"} as={"form"}>
      <InputElement label="Name of Institution" />
      <InputElement label="Field of study" />
      <InputElement label="Degree" />
      <Flex align={"flex-end"} gap="2rem">
        <InputElement label="Start date" placeholder="Month" />
        <InputElement placeholder="Year" />
      </Flex>
      <Flex align={"flex-end"} gap="2rem">
        <InputElement label="End date" placeholder="Month" />
        <InputElement placeholder="Year" />
      </Flex>
    </Box>
  );
};

export default EducationForm;
