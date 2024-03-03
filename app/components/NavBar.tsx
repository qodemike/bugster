"use client";

import { usePathname } from "next/navigation";
import React from "react";
import classnames from "classnames";
import { SiOpenbugbounty } from "react-icons/si";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import { ModeToggle } from "@/components/theme-mode-switch";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar,  AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <nav className=" h-20  px-5 lg:px-6 border-b flex  items-center">
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
         <ModeToggle/>         

        <div>
          {status === "loading" && <Skeleton width={"2.5rem"} height={"2.5rem"} borderRadius={"100%"} />}
          {status === "unauthenticated" && (
            <Link className="nav-link" href={"/api/auth/signin"}>
              Log in
            </Link>
          )}
          {status === "authenticated" && (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage
                  src={session.user!.image!}
                  />
                  <AvatarFallback>?</AvatarFallback>
                </Avatar>

              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <span >{session.user!.email}</span>
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
