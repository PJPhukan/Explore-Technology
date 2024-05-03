"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcommingWeb = () => {
  const FeaturedWebinars = [
    {
      title: "Mobile App Development",
      description:
        "Dive into the world of app creation with our experts. Learn how to build user-friendly and innovative mobile applications that stand out in today's competitive market.",
      slug: "mobile-app-development",
      isFeatured: true,
    },
    {
      title: "UI/UX Design",
      description:
        "Design isn't just about aesthetics—it's about creating experiences. Discover the principles and tools behind captivating user interfaces and seamless user experiences.",
      slug: "ui-ux-design",
      isFeatured: true,
    },
    {
      title: "UI/UX Design Advanced",
      description:
        "Design isn't just about aesthetics—it's about creating experiences. Discover the principles and tools behind captivating user interfaces and seamless user experiences.",
      slug: "ui-ux-design-pro",
      isFeatured: true,
    },
    {
      title: "JavaScript Advanced",
      description:
        "Take your JavaScript skills to the next level. Explore advanced techniques, frameworks, and best practices to build dynamic and interactive web applications.",
      slug: "javascript-advanced",
      isFeatured: true,
    },
    {
      title: "Data Science",
      description:
        "Unleash the power of data! Learn how to extract insights, analyze trends, and make data-driven decisions with our comprehensive data science course.",
      slug: "data-science",
      isFeatured: true,
    },
    {
      title: "Python Programming",
      description:
        "Python is not just a language; it's a solution. Master Python programming from basics to advanced topics and become proficient in building robust applications and performing data analysis.",
      slug: "python-programming",
      isFeatured: true,
    },
    {
      title: "React.js Masterclass",
      description:
        "Build modern, scalable web applications with React.js. Gain hands-on experience in building components, managing state, and optimizing performance.",
      slug: "react-js-masterclass",
      isFeatured: true,
    },
    {
      title: "Web Development",
      description:
        "From HTML to advanced frameworks, our web development course covers everything you need to know to become a proficient web developer. Create responsive and feature-rich websites that impress.",
      slug: "web-development",
      isFeatured: true,
    },
  ];

  return (
    <div className=" p-12 bg-gray-900">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          {" "}
          <h2 className="text-xl text-teal-900 uppercase text-bold">
            Featured Webinars
          </h2>
          <p className="text-4xl font-extrabold my-4 uppercase">
            Enhance Your Coding Journey
          </p>
        </div>

        <div className="w-full mx-auto px-2 mt-10">
          <HoverEffect
            items={FeaturedWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/webinars/${webinar.slug}`,
            }))}
          />
        </div>
        
        <div className="mt-10 text-center">
          <Link href={"/webinars"}>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              View All Webinars
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcommingWeb;
