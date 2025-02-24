"use client";
import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    content: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({ email: '', subject: '', content: '' });
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    }
  };

  return (
    <div className="mt-5">
      <h2 className="text-3xl font-bold text-center mb-4">Contact</h2>
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center py-10" id='contact'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl p-8">
        {/* Left Section - Form */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-4xl font-semibold mb-6 text-blue-600">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 p-3 block w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-md font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-2 p-3 block w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-md font-medium text-gray-700">Content</label>
              <textarea
                name="content"
                id="content"
                value={formData.content}
                onChange={handleChange}
                className="mt-2 p-3 block w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 h-32"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Right Section - Thank You Text */}
        <div className="flex flex-col justify-center bg-blue-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold mb-4 text-blue-600">Thank You!</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            I appreciate you taking the time to visit my portfolio! If you would like to hire me, provide feedback, or report any issues with my projects, please feel free to reach out. Your messages are highly valued, and I look forward to hearing from you.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
