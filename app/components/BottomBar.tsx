'use client'

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { GearIcon, DashboardIcon } from "@radix-ui/react-icons";
import { BsGraphUp } from "react-icons/bs";
import { FaList  } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { BarChart2 } from "lucide-react";

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
  { label: "Settings", href: "/analytics/weekly", icon: <BarChart2 width={25} height={25} /> },
];

const BottomBar = () => {
    const path = usePathname()
  return (
    <Card className="z-20 w-full  rounded-none  fixed bottom-0 flex justify-center">
      <ul className=" w-full max-w-sm text-muted-foreground flex justify-between  ">
        {links.map((link) => (
          <li key={link.label} className={`p-5 transition-all ${path === link.href ? "text-foreground bg-secondary " : '' } `}>
            <Link href={link.href}>{link.icon}</Link>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default BottomBar;
