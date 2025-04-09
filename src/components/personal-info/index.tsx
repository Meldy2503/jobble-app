import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Biodata from "@/components/personal-info/biodata";
import { Box } from "@chakra-ui/react";
import React from "react";

const PersonalInfoPage = () => {
  return (
    <Box bg={"#f9f9f9"}>
      <Navbar />
      <Biodata />
      <Footer />
    </Box>
  );
};

export default PersonalInfoPage;
