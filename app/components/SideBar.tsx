'use client'

import React from "react";
import NavLogo from "./NavLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { BellIcon} from '@radix-ui/react-icons'
import { PersonIcon } from "@radix-ui/react-icons";

const SideBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list", Icon: <BellIcon/> },
    { label: "Analytics", href: "/analytics" },
  ];

  return (
    <div className="fixed z-20 h-screen w-[230px]  pb-6 text-muted-foreground bg-card border-r flex flex-col justify-between">
      <div>
        <div className="h-16 pl-6 border-b flex items-center ">
          <NavLogo/>
        </div>
        <ul className="mt-5 pl-6 flex flex-col gap-5">
          {links.map((link) => (
            <li>
              <Link
                href={link.href}
                className={`text-sm text-muted-foreground font-medium transition-all  ${
                  currentPath === link.href
                    ? " dark:text-secondary-foreground "
                    : " dark:hover:text-secondary-foreground/80"
                } `}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="pl-7 text-sm ">
        <Link href={"/api/auth/signout"}>Log out</Link>
      </div>
    </div>
  );
};

export default SideBar;
