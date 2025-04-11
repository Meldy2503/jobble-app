"use client";

import {
  Box,
  Flex,
  Field,
  Heading,
  Input,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface JobSearchProps {
  onSearch: (position: string, location: string) => void;
}

function JobSearch({ onSearch }: JobSearchProps) {
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch(position, location); // Pass search inputs to the parent
  };

  return (
    <Box>
      <Heading
        textAlign="center"
        fontSize={{ base: "1.9rem", md: "2.5rem", lg: "3rem" }}
        lineHeight={1.3}
        my={8}
        fontWeight={"semibold"}
      >
        Kickstart Your Career Journey
      </Heading>
      <Flex justify="center" gap={4}>
        <HStack
          gap="4"
          border={"1px solid #E2E8F0"}
          p={"8px"}
          rounded={"full"}
          bg={"#fff"}
          w={"800px"}
          h={"3.7rem"}
        >
          <Field.Root>
            <Input
              border={"none"}
              placeholder="Title"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              outline={"none"}
              px="1rem"
              fontSize={"1.1rem"}
            />
          </Field.Root>
          <Box borderLeft={"1px solid #B8BDBB"} h={"2rem"} />
          <Field.Root>
            <Input
              border={"none"}
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              outline={"none"}
              fontSize={"1rem"}
            />
          </Field.Root>
          <IconButton
            type="button"
            bg={"#006adc"}
            color={"white"}
            rounded={"full"}
            px={4}
            py="1.5rem"
            aria-label="Search"
            onClick={handleSearch} // Trigger search on click
          >
            <Box cursor="pointer">
              <FiSearch />
            </Box>
          </IconButton>
        </HStack>
      </Flex>
    </Box>
  );
}

export default JobSearch;
