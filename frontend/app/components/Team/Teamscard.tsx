import React from "react";
import Image from "next/image";

// Define the properties for the TeamCard component
interface TeamCardProps {
  name: string;
  role: string;
  imageUrl: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

// TeamCard component
const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  imageUrl,
  socialLinks,
}) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden group transform transition-transform hover:scale-105 h-80">
      <div className="relative w-full h-full overflow-hidden">
        <Image
          className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110"
          src={imageUrl}
          alt={name}
          layout="fill"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent group-hover:bg-gray-800 opacity-80 transition-colors duration-300">
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-white group-hover:text-yellow-400">{name}</h2>
            <p className="text-gray-300 group-hover:text-gray-100">{role}</p>
          </div>
          <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            {socialLinks?.twitter && (
              <a
                href={socialLinks.twitter}
                className="transform hover:scale-110 transition-transform duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <img src="/icons/twitter.png" alt="Twitter Icon" className="w-6 h-6"/>
              </a>
            )}
            {socialLinks?.linkedin && (
              <a
                href={socialLinks.linkedin}
                className="transform hover:scale-110 transition-transform duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src="/icons/linkedin.png" alt="LinkedIn Icon" className="w-6 h-6"/>
              </a>
            )}
            {socialLinks?.github && (
              <a
                href={socialLinks.github}
                className="transform hover:scale-110 transition-transform duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img src="/icons/github.png" alt="GitHub Icon" className="w-6 h-6"/>
              </a>
            )}
            {socialLinks?.instagram && (
              <a
                href={socialLinks.instagram}
                className="transform hover:scale-110 transition-transform duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img src="/icons/instagram.png" alt="Instagram Icon" className="w-6 h-6"/>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
