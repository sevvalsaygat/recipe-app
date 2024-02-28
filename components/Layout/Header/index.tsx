"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

type HeaderPropTypes = {};

const Header: React.FC<HeaderPropTypes> = () => {
  return (
    <div className="flex flex-row justify-between border-t-4 border-amber-500 w-full bg-orange-100 shadow-sm h-fit sticky py-2 px-28">
      <div className="flex flex-row items-center gap-6">
        <Link href="/">
          <Image src="/images/logo.png" width={95} height={95} alt="logo" />
        </Link>
      </div>
      <div className="flex flex-row items-center gap-3">
        <Link
          className="cursor-pointer py-3 px-6 border border-transparent w-fit bg-amber-500 hover:bg-amber-600 text-white text-xs font-sans rounded-lg"
          href="/recipe/new"
        >
          Add New Recipe
        </Link>
      </div>
    </div>
  );
};

export default Header;
