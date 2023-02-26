import React from "react";
import Link from "next/link";

interface HeaderLinkProps {
  title: string;
  href: string;
}

export default function HeaderLink({ title, href }: HeaderLinkProps) {
  return (
    <Link
      href={href}
      className="group relative text-gray-200 ease-in-out hover:text-gray-50"
    >
      <span className="transition hover:text-gray-50">{title}</span>{" "}
      <span className="h- absolute -bottom-1 left-1/2 h-[2px] w-0 bg-gray-50 group-hover:w-1/2 group-hover:transition-all"></span>{" "}
      <span className="absolute -bottom-1 right-1/2 h-[2px] w-0 bg-gray-50 group-hover:w-1/2 group-hover:transition-all"></span>
    </Link>
  );
}
