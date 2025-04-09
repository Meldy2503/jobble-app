"use client";

import React, { useState } from "react";

import {
  Box,
  Field,
  Flex,
  Icon,
  Input,
  Text,
  Textarea,
  defineStyle,
} from "@chakra-ui/react";
import { AiOutlineFileText, AiOutlinePlus } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { useColorModeValue } from "./color-mode";

interface InputElementProps {
  inputStyle?: "floating" | "filled";
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  h?: string;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  rounded?: string;
}

export const InputElement = ({
  inputStyle,
  label,
  placeholder,
  h,
  type = "text",
  value,
  onChange,
  required = false,
  rounded,
  ...props
}: InputElementProps) => {
  const border = useColorModeValue("#d0d0d0", "rgba(255, 255, 255, 0.7)");

  // Track the uploaded filename to switch icons and show the name
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  // If this is a file input, style it to show an icon and label, matching the screenshot
  if (type === "file") {
    // Wrap `onChange` so we can capture the file name too
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
      if (e.target.files && e.target.files.length > 0) {
        setSelectedFile(e.target.files[0].name);
      } else {
        setSelectedFile(null);
      }
    };

    return (
      <Field.Root required={required} w="full">
        {label && (
          <Flex mb="1">
            <Field.Label fontWeight="semibold" fontSize={"1rem"}>
              {label}
            </Field.Label>
            {required && <Field.RequiredIndicator color="red.500" ml="1" />}
          </Flex>
        )}

        <Box
          as="label"
          border="1px solid"
          borderColor={border}
          rounded="md"
          p="2"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          _hover={{ bg: "gray.50" }}
          cursor="pointer"
          width="full"
        >
          <Flex alignItems="center">
            {/* Show a + icon if no file is selected, otherwise show a file icon */}
            <Icon boxSize={5} mr={2} color="gray.600">
              {selectedFile ? <AiOutlineFileText /> : <AiOutlinePlus />}
            </Icon>
            {/* If `selectedFile` exists, show its name; otherwise fallback to `value` prop or “No file selected” */}
            <Text color="gray.700">
              {selectedFile || value || "No file selected"}
            </Text>
          </Flex>
          {/* Show "Change File" text if a file is selected */}
          {selectedFile && (
            <Flex gap="5px" alignItems={"center"} color="blue.500">
              <BiPlus />
              <Text fontSize="sm">Change File</Text>
            </Flex>
          )}
          {/* Hidden native input that opens the file picker */}
          <Input
            type="file"
            required
            display="none"
            onChange={handleFileChange}
            {...props}
          />
        </Box>
      </Field.Root>
    );
  }
  if (inputStyle == "floating") {
    return (
      <Field.Root required={required}>
        <Box pos="relative" w="full">
          <Input
            className="peer"
            required
            fontSize={"1rem"}
            border="1px solid"
            borderColor={border}
            py="1.5rem"
            px="1rem"
            type={type}
            {...props}
            value={value}
            onChange={(e) =>
              onChange?.(e as React.ChangeEvent<HTMLInputElement>)
            }
            rounded={"8px"}
          />
          <Field.Label css={floatingStyles}>{label}</Field.Label>
        </Box>
      </Field.Root>
    );
  }
  if (type === "textarea") {
    return (
      <Field.Root required={required}>
        {label && <Field.Label fontSize={"1rem"}>{label}</Field.Label>}
        <Textarea
          py="1.5rem"
          px="1rem"
          required
          border="1px solid"
          borderColor={border}
          fontSize={"1rem"}
          height={h ?? "13rem"}
          // autoresize
          size={"xl"}
          placeholder={placeholder || label}
          {...props}
          value={value}
          onChange={(e) =>
            onChange?.(e as React.ChangeEvent<HTMLTextAreaElement>)
          }
          rounded={rounded || "8px"}
        />
      </Field.Root>
    );
  }
  return (
    <Field.Root required={required}>
      <Flex>
        {label && <Field.Label fontSize={"1rem"}>{label}</Field.Label>}
        {required && <Field.RequiredIndicator color={"black"} />}
      </Flex>
      <Input
        className="peer"
        border="1px solid"
        borderColor={border}
        py="1.5rem"
        required
        px="1rem"
        fontSize={"1rem"}
        placeholder={placeholder || label}
        type={type}
        {...props}
        value={value}
        onChange={onChange}
        rounded={rounded || "8px"}
      />
    </Field.Root>
  );
};

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "bg",
  px: "0.5",
  top: "-3",
  insetStart: "2",
  fontWeight: "normal",
  fontSize: "1rem",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "fg",
    top: "-3",
    insetStart: "2",
  },
});
