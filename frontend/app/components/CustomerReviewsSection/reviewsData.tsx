// reviewsData.ts

// Define the interface for the review data
export interface Review {
    id: number;
    text: string;
    author: string;
    role: string;
    twitterUrl: string;
    linkedinUrl: string;
    profilePicUrl: string; // URL path for the profile picture
  }
  
  // Sample reviews data
  export const reviews: Review[] = [
    {
      id: 1,
      text: "The coding bootcamp provided by this platform completely transformed my career. The hands-on projects and real-world examples helped me master new technologies quickly and effectively. Highly recommended for anyone looking to break into tech!",
      author: "Alex Martinez",
      role: "Junior Web Developer",
      twitterUrl: "https://twitter.com/alexmartinez",
      linkedinUrl: "https://linkedin.com/in/alexmartinez",
      profilePicUrl: "https://cdn-icons-png.flaticon.com/512/194/194937.png", // male icon
    },
    {
      id: 2,
      text: "As an aspiring data scientist, I found the data analysis course to be extremely valuable. The interactive lessons and practical exercises were well-structured, and the feedback from instructors was insightful and constructive.",
      author: "Jordan Lee",
      role: "Data Science Student",
      twitterUrl: "https://twitter.com/jordanlee",
      linkedinUrl: "https://linkedin.com/in/jordanlee",
      profilePicUrl: "https://cdn-icons-png.flaticon.com/512/194/194938.png", // female icon
    },
    {
      id: 3,
      text: "The web development courses offered here are top-notch. The curriculum is up-to-date with the latest industry trends, and the support from the community has been fantastic. I feel more confident in my coding skills than ever before.",
      author: "Morgan Patel",
      role: "Frontend Developer",
      twitterUrl: "https://twitter.com/morganpatel",
      linkedinUrl: "https://linkedin.com/in/morganpatel",
      profilePicUrl: "https://cdn-icons-png.flaticon.com/512/194/194937.png", // male icon
    },
    {
      id: 4,
      text: "I've been using this platform to learn about full-stack development, and it's been a game-changer for me. The comprehensive lessons and coding challenges helped me build a strong foundation and gain practical experience.",
      author: "Taylor Kim",
      role: "Full-Stack Developer",
      twitterUrl: "https://twitter.com/taylorkim",
      linkedinUrl: "https://linkedin.com/in/taylorkim",
      profilePicUrl: "https://cdn-icons-png.flaticon.com/512/194/194938.png", // female icon
    },
    {
      id: 5,
      text: "The quality of the instructional content and the clarity of explanations in the courses are outstanding. I especially appreciate the real-time support and the interactive community that made learning to code both enjoyable and effective.",
      author: "Riley Johnson",
      role: "Software Engineer",
      twitterUrl: "https://twitter.com/rileyjohnson",
      linkedinUrl: "https://linkedin.com/in/rileyjohnson",
      profilePicUrl: "https://cdn-icons-png.flaticon.com/512/194/194937.png", // male icon
    },
    {
      id: 6,
      text: "This platform has been instrumental in advancing my career. The step-by-step tutorials and project-based learning approach allowed me to grasp complex concepts easily. The networking opportunities and community feedback were also invaluable.",
      author: "Casey Brown",
      role: "Tech Enthusiast",
      twitterUrl: "https://twitter.com/caseybrown",
      linkedinUrl: "https://linkedin.com/in/caseybrown",
      profilePicUrl: "https://cdn-icons-png.flaticon.com/512/194/194938.png", // female icon
    }
  ];
  