"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classnames from "classnames";

import { SiOpenbugbounty } from "react-icons/si";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="h-14 mb-5 px-5  border-b flex items-center gap-7">
      <Link href={"/"} className=" flex items-center">
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
    </nav>
  );
};

export default NavBar;
