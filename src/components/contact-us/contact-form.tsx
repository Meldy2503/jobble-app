import MessageIcon from "../../assets/contact-img.svg";
import Wrapper from "../ui/wrapper";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { InputElement } from "../ui/input-element";
import Button from "../button";

const ContactForm = () => {
  
  return (
    <Wrapper pt="5rem" >
      <Flex
        justify={"space-between"}
        align={"center"}
        direction={{ base: "column", md: "row" }}
        columnGap="3rem"
        rowGap="5rem"
        pb={{ base: "5rem", md: "7rem" }}
      >
        <Box w={{ base: "100%", md: "45%" }}>
          <Heading
            as="h3"
            fontSize={{ base: "1.9rem", md: "2.5rem", lg: "3rem" }}
            lineHeight={1.3}
            fontWeight="bold"
          >
            Get in Touch
          </Heading>
          <Text mb="2rem" mt="1rem">
            Our support super heroes are a click away to help you get the most
            out of monday.com, so you can focus on working without limits.
          </Text>
          <Image
            src={MessageIcon}
            alt="message icon"
            width={500}
            height={500}
          />
        </Box>
        <Box w={{ base: "100%", md: "45%" }} textAlign={"center"}>
          <form>
            <Stack gap="1.5rem">
              <InputElement label="Full name" placeholder="Enter your name" />

              <InputElement
                label="Email address"
                placeholder="Enter your email address"
                type="email"
              />
              <InputElement
                label="Message"
                placeholder="Enter your message"
                type="textarea"
              />
            </Stack>
            <Box>
              <Button w={"full"} py="1.3rem" mt="1.5rem">
                Send Message
              </Button>{" "}
            </Box>
          </form>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default ContactForm;
