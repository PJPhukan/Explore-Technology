import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";

const HomeSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" relative text-center z-10 p-5 w-full">
        <h1
          className="text-4xl md:text-7xl
         mt-20 md:mt-0  mx-auto font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 p-"
        >
          Exploring Tomorrow's Technology Today
        </h1>
        <p className="mt-4 font-normal text-base max-w-2xl mx-auto bg-transparent">
          Welcome to Unlocking the Future, your portal to tomorrow's tech.
          Explore cutting-edge innovations in AI, machine learning, robotics,
          and more. Delve into insightful content, industry trends, and
          thought-provoking discussions.
        </p>
        <div className="mt-10">
          <Link href={"/courses"}>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Explore Courses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
