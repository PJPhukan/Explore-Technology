"use client";

import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Course_data from "@/data/explore_courses.json";
import Link from "next/link";

//Defining own typescript DataTypes
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const Feature = () => {
  const featureCourses = Course_data.courses.filter(
    (couses: Course) => couses.isFeatured
  );
  return (
    <div className="py-10 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-xl text-teal-900 uppercase text-bold">
            Featured Courses
          </h2>
          <h1 className="text-4xl font-extrabold my-4 uppercase">
            Learn With Us
          </h1>
        </div>
      </div>
      <div className="mt-10">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {featureCourses.map((courses: Course) => (
            <div className="flex justify-center " key={courses.id}>
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <div className="flex p-4 sm:p-6 flex-col items-center flex-grow ">
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 lg:text-2xl">
                    {courses.title}
                  </p>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {courses.description}
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <Link href={`/courses/buy-now/${courses.slug}`}>
                      Buy now
                    </Link>
                  </button>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-10">
        <Link href={"/courses"}>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            View All Courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Feature;
