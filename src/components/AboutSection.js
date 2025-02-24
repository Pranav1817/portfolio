import React from 'react'

const AboutSection = () => {
    return (
        <section id="about" className="bg-gray-100 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
            I am a 2024 graduate seeking a full-time software development role. Proficient in Data Structures, Algorithms, and Java. Experienced as a Teaching Assistant at Coding Ninjas. Familiar with AWS and Cloud Computing fundamentals. I have also done my Internship at Accenture in the domain of CyberSecurity. 
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Experience</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                Completed my Internship at Coding Ninjas, Persistent Systems and Coding Ninjas. 
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Skills</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                Proficient in Data Structures, Algorithms, Java, and Cloud Computing fundamentals (AWS).
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Projects</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                Worked on various projects involving Java programming and cloud services using AWS.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Education</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Graduated in 2024 from Shri Ramdeobaba College of Engineering and Management
                </p>
              </div>
            </div>
          </div>
        </section>
    );
}

export default AboutSection