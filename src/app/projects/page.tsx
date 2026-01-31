"use client";
import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="flex justify-center px-6 mt-10">
      <div className="max-w-5xl w-full bg-white p-8 rounded-lg shadow text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">My Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img src="/project1.jpg" alt="Project 1" className="rounded-lg shadow" />
          <img src="/project2.jpg" alt="Project 2" className="rounded-lg shadow" />
          <img src="/project3.jpg" alt="Project 3" className="rounded-lg shadow" />
          <img src="/project4.jpg" alt="Project 4" className="rounded-lg shadow" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
