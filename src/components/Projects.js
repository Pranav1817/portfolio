import React from 'react'
import ProjectCarousel from './ProjectCarousel';
const projects = [
    {
      title: 'Project 1',
      image: '/path/to/project1.jpg',
      description: 'This is a description for Project 1.',
      link: 'https://project1.com',
    },
    {
      title: 'Project 2',
      image: '/path/to/project2.jpg',
      description: 'This is a description for Project 2.',
      link: 'https://project2.com',
    },
    {
      title: 'Project 3',
      image: '/path/to/project3.jpg',
      description: 'This is a description for Project 3.',
      link: 'https://project3.com',
    },
    // Add more projects here
  ];

const ProjectSection = () => {
  return (
    <div className="container mx-auto py-10" id='project'>
      <h2 className="text-2xl font-bold text-center mb-8">My Projects</h2>
      <ProjectCarousel projects={projects} />
    </div>
  )
}

export default ProjectSection