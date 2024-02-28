"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classnames from "classnames";
import { SiOpenbugbounty } from "react-icons/si";
import { useSession } from "next-auth/react";
import { Box } from "@radix-ui/themes";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <nav className=" mb-5  py-4 px-5 lg:px-6 border-b">
      <div className=" flex justify-between items-center">
      <div className="flex items-center gap-10 ">
        <Link href={"/"} className=" relative -top-[1.5px] flex items-center">
          <SiOpenbugbounty size={35} />
          <span className="font-extrabold font-[Inter] text-2xl">Bugster</span>
        </Link>
        <ul className="flex gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={classnames({
                  "text-zinc-900": currentPath === l.href,
                  "text-zinc-500": currentPath != l.href,
                  "hover:text-zinc-800 transition": true,
                })}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Box>
        {status === "authenticated" && (
          <Link href="api/auth/signout">Log out</Link>
        )}
        {status === "unauthenticated" && (
          <Link href={"api/auth/signin"}>Login</Link>
        )}
      </Box>
      </div>
    </nav>
  );
};

export default NavBar;
