"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/gohire-logo.svg";
import logo2 from "@/assets/logo-2.svg";
import { useColorModeValue } from "./ui/color-mode";

const Logo = () => {
  const imageSrc = useColorModeValue(logo, logo2);

  return (
    <Link href={"/"}>
      <Image src={imageSrc} alt="logo" height={115} width={115} />
    </Link>
  );
};

export default Logo;
