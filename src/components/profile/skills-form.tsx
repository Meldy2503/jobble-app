import { Box } from "@chakra-ui/react";
import React from "react";
import { InputElement } from "../ui/input-element";

const SkillsForm = () => {
  return (
    <Box spaceY={"2rem"} as={"form"} >
      <InputElement label="Skill" required />
      <InputElement label="Years of Experience" placeholder="select" />
    </Box>
  );
};

export default SkillsForm;
