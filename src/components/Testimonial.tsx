"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonial = () => {
  const TestimonialMessage = [
    {
      quote:
        "The Mobile App Development course helped me create my first app from scratch! It's incredible to see how much I've learned in such a short time.",
      name: "Ethan Parker",
      title: "Mobile App Developer",
    },
    {
      quote:
        "UI/UX Design course provided me with valuable insights into creating user-friendly interfaces. I now feel equipped to tackle design challenges with confidence.",
      name: "Olivia Scott",
      title: "UI/UX Designer",
    },
    {
      quote:
        "JavaScript Advanced course took my coding skills to the next level. The advanced topics and real-world projects were exactly what I needed to excel in web development.",
      name: "Liam Anderson",
      title: "Full Stack Developer",
    },
    {
      quote:
        "Data Science course gave me a solid foundation in data analysis and machine learning. The practical exercises were instrumental in honing my data skills.",
      name: "Ava Martinez",
      title: "Data Scientist",
    },
    {
      quote:
        "Python Programming course made learning Python a breeze! The structured content and hands-on exercises were incredibly helpful for a beginner like me.",
      name: "Noah Thompson",
      title: "Python Developer",
    },
    {
      quote:
        "React.js Masterclass course was a game-changer for me. I now build dynamic and interactive web applications with ease, thanks to this comprehensive course.",
      name: "Isabella White",
      title: "Frontend Developer",
    },
    {
      quote:
        "Web Development course equipped me with the skills to build responsive and modern websites. The projects and practical assignments were invaluable in my learning journey.",
      name: "Lucas Wilson",
      title: "Web Developer",
    },
  ];

  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] flex items-center flex-col justify-center relative overflow-hidden">
      <h2 className="text-6xl py-10 font-extrabold text-center">Testimonials</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={TestimonialMessage}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
