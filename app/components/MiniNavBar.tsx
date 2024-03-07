"use client";

import { ModeToggle } from "@/components/theme-mode-switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BellIcon } from "@radix-ui/react-icons";
import {  User2Icon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const MiniNavBar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className="z-20 fixed right-0 pr-7 flex items-center gap-3">
      <ModeToggle />
      <Button variant="ghost" className="px-2">
        <BellIcon width={20} height={20} />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger>
          {status === "authenticated" ? (
            <Avatar>
              <AvatarImage src={session.user!.image!} />
              <AvatarFallback>?</AvatarFallback>
            </Avatar>
          ) : (
            <Button variant="ghost" className="px-2">
              <User2Icon />
            </Button>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {status === "authenticated" && (
            <DropdownMenuLabel>
              {session.user?.email}
            </DropdownMenuLabel>
          )}
          <DropdownMenuItem>
            {status === "authenticated" ? (
              <Link href="/api/auth/signout" className="w-full">Log out </Link>
            ) : (
              <Link href="/api/auth/signin" className="w-full flex items-center gap-3"><FcGoogle size={30}/> Sign In with Google</Link>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default MiniNavBar;
