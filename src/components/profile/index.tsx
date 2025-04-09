"use client";

import Navbar from "@/components/navbar";
import About from "@/components/profile/about";
import MyJob from "@/components/profile/my-job";
import Resume from "@/components/profile/resume";
import { useColorModeValue } from "@/components/ui/color-mode";
import { Avatar, Box, Grid, Heading, Link, Tabs, Text } from "@chakra-ui/react";

const ProfilePage = () => {
  const bgColor = useColorModeValue("#f9f9f9", "#171923");
  const color = useColorModeValue("#606261", "#fff");
  const textColor = useColorModeValue("#333", "#fff");
  return (
    <>
      <Navbar />
      <Grid
        placeItems={"center"}
        pt={{ base: "5rem", md: "7rem" }}
        pb="10rem"
        bg={bgColor}
        color={textColor}
      >
        <Box
          mt={10}
          w={{ base: "90%", md: "80%", lg: "60%" }}
          mx={"auto"}
          p={{ base: "1rem", sm: "2rem" }}
          border={"1px solid #CFD4D1"}
          rounded={"md"}
        >
          <Box>
            <Avatar.Root size={"2xl"}>
              <Avatar.Fallback name="Philip Maya" />
              <Avatar.Image src="https://bit.ly/sage-adebayo" />
            </Avatar.Root>
            <Heading mt="1rem">Philip Maya</Heading>
            <Text fontSize={"14px"} color={color} my="3px">
              UI/UX Designer
            </Text>
            <Text fontSize={"14px"} mb={"2rem"} color={color}>
              Porto, Portugal
            </Text>
            <Tabs.Root defaultValue="about">
              <Tabs.List>
                <Tabs.Trigger
                  value="about"
                  asChild
                  _selected={{
                    color: "#007AFF",
                  }}
                >
                  <Link unstyled href="#about" style={{ fontSize: "1rem" }}>
                    About
                  </Link>
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="resume"
                  asChild
                  _selected={{
                    color: "#007AFF",
                  }}
                >
                  <Link
                    unstyled
                    style={{
                      marginLeft: "1.5rem",
                      marginRight: "1.5rem",
                      fontSize: "1rem",
                    }}
                    href="#resume"
                  >
                    Resume
                  </Link>
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="my-job"
                  asChild
                  _selected={{
                    color: "#007AFF",
                  }}
                >
                  <Link unstyled href="#my-job" style={{ fontSize: "1rem" }}>
                    My Job
                  </Link>
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="about">
                <About />
              </Tabs.Content>
              <Tabs.Content value="resume">
                <Resume />
              </Tabs.Content>
              <Tabs.Content value="my-job">
                <MyJob />
              </Tabs.Content>
            </Tabs.Root>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default ProfilePage;
