import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}

const Button = ({ href, children, className }: Props) => {
  return (
    <>
      <Link
        href={href}
        className={`px-4 py-2 text-sm text-white font-medium  bg-violet-600 hover:bg-violet-700 rounded transition ${className}`}
      >
        {children}
      </Link>
    </>
  );
};

export default Button;
