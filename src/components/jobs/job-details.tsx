import {
  Box,
  Text,
  VStack,
  Flex,
  Heading,
  HStack,
} from "@chakra-ui/react";
import Button from "../button";
import { RxLightningBolt } from "react-icons/rx";
import parse from "html-react-parser";
import Image from "next/image";
import { useJob } from "@/context/job-context";
import { useColorModeValue } from "../ui/color-mode";

const JobDetails = () => {
  const { selectedJob } = useJob();
  const bgColor = useColorModeValue("#f9f9f9", "#283244");
  const textColor = useColorModeValue("#333", "#fff");
  const color = useColorModeValue("#606261", "#fff");
  const border = useColorModeValue("#d0d0d0", "rgba(255, 255, 255, 0.3)");
  
  

  return (
    <Box
      px={6}
      borderRadius="lg"
      maxW="1000px"
      mx="auto"
      h="85vh"
      overflowY={"auto"}
    >
      <VStack
        justify="space-between"
        align="start"
        position={"sticky"}
        top="0"
        bg={bgColor}
        color={textColor}
        mt={2}
      >
        <HStack justify={"space-between"} w="100%" flexWrap={"wrap"} gap="1rem">
          <Flex alignItems={"center"} gap=".6rem" flexWrap={"wrap"}>
            <Image
              src={selectedJob?.company_logo || "../../assets/amazon.svg"}
              alt={selectedJob?.company_name || "company name"}
              width={30}
              height={30}
            />
            <Text truncate fontWeight="bold" fontSize="md" color={color}>
              {selectedJob?.company_name}
            </Text>
          </Flex>
          <Flex
            border="1px solid #097af3"
            px=".1rem"
            py="0.3rem"
            color={"#097af3"}
            fontSize={"0.8rem"}
            fontWeight={"semibold"}
            alignItems={"center"}
            justifyContent={"center"}
            rounded="3rem"
            w="7rem"
          >
            <a
              href={selectedJob?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Visit website
            </a>
          </Flex>{" "}
        </HStack>
        <VStack align="start" gap={1} w="100%" my="20px">
          <Text fontSize="xl" fontWeight="bold" w="95%">
            {selectedJob?.title}
          </Text>
          <Flex
            alignItems={"center"}
            gap="1rem"
            justifyContent={"space-between"}
            w="100%"
            flexWrap={"wrap"}
            mt="1rem"
          >
            <Box fontSize="16px" color={color}>
              <Text>Location: {selectedJob?.candidate_required_location}</Text>
              {selectedJob?.salary && (
                <Text fontSize={"16px"} truncate color={textColor} mt="5px">
                  Salary:{" "}
                  {selectedJob?.salary?.startsWith("competitive")
                    ? "competitive salary"
                    : selectedJob?.salary}
                </Text>
              )}
            </Box>
            <Box>
              <Text mb="5px">{selectedJob?.category}</Text>

              <Text mb="5px" fontSize="16px">
                {selectedJob?.job_type}
              </Text>
            </Box>
          </Flex>
          <Flex
            mt="1rem"
            justifyContent={"space-between"}
            alignItems={"center"}
            w="100%"
            flexWrap={"wrap"}
            gap="1rem"
          >
            {selectedJob?.tags && (
              <Flex gap="5px" flexWrap={"wrap"} color="#606261">
                {selectedJob?.tags.map((tag, index) => (
                  <Box
                    bg="red.200"
                    key={index}
                    px="8px"
                    rounded="3rem"
                    fontSize={"12px"}
                  >
                    {tag}
                  </Box>
                ))}
              </Flex>
            )}
            <Button href={"/application-form"} px="1.5rem">
              <RxLightningBolt />
              <Text>Apply</Text>
            </Button>
          </Flex>
        </VStack>
      </VStack>
      <Box height=".6px" bg={border} w="full" />
      <Box width="100%" py={4} mt={3}>
        <Heading color={"#f5f6f7"} mb="10px" fontSize={"18px"}>
          Job Description
        </Heading>
        {selectedJob?.description && (
          <Box className="description">{parse(selectedJob?.description)}</Box>
        )}
      </Box>
    </Box>
  );
};

export default JobDetails;
