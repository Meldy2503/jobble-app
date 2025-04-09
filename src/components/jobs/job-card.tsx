import { FormatDate } from "@/lib/format-date";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { BsBookmarkDash } from "react-icons/bs";
import Button from "../button";
import { useColorModeValue } from "../ui/color-mode";

interface JobCardProps {
  title?: string;
  company_name?: string;
  company_logo?: string;
  category?: string;
  salary?: string;
  candidate_required_location?: string;
  job_type?: string;
  publication_date?: string;
  url?: string;
  onClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company_name,
  company_logo,
  category,
  salary,
  candidate_required_location,
  job_type,
  publication_date,
  url,
  onClick,
}) => {
  const bgColor = useColorModeValue("#fff", "#283244");
  const border = useColorModeValue("#fff", "rgba(255, 255, 255, 0.3)");
  const color = useColorModeValue("#606261", "#fff");
  const hover = useColorModeValue("#F8FCFF", "#006adc");
  const link = useColorModeValue("#006adc", "#F8FCFF");

  return (
    <Box
      borderRadius="15px"
      p={4}
      bg={bgColor}
      _hover={{ bg: hover }}
      overflowX={"hidden"}
      borderWidth="1px"
      borderColor={border}
      shadow={'xs'}
    >
      <VStack justify="space-between" align="start">
        <HStack justify={"space-between"} w="100%">
          <Flex alignItems={"center"} gap=".6rem">
          {company_logo &&  <Image
              src={company_logo || "../../assets/amazon.svg"}
              alt={company_name || "company logo"}
              width={30}
              height={30}
            />}
            <Text truncate fontWeight="bold" fontSize="md" color={color}>
              {company_name}
            </Text>
          </Flex>
          <BsBookmarkDash size={20} cursor={"pointer"} />
        </HStack>
        <VStack
          align="start"
          gap={1}
          w="100%"
          h={{ base: "inherit", md: "12rem", lg: "10rem" }}
          mt="10px"
        >
          <Text fontSize="lg" fontWeight="bold" w="95%">
            {title}
          </Text>
          <Flex
            alignItems={"center"}
            gap="1rem"
            justifyContent={"space-between"}
            w="100%"
            mt="1rem"
          >
            <Box w={{ base: "100%", sm: "75%" }} fontSize="15px" color={color}>
              <Text>Location: {candidate_required_location}</Text>
              <Text mt="3px">{category}</Text>
            </Box>
            <Box>
              <Text mb="8px" fontSize="15px">
                {job_type}
              </Text>

              <Flex
                borderWidth=".6px"
                borderColor={link}
                px=".1rem"
                py="0.3rem"
                color={link}
                fontSize={"0.8rem"}
                fontWeight={"semibold"}
                alignItems={"center"}
                justifyContent={"center"}
                rounded="3rem"
                w="7rem"
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {" "}
                  Visit website
                </a>
              </Flex>
            </Box>
          </Flex>
          <Text fontSize={"15px"} mt={{ base: "10px", sm: "5px" }} truncate>
            {salary?.startsWith("competitive") ? "competitive salary" : salary}
          </Text>
        </VStack>
      </VStack>
      <Flex
        justify="space-between"
        alignItems="center"
        mt={{ base: "2rem", sm: "1rem" }}
      >
        <Button
          bg="#dceefc"
          px=".8rem"
          py="0.5rem"
          color={"#0261c7"}
          fontSize={"0.85rem"}
          fontWeight={"semibold"}
          onClick={onClick}
          hover="#f3f4f5"
        >
          View Details
        </Button>
        {publication_date && (
          <Text fontSize="sm" color={color}>
            {FormatDate(publication_date)}
          </Text>
        )}
      </Flex>
    </Box>
  );
};

export default JobCard;
