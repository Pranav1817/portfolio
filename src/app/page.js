
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import HeroSection from '@/components/HeroSection';
import ProjectSection from '@/components/Projects';
import Navbar from '@/components/Navbar';
import FooterSection from "@/components/FooterSection";
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <ExperienceSection/>
      <ContactSection/>
      <FooterSection/>
    </main>
  );
}