"use client";

import {
  Box,
  Flex,
  Icon,
  Drawer,
  Portal,
  CloseButton,
  Menu,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Button from "./button";
import { TbLogin2 } from "react-icons/tb";
import Logo from "./logo";
import { BsPersonCircle } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { ColorModeButton, useColorModeValue } from "./ui/color-mode";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(false);

  const pathname = usePathname();
  const bgColor = useColorModeValue("#f9f9f9", "#212938");
  const border = useColorModeValue(
    "1px solid #E5EAE8",
    "1px solid rgba(255, 255, 255, 0.3)"
  );
  const textColor = useColorModeValue("#333", "#fff");

  const handleAuth = () => {
    setAuth((prevAuth) => !prevAuth);
  };

  return (
    <Box
      w="100%"
      py="1rem"
      position={"fixed"}
      top={"0px"}
      bg={bgColor}
      color={textColor}
      zIndex={500}
      borderBottom={border}
    >
      <Flex
        width="90%"
        maxW={"1200px"}
        mx="auto"
        justify={"space-between"}
        align={"center"}
        color="brand.200"
      >
        <Logo />
        <ColorModeButton />
        {auth ? (
          <Box>
            <Menu.Root>
              <Menu.Trigger asChild>
                <Button bg="transparent" color={"black"} size="sm">
                  <BsPersonCircle />
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="profile">
                      <Link href={"/profile"}>Profile</Link>
                    </Menu.Item>
                    <Menu.Item value="my-jobs">
                      <Link href={"/my-jobs"}>My Jobs</Link>
                    </Menu.Item>
                    <Menu.Separator />
                    <Menu.Item value="export" color={"#006adc"}>
                      <HStack justify={"center"} w="full">
                        Sign out
                      </HStack>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Box>
        ) : (
          <Flex
            display={{ base: "none", lg: "flex" }}
            align={"center"}
            gap="2rem"
          >
            <Link
              href={"/jobs"}
              style={{
                fontSize: "1rem",
                fontWeight: pathname === "/jobs" ? "bold" : "normal",
                borderBottom:
                  pathname === "/jobs" ? "2px solid #006adc" : "none",
              }}
            >
              Jobs
            </Link>
            <Link
              href={"/contact-us"}
              style={{
                fontSize: "1rem",
                fontWeight: pathname === "/contact-us" ? "bold" : "normal",
                borderBottom:
                  pathname === "/contact-us" ? "2px solid #006adc" : "none",
              }}
            >
              Contact Us
            </Link>

            <Button
              bg={"transparent"}
              fontSize={"1rem"}
              href={"/login"}
              px=".5rem"
              fontWeight={"500"}
              color={textColor}
              hover="transparent"
            >
              Login
            </Button>
            <Button px="1rem" href={"/signup"}>
              <TbLogin2 />
              Sign up
            </Button>
          </Flex>
        )}
        <Box
          onClick={() => setOpen(!open)}
          display={{ base: "block", lg: "none" }}
        >
          <Icon
            as={open ? AiOutlineClose : GiHamburgerMenu}
            boxSize={7}
            cursor={"pointer"}
          />
        </Box>
      </Flex>

      <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content bg={bgColor}>
              <Drawer.Body>
                <Flex
                  direction="column"
                  rowGap={"1rem"}
                  align={"center"}
                  mt="4rem"
                >
                  <Logo />
                  <Link
                    href={"/jobs"}
                    style={{
                      fontSize: "1rem",
                      fontWeight: pathname === "/jobs" ? "bold" : "normal",
                      borderBottom:
                        pathname === "/jobs" ? "2px solid #006adc" : "none",
                      marginTop: "2rem",
                    }}
                  >
                    Jobs
                  </Link>
                  <Link
                    href={"/contact-us"}
                    style={{
                      fontSize: "1rem",
                      margin: "1rem 0",
                      fontWeight:
                        pathname === "/contact-us" ? "bold" : "normal",
                      borderBottom:
                        pathname === "/contact-us"
                          ? "2px solid #006adc"
                          : "none",
                    }}
                  >
                    Contact Us
                  </Link>
                  <Button
                    bg={"transparent"}
                    color={textColor}
                    fontSize={"1rem"}
                    href={"/login"}
                    hover="#fff"
                    mb="1rem"
                  >
                    Login
                  </Button>{" "}
                  <Button px="1rem" href={"/signup"} onClick={handleAuth}>
                    <TbLogin2 />
                    Sign up
                  </Button>{" "}
                </Flex>
              </Drawer.Body>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
};

export default Navbar;
