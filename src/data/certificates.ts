export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  certificateUrl: string;
};

export const certificates: Certificate[] = [
  {
    id: "mern-internship",
    title: "Full Stack Web Development (MERN) Intern",
    issuer: "Sparkradix Technologies",
    date: "09/2025",
    certificateUrl: "/certificates/MERN.pdf",
  },

  {
    id: "Software Engineering Job Simulation",
    title: "Software Engineering Job Simulation",
    issuer: "Accenture",
    date: "June 6th 2025",
    certificateUrl: "/certificates/Accenture.pdf",
  },

  {
    id: "mern-internship",
    title: "Full Stack Web Development (MERN) Intern",
    issuer: "Eduvate Skills",
    date: "06/2025 - 09/2025",
    certificateUrl: "/certificates/eduvate.pdf",
  },

  {
    id: "Robo-sumo event",
    title: "Robo-sumo event",
    issuer: "Kshitij 2025, IT Kharagpur ",
    date: "2025",
    certificateUrl: "/certificates/Robo-sumo.pdf",
  },

  {
    id: "Cyber-security",
    title: "Cyber security Intern",
    issuer: "Codec Technologies Pvt. Ltd",
    date: "06/2025 - 07/2025",
    certificateUrl: "/certificates/codec.pdf",
  },

  {
    id: "Front-End-Developer",
    title: "Front-End Developer Intern",
    issuer: "StaxTech",
    date: "July 15 2025",
    certificateUrl: "/certificates/StaxTech.pdf",
  },

  {
    id: "Training on Basic C",
    title: "Training on Basic C",
    issuer: "Lakshya Institute of Technology (LIT)",
    date: "15/09/2023",
    certificateUrl: "/certificates/Basic-C.pdf",
  },

  {
    id: "Cloud Community Day Bhubaneswar",
    title: "Cloud Community Day Bhubaneswar 2025",
    issuer: "Google Developer Group Bhubaneswar",
    date: "2025",
    certificateUrl: "/certificates/Cloude-Community-Day.pdf",
  },

  {
    id: "Training on PYTHON",
    title: "Training on PYTHON",
    issuer: "Lakshya Institute of Technology (LIT)",
    date: "14/08/2023",
    certificateUrl: "/certificates/Tranning-Python.pdf",
  },

  {
    id: "Al and Machine Learning with Data Science",
    title: "Al and Machine Learning with Data Science",
    issuer: "Ethical Edufabrica Pvt. Ltd.",
    date: "19th & 20th October 2024.",
    certificateUrl: "/certificates/AI.pdf",
  },
];