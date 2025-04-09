"use client";

import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { useColorModeValue } from "./ui/color-mode";

interface ButtonProps extends ChakraButtonProps {
  children: React.ReactNode;
  href?: string;
  bg?: string;
  px?: string;
  py?: string;
  hover?: string;
}

const Button = ({
  children,
  href,
  bg,
  px,
  py,
  hover,
  ...props
}: ButtonProps) => {
  const textColor = useColorModeValue("#fff", "#fff");

  if (href) {
    return (
      <Link href={href} passHref>
        <ChakraButton
          borderRadius={"3rem"}
          color={textColor}
          fontSize={"1rem"}
          fontWeight={"semibold"}
          px={px ?? "1.5rem"}
          py={py ?? ".5rem"}
          {...props}
          bg={bg ?? "#006adc"}
          _hover={hover ? { bg: hover } : { bg: "#0259b5" }}
        >
          {children}
        </ChakraButton>
      </Link>
    );
  }

  return (
    <ChakraButton
      borderRadius={"3rem"}
      fontSize={"1rem"}
      fontWeight={"semibold"}
      color={textColor}
      px={px ?? "1.5rem"}
      py={py ?? ".5rem"}
      bg={bg ?? "#006adc"}
      {...props}
      _hover={hover ? { bg: hover } : { bg: "#0259b5" }}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
