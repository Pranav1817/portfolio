"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { DialogPanel, Dialog } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
// Import company logos
import accentureLogo from "@/Images/accenture.png";
import hakxcoreLogo from "@/Images/hakxcoreLogo.png";
import persistentLogo from "@/Images/Persistent.png";
import eduSkillLogo from "@/Images/eduSkill.png";
import codingNinjasLogo from "@/Images/codingNinjas.jpeg";

// Import certificates
import accentureCertificate from '@/app/certificates/AccentureCertificate.pdf';
import codingNinjasCertificate from '@/app/certificates/CodingNinjasCertificate.pdf';
import persistentCertificate from '@/app/certificates/PersistentCertificate.pdf';
import eduskillsCertificate from '@/app/certificates/EduskillsCertificate.pdf';
import hakxcoreCertificate from '@/app/certificates/EduskillsCertificate.pdf'; // Update with the actual path

const experiences = [
  { company: 'Accenture in India', logo: accentureLogo, position: 'Security Delivery Associate', certificate: accentureCertificate },
  { company: 'Hakxcore', logo: hakxcoreLogo, position: 'Software Developer Intern', certificate: hakxcoreCertificate },
  { company: 'Persistent Systems', logo: persistentLogo, position: 'Student Intern', certificate: persistentCertificate },
  { company: 'EduSkills Foundation', logo: eduSkillLogo, position: 'Student Intern', certificate: eduskillsCertificate },
  { company: 'Coding Ninjas', logo: codingNinjasLogo, position: 'Part-Time Teaching Assistant', certificate: codingNinjasCertificate },
];

export default function ExperienceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [certificateUrl, setCertificateUrl] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [currentIndex]);

  const nextCard = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  const prevCard = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length);

  const handleCardClick = (certificate) => {
    setCertificateUrl(certificate);
    setOpen(true);
  };

  return (
    <div className="bg-gray-100 p-6 pb-10" id='experience'>
      <h2 className="text-2xl font-bold text-center mb-8">Experience</h2>
      <div className="relative max-w-2xl mx-auto">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <button onClick={prevCard} className="p-2 text-black">
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <div className="w-full">
              <div className="flex justify-center">
                <div className="w-full max-w-md mx-auto">
                  <div className="bg-white shadow-md rounded-lg lg:flex">
                    <div className="p-4 flex justify-center">
                      <Image src={experiences[currentIndex].logo} alt={experiences[currentIndex].company} width={110} height={110} className='min-w-100' /> 
                    </div>
                    <div className="p-4">
                      <h2 className="text-lg font-bold mt-2">{experiences[currentIndex].company}</h2>
                      <p className="text-gray-700">{experiences[currentIndex].position}</p>
                      <button onClick={() => handleCardClick(experiences[currentIndex].certificate)} className="mt-4 text-blue-500 underline">
                        View Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={nextCard} className="p-2 text-black">
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Pop-up Window */}
      <Dialog open={open} onClose={() => setOpen(false)} className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white rounded-lg p-6 shadow-lg w-[90vw] h-[80vh]">
          <iframe src={certificateUrl} className="w-full h-[90%]" />
          <div className="mt-4 flex justify-between">
            <button onClick={() => window.open(certificateUrl, '_blank')} className="text-blue-500 underline">
              Open in New Window
            </button>
            <button onClick={() => setOpen(false)} className="text-red-500 underline">
              Close
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
