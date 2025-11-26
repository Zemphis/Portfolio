export const siteConfig = {
  name: "Fardeen Rahman",
  title: "Bachelor of Computer Science",
  image: "/images/profile.jpg",
  description: "Portfolio website of Fardeen Rahman",
  accentColor: "#1f39829b",
  social: {
    email: "fardeen.mm.rahman@gmail.com",
    linkedin: "https://linkedin.com/in/fardeen-rahman-9033a8307/",
    github: "https://github.com/Zemphis",
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
  skills: ["Javascript", "React", "Node.js", "C++", "AWS", "Docker", "SQL", "FPGAs", "Verilog", "VHDL"],
  projects: [
    {
      name: "Adelaide University Space Society Website",
      description:
        "The official website for the Adelaide University Space Society, allowing people to sign up for a membership and view upcoming events. Implemented a content management system for easy updates.",
      link: "https://www.auspacesociety.com.au/",
      skills: ["React", "Node.js", "Stripe", "Vercel"],
    },
    {
      name: "This Website!",
      description:
        "My personal portfolio website built using Astro and Tailwind CSS, showcasing my projects and experience in a clean and modern design.",
      link: "https://github.com/Zemphis/Portfolio",
      skills: ["Astro", "Tailwind CSS", "TypeScript", "Vercel"],
    },
  ],
  experience: [
    {
      company: "Australian Institute of Machine Learning",
      title: "FPGA Research Intern",
      dateRange: "Nov 2025 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "Adelaide University",
      degree: "Bachelor of Computer Science",
      dateRange: "2024 - 2027",
      achievements: [
        "Currently studying second year.",
        "Marketing manager/Developer for Adelaide University Space Society",
        "Social Media Officer of Computer Science Club",
        "Jane Street Estimathon Winner 2024",
      ],
    },
    {
      school: "Glenunga International High School",
      degree: "South Australian Certificate of Education (SACE)",
      dateRange: "2018-2023",
      achievements: [
        "ATAR: 97.80",
        "Student Leadership Team 2021-2023",
        "Youth UN Ambassador 2022-2023",
      ],
    },
  ],
};
