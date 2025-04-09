'use client'


import ContactForm from "@/components/contact-us/contact-form";
import ContactHero from "@/components/contact-us/contact-hero";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Box } from "@chakra-ui/react";

export default function ContactPage() {
  return (
    <Box >
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </Box>
  );
}
