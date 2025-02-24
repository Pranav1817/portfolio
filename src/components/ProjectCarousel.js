"use client";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";

const ProjectCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative  w-full flex items-center justify-center">
      <button
        onClick={handlePrev}
        className="absolute left-4 p-2 bg-gray-800 rounded-full text-white"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>

      <div className="w-full max-w-2xl  overflow-hidden rounded-lg shadow-lg">
        <a
          href={projects[currentIndex].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center bg-white">
            <Image
              src={projects[currentIndex]?.image?.src}
              alt={projects[currentIndex].title}
              width={500} // Set the desired width
              height={300} // Set the desired height
              placeholder="empty" // Disables blur placeholder
              className="w-full h-50 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                {projects[currentIndex].title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {projects[currentIndex].description}
              </p>
            </div>
          </div>
        </a>
      </div>

      <button
        onClick={handleNext}
        className="absolute right-4 p-2 bg-gray-800 rounded-full text-white"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ProjectCarousel;
