"use client";
import React from 'react';
import { reviews } from './reviewsData'; // Adjust the path as needed

// Define the interface for the review data
interface Review {
  id: number;
  text: string;
  author: string;
  role: string;
  twitterUrl: string;
  linkedinUrl: string;
  profilePicUrl: string; // URL path for the profile picture
}

// SocialMediaLinks component for rendering social media links
const SocialMediaLinks: React.FC<{ twitterUrl: string; linkedinUrl: string }> = ({ twitterUrl, linkedinUrl }) => (
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
    {/* Twitter Link */}
    <a
      href={twitterUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      className="w-10 h-10 flex items-center justify-center rounded-full border border-white bg-transparent text-white transition-colors duration-300 hover:text-black hover:bg-white"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M22.46 6.03c-.81.36-1.68.6-2.59.71.93-.56 1.64-1.44 1.97-2.5-.87.51-1.84.87-2.87 1.07-.82-.87-1.99-1.41-3.28-1.41-2.48 0-4.5 2.02-4.5 4.5 0 .35.04.69.1 1.02-3.74-.19-7.06-1.98-9.27-4.7-.39.68-.61 1.48-.61 2.34 0 1.62.82 3.05 2.05 3.9-.76-.03-1.48-.23-2.11-.57v.06c0 2.25 1.61 4.12 3.75 4.54-.39.11-.8.17-1.22.17-.3 0-.59-.03-.88-.08.59 1.83 2.28 3.17 4.29 3.2-1.58 1.24-3.57 1.98-5.72 1.98-.37 0-.73-.02-1.1-.06 2.03 1.31 4.44 2.08 7.04 2.08 8.44 0 13.04-7 13.04-13.04 0-.2-.01-.39-.02-.59.9-.65 1.68-1.46 2.3-2.38z"/>
      </svg>
    </a>
    {/* LinkedIn Link */}
    <a
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="w-10 h-10 flex items-center justify-center rounded-full border border-white bg-transparent text-white transition-colors duration-300 hover:text-blue-700 hover:bg-white"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M19.49 3H4.51C3.67 3 3 3.67 3 4.51v15.02C3 20.33 3.67 21 4.51 21h14.98c.84 0 1.51-.67 1.51-1.51V4.51C21 3.67 20.33 3 19.49 3zM8.44 18.48H5.97V10.9h2.47v7.58zM7.2 9.36c-.78 0-1.41-.63-1.41-1.41s.63-1.41 1.41-1.41c.78 0 1.41.63 1.41 1.41s-.63 1.41-1.41 1.41zM18.04 18.48h-2.47v-3.99c0-.95-.02-2.17-1.32-2.17-1.32 0-1.53 1.03-1.53 2.09v3.07h-2.47V10.9h2.36v1.05h.03c.33-.63 1.14-1.29 2.34-1.29 2.5 0 2.96 1.64 2.96 3.77v4.05z"/>
      </svg>
    </a>
  </div>
);

// ReviewCard component to display individual reviews
const ReviewCard: React.FC<{ review: Review }> = React.memo(({ review }) => {
  return (
    <div className="relative bg-transparent border border-[#30303e] p-8 rounded-3xl text-[#e0e0e0] shadow-lg flex flex-col h-auto max-w-lg mx-auto transition-transform transform hover:scale-105 hover:shadow-xl duration-500 ease-in-out">
      <div className="flex items-center mb-6">
        <img
          src={review.profilePicUrl}
          alt={`Profile picture of ${review.author}`}
          className="w-20 h-20 rounded-full mr-6 object-cover border-4 border-[#9b59b6] shadow-lg"
        />
        <div>
          <p className="font-semibold text-2xl text-[#ffffff] mb-1">{review.author}</p>
          <p className="text-sm text-gray-400">{review.role}</p>
        </div>
      </div>
      <div className="border-t border-[#30303e] my-4"></div>
      <p className="text-base leading-relaxed mb-6 italic text-gray-300">{`"${review.text}"`}</p>
      <SocialMediaLinks twitterUrl={review.twitterUrl} linkedinUrl={review.linkedinUrl} />
    </div>
  );
});

// Main CustomerReviewsSection component
const CustomerReviewsSection: React.FC = () => {
  return (
    <section className="relative bg-[#1b1b3a]/70 border border-[#30303e] p-8 rounded-2xl text-[#e0e0e0] shadow-lg py-16 px-4 min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-8 sm:text-4xl animate__animated animate__fadeIn animate__delay-1s">
          What Our Learners Say About Our Coding Courses
        </h2>
        <p className="text-lg mb-12 sm:text-base animate__animated animate__fadeIn animate__delay-2s">
          Discover how our interactive lessons, expert guidance, and practical projects have helped our students advance their careers in the tech industry. Read their experiences and see why they recommend our coding courses!
        </p>
        {/* Review Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewsSection;
