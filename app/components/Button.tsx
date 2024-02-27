import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

const Button = ({ href, children }: Props) => {
  return (
    <>
      <Link
        href={href}
        className="px-5 py-2 text-sm text-white font-medium  bg-violet-600 hover:bg-violet-700 rounded transition "
      >
        {children}
      </Link>
    </>
  );
};

export default Button;
