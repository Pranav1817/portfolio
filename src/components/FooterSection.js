import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="text-center ">
        <p className="text-sm">&copy; {new Date().getFullYear()} Pranav Keshao Kumbhalkar. All rights reserved.</p>
      </div>
    </footer>
  );
}
