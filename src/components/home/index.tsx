"use client";

import Footer from "@/components/footer";
import Categories from "@/components/home/categories";
import Companies from "@/components/home/companies";
import CountStats from "@/components/home/count-up";
import CreateProfile from "@/components/home/create-profile";
import Cta from "@/components/home/cta";
import Hero from "@/components/home/hero";
import HowItWorks from "@/components/home/how-it-works";
import Navbar from "@/components/navbar";
import { Box } from "@chakra-ui/react";

export default function HomePge() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <CountStats />
      <Companies />
      <Categories />
      <CreateProfile />
      <HowItWorks />
      <Cta />
      <Footer />
    </Box>
  );
}
