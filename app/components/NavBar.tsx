"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import { ModeToggle } from "@/components/theme-mode-switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import NavLogo from "./NavLogo";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <nav className=" fixed z-20 w-screen h-16  px-5 md:px-7 lg:px-9 bg-background border-b flex  items-center">
      <div className=" w-full flex justify-between items-center ">
        <div className="flex items-end gap-10 ">
          <NavLogo />
          <ul className="flex items-end gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm text-muted-foreground font-medium transition-all  ${
                    currentPath === l.href
                      ? " dark:text-secondary-foreground "
                      : " dark:hover:text-secondary-foreground/80"
                  } `}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-8">
          <ModeToggle />
          {status === "loading" && (
            <Skeleton
              width={"2.5rem"}
              height={"2.5rem"}
              borderRadius={"100%"}
            />
          )}
          {status === "unauthenticated" && (
            <Link className="nav-link" href={"/api/auth/signin"}>
              Log in
            </Link>
          )}
          {status === "authenticated" && (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={session.user!.image!} />
                  <AvatarFallback>?</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <span>{session.user!.email}</span>
                </DropdownMenuLabel>
                <DropdownMenuItem>
                  <Link href={"/api/auth/signout"}>Log out</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
