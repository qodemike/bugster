"use client";

import React from "react";
import Link from "next/link";
import logoBlack from "@/public/Logo_black.svg";
import logoWhite from "@/public/Logo_white.svg";
import Image from "next/image";
import { useTheme } from "next-themes";

const NavLogo = () => {
  const { theme } = useTheme();

  return (
    <Link href={"/"} className=" w-[133px] h-[30px]">
      {theme === "light" ? (
        <Image src={logoBlack} alt="logo_img"  />
      ) : (
        <Image src={logoWhite} alt="logo_img" />
      )}
    </Link>
  );
};

export default NavLogo;
