"use client";

import React from "react";
import NavLogo from "./NavLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  BarChartIcon,
  DashboardIcon,
  EnterIcon,
  ExitIcon,
} from "@radix-ui/react-icons";
import { BsGraphUp } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { BarChart2 } from "lucide-react";

const links = [
  {
    label: "Dashboard",
    href: "/",
    icon: <DashboardIcon width={20} height={20} />,
  },
  {
    label: "Issues",
    href: "/issues/list",
    icon: <FaList size={20} />,
  },
  { label: "Analytics", href: "/analytics", icon: <BsGraphUp size={20} /> },
  { label: "Weekly Overview", href: "/analytics/weekly", icon: <BarChart2 width={20} height={20} /> },
];

const SideBar = () => {
  const currentPath = usePathname();
  const { status } = useSession();

  return (
    <div className="fixed z-20 h-screen w-[230px] pb-6 text-muted-foreground bg-card border-r flex flex-col justify-between">
      <div>
        <div className="h-16 pl-6 border-b flex items-center ">
          <NavLogo />
        </div>
        <ul className=" mt-6 pl-6  flex flex-col gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={` text-sm flex items-center gap-4 transition-all  ${
                  currentPath === link.href
                    ? " text-secondary-foreground "
                    : " hover:text-secondary-foreground/90"
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="pl-6 pt-6 text-sm border-t flex flex-col gap-5 ">
        {status === "authenticated" ? (
          <Link
            href={"/api/auth/signout"}
            className=" w-fit dark:hover:text-white flex items-center gap-4 transition-all"
          >
            <ExitIcon width={20} height={20} />
            Log out
          </Link>
        ) : (
          <Link
            href={"/api/auth/signin"}
            className=" w-fit dark:hover:text-white flex items-center gap-4 transition-all"
          >
            <EnterIcon width={20} height={20} className="" />
            <span>Log in </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SideBar;
