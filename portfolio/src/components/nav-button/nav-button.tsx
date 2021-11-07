import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

interface Navprops {
  path: string;
  label: string;
}

export default function NavButton({ path, label }: Navprops) {
  const router = useRouter();
  return (
    <Link href={path}>
      <div
        className={`pt-4 md:pt-0 md:pr-4 menu-btn-lg cursor-pointer ${
          `/${router.pathname.split("/")[1]}` === path
            ? "menu-btn-lg-active"
            : ""
        }`}
      >
        {label}
      </div>
    </Link>
  );
}
