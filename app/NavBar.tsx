import Link from "next/link";
import React from "react";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="h-14 mb-5 px-5  border-b flex items-center gap-7">
      <Link href={"/"}>Logo</Link>
      <ul className="flex gap-7">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-zinc-500 hover:text-zinc-800 transition"
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
