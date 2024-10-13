import Image from 'next/image';
import Link from 'next/link';
import img from '/public/section1.png';
export default function HeroSection() {
    return (
        <section className="relative flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white h-full">

          <div className="container my-10 mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:items-stretch space-y-10 lg:space-y-0 lg:space-x-16 max-h-screen">
            
            {/* Left Side: Profile Picture and Name */}
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <Image
                src={img} 
                alt="Pranav Keshao Kumbhalkar"
                width={150}
                height={150}
                className="rounded-full mb-6 shadow-2xl border-4 border-white"
              />
              <h1 className="text-4xl lg:text-6xl font-extrabold mb-2">Pranav Keshao Kumbhalkar</h1>
              <p className="text-lg lg:text-2xl font-semibold">Software Developer | Freelancer | Security Engineer</p>
            </div>
    
            {/* Right Side: Brief Introduction and Call to Action */}
            <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-justify">
              <p className="text-lg lg:text-xl max-w-xl leading-relaxed mx-auto lg:mx-0">
                I am a passionate Software Developer with experience in full-stack development, 
                specializing in modern web technologies. I am actively looking for a full-time opportunity 
                in the IT industry where I can contribute and grow.
              </p>
              <div className="my-6" >
                <Link href="/#project" className="inline-block bg-white text-blue-600 font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                    View Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      );
}