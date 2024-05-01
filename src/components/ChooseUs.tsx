"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const ChooseUs = () => {
  const content = [
    {
      title: "Exploring Tomorrow's Technology Today",
      description:
        "At Exploring Tomorrow's Technology Today, we offer cutting-edge tech-related courses designed to keep you ahead in the ever-evolving world of technology. Our courses are curated by industry experts and cover a wide range of topics, from artificial intelligence and blockchain to cybersecurity and data science. By choosing us, you'll gain access to the latest tools, trends, and insights that will empower you to succeed in tomorrow's tech landscape.",
    },
    {
      title: "Tech Pioneers Academy",
      description:
        "Tech Pioneers Academy is your gateway to mastering the technologies of tomorrow, today. Our courses are meticulously crafted by top-tier professionals and cover a spectrum of disciplines including machine learning, cloud computing, IoT, and more. By enrolling with us, you'll not only acquire practical skills but also join a community dedicated to innovation and growth in the tech industry.",
    },
    {
      title: "FutureTech Institute",
      description:
        "Welcome to FutureTech Institute, where we bring you the future of technology today. Our comprehensive courses span emerging fields like quantum computing, augmented reality, and sustainable tech solutions. By choosing us, you'll gain a competitive edge with hands-on learning experiences and insights from industry leaders, preparing you for the challenges and opportunities of tomorrow's tech-driven world.",
    },
    {
      title: "TechForward Education Hub",
      description:
        "TechForward Education Hub is your go-to destination for staying ahead in the rapidly advancing world of technology. Our courses cover a wide array of subjects such as cybersecurity, digital marketing, software development, and more. By joining our community, you'll gain access to expert-led training, cutting-edge resources, and networking opportunities that will propel your tech career forward.",
    },
  ];
  return (
    <div >
      <StickyScroll content={content} />
    </div>
  );
};

export default ChooseUs;
