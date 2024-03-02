"use client";

import { usePathname } from "next/navigation";
import React from "react";
import classnames from "classnames";
import { SiOpenbugbounty } from "react-icons/si";
import { useSession } from "next-auth/react";
import { Avatar, Box, DropdownMenu, Text } from "@radix-ui/themes";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <nav className=" h-20 mb-5  px-5 lg:px-6 border-b flex  items-center">
      <div className=" w-full flex justify-between items-center ">
        <div className="flex items-center gap-10 ">
          <Link href={"/"} className=" relative -top-[1.5px] flex items-center">
            <SiOpenbugbounty size={35} />
            <span className="font-extrabold font-[Inter] text-2xl">
              Bugster
            </span>
          </Link>
          <ul className="flex gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={classnames({
                    "nav-link": true,
                    "!text-zinc-900": currentPath === l.href,
                  })}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Box>
          {status === "loading" && <Skeleton width={"2.5rem"} height={"2.5rem"} borderRadius={"100%"} />}
          {status === "unauthenticated" && (
            <Link className="nav-link" href={"/api/auth/signin"}>
              Login
            </Link>
          )}
          {status === "authenticated" && (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Avatar
                  src={session.user!.image!}
                  fallback="?"
                  radius="full"
                  className="cursor-pointer"
                />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Label>
                  <Box></Box>
                  <Text size={"2"}>{session.user!.email}</Text>
                </DropdownMenu.Label>
                <DropdownMenu.Item>
                  <Link href={"/api/auth/signout"}>Log out</Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          )}
        </Box>
      </div>
    </nav>
  );
};

export default NavBar;
