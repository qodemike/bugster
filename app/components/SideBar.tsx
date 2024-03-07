"use client";

import React from "react";
import NavLogo from "./NavLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { BellIcon } from "@radix-ui/react-icons";
import { PersonIcon, GearIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/theme-mode-switch";

const SideBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list", Icon: <BellIcon /> },
    { label: "Analytics", href: "/analytics" },
  ];

  return (
    <div className="fixed z-20 h-screen w-[230px] pb-6 text-muted-foreground bg-card border-r flex flex-col justify-between">
      <div>
        <div className="h-16 pl-6 border-b flex items-center ">
          <NavLogo />
        </div>
        <ul className=" mt-5 pl-6  flex flex-col gap-5">
          {links.map((link) => (
            <li>
              <Link
                href={link.href}
                className={`  transition-all  ${
                  currentPath === link.href
                    ? " dark:text-secondary-foreground "
                    : " dark:hover:text-secondary-foreground/80"
                } `}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="hover:dark:text-secondary-foreground/80  flex items-center gap-3 transition-all cursor-pointer">
            <GearIcon width={20} height={20} /> <span>Settings</span>
        </li>
        </ul>
      </div>
      <div className="pl-6 pt-7 text-sm border-t flex flex-col gap-5 ">
        {status === "authenticated" ? (
            <Link href={"/api/auth/signout"}>Log out</Link>
        ) : (
            <Link
              href={"/api/auth/signin"}
              className=" w-fit dark:hover:text-white flex items-center gap-3 transition-all"
            >
              <PersonIcon width={20} height={20} className="" />{" "}
              <span>Log in </span>
            </Link>
        )}
      </div>
    </div>
  );
};

export default SideBar;
