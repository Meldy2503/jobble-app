import consulting from "@/assets/consulting.svg";
import finance from "@/assets/finance.svg";
import ui from "@/assets/ui.svg";
import marketing from "@/assets/marketing.svg";
import graphic from "@/assets/graphic.svg";
import video from "@/assets/video.svg";
import web from "@/assets/web.svg";
import project from "@/assets/project.svg";

interface JobCategory {
  title: string;
  jobsAvailable: number;
  logo: string;
}

export const jobCategories: JobCategory[] = [
  {
    title: "Marketing & Communication",
    jobsAvailable: 58,
    logo: marketing,
  },
  {
    title: "UI / UX Design",
    jobsAvailable: 120,
    logo: ui,
  },
  {
    title: "Finance Management",
    jobsAvailable: 230,
    logo: finance,
  },
  {
    title: "Web Development",
    jobsAvailable: 100,
    logo: web,
  },
  {
    title: "Project Management",
    jobsAvailable: 87,
    logo: project,
  },
  {
    title: "Business & Consulting",
    jobsAvailable: 23,
    logo: consulting,
  },
  {
    title: "Graphic Designer",
    jobsAvailable: 65,
    logo: graphic,
  },
  {
    title: "Video Editor",
    jobsAvailable: 120,
    logo: video,
  },
];

export const jobListings = [
  {
    id: "1",
    title: "Frontend Developer",
    companyName: "Tech Innovators Inc.",
    companyDetails:
      "A leading software development company focused on innovative web solutions.",
    category: "Software Development",
    experienceLevel: "Mid-Level",
    location: "Remote",
    salary: "$4,000 - $5,500",
    jobType: "Full-time",
    timeStamp: "2 days ago",
    jobResponsibilities: [
      "Develop and maintain web applications using React and Next.js.",
      "Collaborate with designers to implement user-friendly interfaces.",
      "Optimize applications for performance and scalability.",
      "Work closely with backend developers to integrate APIs.",
    ],
    jobRequirements: [
      "3+ years of experience in frontend development.",
      "Strong proficiency in React, Next.js, and TypeScript.",
      "Familiarity with TailwindCSS and Styled Components.",
      "Experience with Git and CI/CD workflows.",
    ],
    skills: ["Communication", "Problem-solving", "Teamwork"],
    benefits: ["Flexible working hours", "Health insurance", "Stock options"],
  },
  {
    id: "2",
    title: "Backend Engineer",
    companyName: "CloudTech Solutions",
    companyDetails:
      "A fast-growing cloud service provider helping businesses scale seamlessly.",
    category: "Software Development",
    experienceLevel: "Senior",
    location: "San Francisco, CA",
    salary: "$6,500 - $8,000",
    jobType: "Full-time",
    timeStamp: "1 week ago",
    jobResponsibilities: [
      "Develop scalable backend services using Node.js and Express.",
      "Design and optimize database structures for performance.",
      "Implement authentication and authorization mechanisms.",
      "Ensure high availability and security of applications.",
    ],
    jobRequirements: [
      "5+ years of backend development experience.",
      "Proficiency in Node.js, Express, and PostgreSQL.",
      "Experience with cloud platforms such as AWS or GCP.",
      "Strong understanding of RESTful APIs and GraphQL.",
    ],
    skills: ["Leadership", "Critical Thinking", "Attention to Detail"],
    benefits: ["Remote work options", "401(k) plan", "Paid time off"],
  },
  {
    id: "3",
    title: "UI/UX Designer",
    companyName: "Creative Minds Studio",
    companyDetails:
      "A design agency specializing in intuitive and visually appealing user experiences.",
    category: "Design",
    experienceLevel: "Mid-Level",
    location: "New York, NY",
    salary: "$4,500 - $6,000",
    jobType: "Full-time",
    timeStamp: "5 days ago",
    jobResponsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs.",
      "Conduct user research and usability testing.",
      "Collaborate with developers to ensure design feasibility.",
      "Maintain brand consistency across all platforms.",
    ],
    jobRequirements: [
      "3+ years of experience in UI/UX design.",
      "Proficiency in Figma, Sketch, and Adobe Creative Suite.",
      "Understanding of user-centered design principles.",
      "Ability to work in an agile development environment.",
    ],
    skills: ["Creativity", "Empathy", "Collaboration"],
    benefits: [
      "Health and wellness programs",
      "Training and development",
      "Flexible work hours",
    ],
  },
  {
    id: "4",
    title: "Full-Stack Developer",
    companyName: "InnovateX Solutions",
    companyDetails:
      "A startup focused on revolutionizing e-commerce with cutting-edge technology.",
    category: "Software Development",
    experienceLevel: "Mid-Level",
    location: "Austin, TX",
    salary: "$5,500 - $7,500",
    jobType: "Full-time",
    timeStamp: "3 days ago",
    jobResponsibilities: [
      "Develop and maintain web applications using MERN stack.",
      "Design and manage databases for optimal performance.",
      "Ensure security best practices in both frontend and backend.",
      "Collaborate with the product team to deliver user-centric solutions.",
    ],
    jobRequirements: [
      "4+ years of experience in full-stack development.",
      "Strong knowledge of MongoDB, Express.js, React, and Node.js.",
      "Experience with Docker and Kubernetes is a plus.",
      "Familiarity with agile development methodologies.",
    ],
    skills: ["Problem-solving", "Adaptability", "Time Management"],
    benefits: ["Equity options", "Remote-friendly", "Gym membership"],
  },
  {
    id: "5",
    title: "Product Manager",
    companyName: "NextGen Tech",
    companyDetails: "An AI-driven company building smart automation solutions.",
    category: "Product Management",
    experienceLevel: "Senior",
    location: "Remote",
    salary: "$8,000 - $10,000",
    jobType: "Full-time",
    timeStamp: "1 week ago",
    jobResponsibilities: [
      "Define and execute the product roadmap.",
      "Work closely with engineering and design teams.",
      "Conduct market research to identify user needs.",
      "Measure product performance and iterate based on data.",
    ],
    jobRequirements: [
      "5+ years of experience in product management.",
      "Strong understanding of Agile methodologies.",
      "Excellent analytical and problem-solving skills.",
      "Experience with A/B testing and data-driven decision-making.",
    ],
    skills: ["Leadership", "Strategic Thinking", "Collaboration"],
    benefits: ["Stock options", "Remote work", "Annual company retreat"],
  },
];
