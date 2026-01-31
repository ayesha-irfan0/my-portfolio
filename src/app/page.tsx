"use client";
import React from "react";

const Home: React.FC = () => {
  return (
    <section className="flex justify-center px-6 mt-10">
      <div className="max-w-2xl bg-white p-8 rounded-lg shadow text-center">
        
        {/* Centered Rounded Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src="/profile.jpg"
            alt="Ayesha Irfan"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-600 shadow-lg"
          />
        </div>

        {/* Introduction Text */}
        <p className="text-gray-700 text-lg leading-relaxed">
          Hi, I’m <span className="font-semibold">Ayesha Irfan</span> — passionate about learning new skills and exploring
          the world of technology. My focus is on web development with Next.js,
          TailwindCSS, and TypeScript, and I aim to build clean, professional
          websites and chatbots while continuously improving my skills.
        </p>
      </div>
    </section>
  );
};

export default Home;
