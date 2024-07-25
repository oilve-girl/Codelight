import React from "react";
import TeamCard from "./Teamscard";

// Define the properties for the team members
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

// TeamSection component
const TeamSection: React.FC = () => {
  // Define the team members with their details
  const teamMembers: TeamCardProps[] = [
    {
      name: "John Doe",
      role: "Software Engineer",
      imageUrl: 'https://images.pexels.com/photos/1095624/pexels-photo-1095624.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      socialLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        instagram: "https://instagram.com/johndoe",
      }
    },
    {
      name: "Jane Smith",
      role: "UX Designer",
      imageUrl: 'https://images.pexels.com/photos/1095624/pexels-photo-1095624.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      socialLinks: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        github: "https://github.com/janesmith",
        instagram: "https://instagram.com/janesmith",
      },
    },
    {
      name: "Alice Johnson",
      role: "Project Manager",
      imageUrl: 'https://images.pexels.com/photos/1095624/pexels-photo-1095624.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      socialLinks: {
        twitter: "https://twitter.com/alicejohnson",
        linkedin: "https://linkedin.com/in/alicejohnson",
        github: "https://github.com/alicejohnson",
        instagram: "https://instagram.com/alicejohnson",
      },
    },
    {
      name: "Bob Brown",
      role: "DevOps Engineer",
      imageUrl: 'https://images.pexels.com/photos/1095624/pexels-photo-1095624.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      socialLinks: {
        twitter: "https://twitter.com/bobbrown",
        linkedin: "https://linkedin.com/in/bobbrown",
        github: "https://github.com/bobbrown",
        instagram: "https://instagram.com/bobbrown",
      },
    },
  ];

  return (
    <section
      className="py-12 bg-cover bg-center bg-fixed lg:h-[650px]"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=1350&q=80)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Meet Our Team
        </h2>
        <div className="flex flex-col lg:mt-[80px] sm:mt-4 sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs">
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
