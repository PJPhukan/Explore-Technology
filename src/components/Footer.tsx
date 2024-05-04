import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-center items-start">
        <div>
          <h2 className="text-2xl py-4 text-white font-bold">About</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam,
            itaque in placeat rem tempora quam, voluptate laboriosam aperiam
            maxime perferendis sint consectetur tenetur reprehenderit nulla
            perspiciatis, quae adipisci voluptatibus?
          </p>
        </div>
        <div>
          <h2 className="text-2xl py-4 text-white font-bold">Quick Link</h2>
          <div className="text-sm flex flex-col ">
            <Link href="/all-couse" className="hover:text-white cursor-pointer">
              All Couses
            </Link>
            <Link href="/web-dev" className="hover:text-white cursor-pointer">
              Web Development
            </Link>
            <Link href="/react" className="hover:text-white cursor-pointer">
              React.js Masterclass
            </Link>
            <Link href="/python" className="hover:text-white cursor-pointer">
              Python Programming
            </Link>
            <Link
              href="/data-science"
              className="hover:text-white cursor-pointer"
            >
              Data Science
            </Link>
            <Link
              href="/javascript"
              className="hover:text-white cursor-pointer"
            >
              JavaScript Advanced
            </Link>
            <Link href="/ui-ux" className="hover:text-white cursor-pointer">
              UI/UX Design
            </Link>
            <Link href="/app-dev" className="hover:text-white cursor-pointer">
              Mobile App Development
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-2xl py-4 text-white font-bold">Social Media</h2>
          <div className="text-sm flex flex-col ">
            <Link
              href="www.instragram.com"
              className="hover:text-white cursor-pointer"
            >
              Instragram
            </Link>
            <Link href="www.x.com" className="hover:text-white cursor-pointer">
              Twitter
            </Link>
            <Link
              href="www.youtube.com"
              className="hover:text-white cursor-pointer"
            >
              Youtube
            </Link>
            <Link
              href="www.linkedin.com"
              className="hover:text-white cursor-pointer"
            >
              Linkedin
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-2xl py-4 text-white font-bold">Contact Us</h2>

          <p className="text-sm hover:text-white">New Delhi,India</p>
          <p className="text-sm hover:text-white">Delhi,7989761</p>
          <p className="text-sm hover:text-white">exploringtechnology@gmail.com</p>
          <p className="text-sm hover:text-white">+91 2324 1231 21</p>
        </div>
      </div>
      <p className="text-lg  text-center font-bold pt-10">&copy;2024 Exploring Technology. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
