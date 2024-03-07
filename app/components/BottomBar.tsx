'use client'

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { GearIcon, DashboardIcon } from "@radix-ui/react-icons";
import { BsGraphUp } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Dashboard",
    href: "/",
    icon: <DashboardIcon width={25} height={25} />,
  },
  {
    label: "Issues",
    href: "/issues/list",
    icon: <FaList size={25} />,
  },
  { label: "Analytics", href: "/analytics", icon: <BsGraphUp size={25} /> },
  { label: "Settings", href: "", icon: <GearIcon width={25} height={25} /> },
];

const BottomBar = () => {
    const path = usePathname()
  return (
    <Card className="z-20 w-full  rounded-none  fixed bottom-0">
      <ul className="w-full text-muted-foreground flex justify-between  ">
        {links.map((link) => (
          <li className={`p-5  ${path === link.href ? "text-foreground bg-secondary " : '' } transition-all `}>
            <Link href={link.href}>{link.icon}</Link>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default BottomBar;
