"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import { useColorModeValue } from "./color-mode";

interface WrapperProps {
  children: React.ReactNode;
  pt?: string | { base?: string; md?: string; lg?: string };
  pb?: string | { base?: string; md?: string; lg?: string };
  bg?: string;
}

const Wrapper = ({ children, pt, bg, pb }: WrapperProps) => {
  const bgColor = useColorModeValue("#f9f9f9", "#171923");
  const textColor = useColorModeValue("#333", "#fff");
  return (
    <Box
      w="100%"
      pt={pt ?? "7rem"}
      pb={pb}
      bg={bg ?? bgColor}
      color={textColor}
    >
      <Box maxW="1200px" w="90%" mx="auto">
        {children}
      </Box>
    </Box>
  );
};

export default Wrapper;
