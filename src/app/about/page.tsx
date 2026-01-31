"use client";
import React from "react";

const About: React.FC = () => {
  return (
    <section className="flex justify-center px-6 mt-10">
      <div className="max-w-2xl bg-white p-8 rounded-lg shadow text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          I am a motivated and exploring the world of programming and web
          development. My main interests are front-end development, UI/UX
          design,chatbots,coustom gpts and creating user-friendly applications. I believe in learning
          by building projects and collaborating with others.
        </p>
      </div>
    </section>
  );
};

export default About;
