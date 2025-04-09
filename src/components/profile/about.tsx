"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { BiPlus } from "react-icons/bi";
import Modal from "../ui/modal";
import SkillsForm from "./skills-form";
import useToggleModal from "@/hooks/use-toggle-modal";
import WorkExperienceForm from "./work-experience-form";
import EducationForm from "./education-form";
import { useColorModeValue } from "../ui/color-mode";

const About = () => {
  const { open: openSkills, toggleModal: toggleSkills } = useToggleModal();
  const { open: openExperience, toggleModal: toggleExperience } =
    useToggleModal();
  const { open: openEducation, toggleModal: toggleEducation } =
    useToggleModal();
      const color = useColorModeValue("#606261", "#fff");
        const border = useColorModeValue("#d0d0d0", "#93989d");
      
  return (
    <Box mt="2rem">
      <Heading as="h2" fontWeight={"bold"}>
        About
      </Heading>
      <Text my="0.5rem" color={color} fontSize={"14px"}>
        Updating your information will offer you the most relevant content
      </Text>
      <Box height=".6px" bg={border} w="full" />
      <Box py="1rem">
        <Flex
          mb="1rem"
          alignItems={"center"}
          justify={"space-between"}
          onClick={toggleSkills}
          cursor={"pointer"}
        >
          <Heading color={color} fontSize={"1.1rem"}>
            Skills
          </Heading>
          <BiPlus />
        </Flex>
        <Box height=".6px" bg={border} w="full" />
      </Box>
      <Box py="1rem">
        <Flex
          mb="1rem"
          alignItems={"center"}
          justify={"space-between"}
          onClick={toggleExperience}
          cursor={"pointer"}
        >
          <Heading color={color} fontSize={"1.1rem"}>
            Add work experience
          </Heading>
          <BiPlus />
        </Flex>
        <Box height=".6px" bg={border} w="full" />
      </Box>
      <Box py="1rem">
        <Flex
          mb="1rem"
          alignItems={"center"}
          justify={"space-between"}
          onClick={toggleEducation}
          cursor={"pointer"}
        >
          <Heading color={color} fontSize={"1.1rem"}>
            Add education
          </Heading>
          <BiPlus />
        </Flex>
        <Box height=".6px" bg={border} w="full" />
      </Box>
      <Modal
        open={openSkills}
        onOpenChange={toggleSkills}
        title="Add skill"
        cta
      >
        <SkillsForm />
      </Modal>
      <Modal
        open={openExperience}
        onOpenChange={toggleExperience}
        title="Add Work Experience"
        cta
      >
        <WorkExperienceForm />
      </Modal>
      <Modal
        open={openEducation}
        onOpenChange={toggleEducation}
        title="Add education"
        cta
      >
        <EducationForm />
      </Modal>
    </Box>
  );
};

export default About;
