"use client";
import React, { useState, useEffect, useRef } from 'react';

const ContactPage: React.FC = () => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  return (
    <>
      <style jsx>{`
        .social-icon {
          transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
        }

        .social-icon:hover img {
          transform: scale(1.2);
          filter: brightness(1.2);
        }

        .submit-button {
          transition: transform 0.3s ease-in-out, background-image 0.3s ease-in-out;
        }

        .submit-button:hover {
          transform: scale(1.1);
          background-image: linear-gradient(to right, #8b5cf6, #ec4899); /* Gradient for hover */
        }
      `}</style>
      <div className="max-w-screen-lg mx-auto p-6 bg-transparent">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-100 mb-2">
            Contact Us
          </h1>
          <p className="text-lg text-gray-400">
            We'd love to hear from you! Get in touch with us using the form below or the contact information provided.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Contact Info Section */}
          <div className="md:col-span-5 p-8 text-white rounded-lg shadow-lg flex flex-col justify-between">
            <div className="mb-16">
              <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight mt-2">
                Get In <span className="text-indigo-600">Touch</span>
              </h3>
              <p className="mt-4 leading-7 text-gray-200">
                Have questions about our educational programs or need support? Reach out to us for assistance. We're here to help with any inquiries.
              </p>
              
              {/* Contact Details */}
              <div className="flex items-center mt-6">
                <img src="/icons/location.png" alt="Location icon" className="h-6 mr-3" />
                <span className="text-sm">123 Learning Street, Knowledge City, Educationland.</span>
              </div>
              <div className="flex items-center mt-4">
                <img src="/icons/helpdesk.png" alt="Phone icon" className="h-6 mr-3" />
                <span className="text-sm">+123 456 7890</span>
              </div>
              <div className="flex items-center mt-4">
                <img src="/icons/alarm.png" alt="Clock icon" className="h-6 mr-3" />
                <span className="text-sm">Mon-Fri, 9 AM - 5 PM</span>
              </div>
            </div>
            
            {/* Social Media Links (Fixed Position) */}
            <div className="fixed bottom-16 left-56 transform p-4 rounded-lg flex justify-around w-max space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="/icons/facebook.png" alt="Facebook" className="h-8" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="/icons/twitter.png" alt="Twitter" className="h-8" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="/icons/instagram.png" alt="Instagram" className="h-8" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="/icons/linkedin.png" alt="LinkedIn" className="h-8" />
              </a>
            </div>
          </div>
          
          {/* Contact Form Section */}
          <form className="md:col-span-7 p-8 rounded-lg shadow-lg relative bg-transparent">
            {/* Name Fields */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 relative">
                <label className="block text-white text-sm font-semibold mb-2" htmlFor="first-name">
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    className="appearance-none border-b border-indigo-500 w-full bg-transparent p-3 pl-12 pr-3 leading-tight focus:outline-none focus:border-indigo-700 transition-colors duration-300"
                    type="text"
                    placeholder="Jane"
                    aria-label="First name"
                    id="first-name"
                    aria-required="true"
                    required
                  />
                  <img src="/icons/profile.png" alt="User icon" className="absolute bottom-3 left-3 h-5" />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 relative">
                <label className="block text-white text-sm font-semibold mb-2" htmlFor="last-name">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    className="appearance-none border-b border-indigo-500 w-full bg-transparent p-3 pl-12 pr-3 leading-tight focus:outline-none focus:border-indigo-700 transition-colors duration-300"
                    type="text"
                    placeholder="Doe"
                    aria-label="Last name"
                    id="last-name"
                    aria-required="true"
                    required
                  />
                  <img src="/icons/profile.png" alt="User icon" className="absolute bottom-3 left-3 h-5" />
                </div>
              </div>
            </div>
            
            {/* Contact Details Fields */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 relative">
                <label className="block text-white text-sm font-semibold mb-2" htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    className="appearance-none border-b border-indigo-500 w-full bg-transparent p-3 pl-12 pr-3 leading-tight focus:outline-none focus:border-indigo-700 transition-colors duration-300"
                    type="tel"
                    placeholder="+123 456 7890"
                    aria-label="Phone number"
                    id="phone"
                    aria-required="true"
                    required
                  />
                  <img src="/icons/contact.png" alt="Phone icon" className="absolute bottom-3 left-3 h-5" />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 relative">
                <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    className="appearance-none border-b border-indigo-500 w-full bg-transparent p-3 pl-12 pr-3 leading-tight focus:outline-none focus:border-indigo-700 transition-colors duration-300"
                    type="email"
                    placeholder="jane.doe@example.com"
                    aria-label="Email address"
                    id="email"
                    aria-required="true"
                    required
                  />
                  <img src="/icons/mailing.png" alt="Email icon" className="absolute bottom-3 left-3 h-5" />
                </div>
              </div>
            </div>
            
            {/* Message Field */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 relative">
                <label className="block text-white text-sm font-semibold mb-2" htmlFor="message">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    ref={textareaRef}
                    className="custom-scrollbar flex w-full appearance-none border-b border-indigo-500 p-3 pl-12 pr-3 w-full bg-transparent px-3 placeholder:text-gray-400 text-[1rem] focus:outline-none focus:ring-none disabled:cursor-not-allowed disabled:opacity-50 pr-20 max-w-[30rem] break-words resize-none max-h-28 overflow-y-auto pt-2"
                    placeholder="Write your message here..."
                    aria-label="Your message"
                    id="message"
                    aria-required="true"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <img src="/icons/messge.png" alt="Message icon" className="absolute top-3 left-3 h-7" />
                </div>
              </div>
            </div>
            
            {/* Newsletter and Submit Button */}
            <div className="flex justify-between items-center w-full px-3 mb-6">
              <label className="flex items-center text-gray-500 font-semibold">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">Subscribe to our newsletter</span>
              </label>
              <button
                type="submit"
                className="submit-button bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-full text-white font-bold py-2 px-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
