import React from 'react'
import ProjectCarousel from './ProjectCarousel';
import kanbanBoard from '@/Images/KanbanBoard.png';
import saasLandingPage from '@/Images/SaasLandingPage.png';
const projects = [
    {
      title: 'Kanban Board',
      image: kanbanBoard,
      description: 'Built a Kanban board with Next.js, styled with TailwindCSS, and deployed on Firebase for scalability and performance.',
      link: 'https://kanban-board-177bf.web.app/',
    },
    {
      title: 'SaaS Landing Page',
      image: saasLandingPage,
      description: 'Built a responsive landing page with Next.js, styled with TailwindCSS, and deployed on Vercel for scalability and performance.',
      link: 'https://saas-landing-page-1-psi.vercel.app/',
    },
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