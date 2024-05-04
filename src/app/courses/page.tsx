"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import CourseData from "@/data/explore_courses.json";
const Courses = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-40">
      <h1 className="text-4xl text-center font-bold">
        All Courses [{CourseData.courses.length}]
      </h1>
      <div className=" flex flex-wrap justify-center items-center gap-4">
        {CourseData.courses.map((course) => (
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={course.title}
                />
              </CardItem>
              <div className="mt-6 text-center ">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >

                <Link href={course.slug} className="text-2xl bg-white text-black py-2 px-3 ">Buy now →</Link>
              </CardItem>
                </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Courses;
