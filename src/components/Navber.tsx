"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navber = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-5 inset-x-0 max-w-2xl mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 ">
            <HoveredLink href="/all-couse">All Couses</HoveredLink>
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/react">React.js Masterclass</HoveredLink>
            <HoveredLink href="/python">Python Programming</HoveredLink>
            <HoveredLink href="/data-science">Data Science</HoveredLink>
            <HoveredLink href="/javascript">JavaScript Advanced</HoveredLink>
            <HoveredLink href="/ui-ux">UI/UX Design</HoveredLink>
            <HoveredLink href="/app-dev">Mobile App Development</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact-us"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us" />
        </Link>
      </Menu>
    </div>
  );
};

export default Navber;
