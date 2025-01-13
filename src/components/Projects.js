import React from 'react'
import ProjectCarousel from './ProjectCarousel';
import kanbanBoard from '@/Images/KanbanBoard.png';
const projects = [
    {
      title: 'Kanban Board',
      image: kanbanBoard,
      description: 'Built a Kanban board with Next.js, styled with TailwindCSS, and deployed on Firebase for scalability and performance.',
      link: 'https://kanban-board-177bf.web.app/',
    },
    {
      title: 'Kanban Board',
      image: kanbanBoard,
      description: 'Built a Kanban board with Next.js, styled with TailwindCSS, and deployed on Firebase for scalability and performance.',
      link: 'https://kanban-board-177bf.web.app/',
    },
    {
      title: 'Kanban Board',
      image: kanbanBoard,
      description: 'Built a Kanban board with Next.js, styled with TailwindCSS, and deployed on Firebase for scalability and performance.',
      link: 'https://kanban-board-177bf.web.app/',
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