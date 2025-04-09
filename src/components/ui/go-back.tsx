// import { IconButton } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { FaArrowLeftLong } from "react-icons/fa6";

interface GoBackProps {
  chevron?: boolean;
}

const GoBack = ({ chevron }: GoBackProps) => {
  return (
    <Box cursor={"pointer"} onClick={() => window.history.back()}>
      {chevron ? <BiChevronLeft /> : <FaArrowLeftLong />}
    </Box>
  );
};

export default GoBack;
