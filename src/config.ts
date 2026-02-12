export const siteConfig = {
  name: "Fardeen Rahman",
  title: "Bachelor of Computer Science",
  image: "/images/profile.jpg",
  description: "Portfolio website of Fardeen Rahman",
  accentColor: "#1f3982ff",
  social: {
    email: "fardeen.mm.rahman@gmail.com",
    linkedin: "https://linkedin.com/in/fardeen-rahman-9033a8307/",
    github: "https://github.com/Zemphis",
  },
  aboutMe:
    "Hi, I'm Fardeen, a man with a passion for exploration, a chat with mates, and an avid story-lover (recommendations appreciated!). But the particular trait that got me into the mess of computer science was my stubborn, almost obsessive, desire to understand how things work. From tinkering with Minecraft Mods as a child, to sharpening my problem-solving skills through ARGs like Cicada 3301 and the Cipher Hunt. I have always loved a good challenge. Do you have one for me?",
  skills: ["Javascript", "React", "Node.js", "C++", "AWS", "Docker", "SQL", "FPGAs", "Verilog", "VHDL"],
  projects: [
    {
      name: "Bleed SMP Mod",
      description:
        "A mod made for the Bleed SMP from scratch, learning Mojang's new documentation post 1.21 as well as the refactoring on Fabric API. Handled player interactions, custom items, and custom blocks, as well as a custom GUI for block entities. Information on save states and player data is stored persistently to inform the mod of unique player interactions. Currently hosted on the Bleed SMP server.",
      link: "https://github.com/Zemphis/BleedSMP",
      skills: ["Java", "Gradle", "Fabric API", "Minecraft API"],
    },
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
        "My personal portfolio website built using Astro and Tailwind CSS, showcasing my projects and experience in a clean and modern design. Hosted on Vercel.",
      link: "https://github.com/Zemphis/Portfolio",
      skills: ["Astro", "Tailwind CSS", "TypeScript", "Vercel"],
    },
    {
      name: "Basys 2 VGA Controller",
      description:
        "Engineered and implemented a custom 640x480 VGA Controller and Pong entirely within the Basys 2 FPGA using only HDL.",
      link: "https://github.com/Zemphis/Basys2",
      skills: ["Verilog", "VHDL", "Finite State Machines", "UCF/XDC"],
    },
  ],
  experience: [
    {
      company: "Australian Institute of Machine Learning",
      title: "FPGA Research Intern",
      dateRange: "Nov 2025 - Present",
      bullets: [
        "Post-quantum cryptography hardware acceleration on RISC-V platforms",
        "Designed and implemented a dedicated cryptogrpahic hardware accelerator using Verilog/VHDL and LiteX to prototype and test.",
        "Then implemented the accelerator into a RISC-V softcore CPU hardware and benchmarked the performance improvements.",
      ],
    },
    {
      company: "Realty1Global",
      title: "Fullstack Developer",
      dateRange: "Aug 2025 - Dec 2025",
      bullets: [
        "Created and maintained web applications for real estate clients using React and Next.js.",
        "Improved profits by 15% by providing a end-to-end stripe payment solution for clients, without going through Airbnb and other third-party services.",
        "Created a content management system for easy updates and created a database schema for property listings.",
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
