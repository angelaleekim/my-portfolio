// Project Objects //
import cp from "../assets/images/cp.jpg";
import slobg from "../assets/images/slo-bg.jpg";
import unc from "../assets/images/uncluttered-logo-text-blue.jpg";
import cpdemo from "../assets/videos/cp-demo.mp4";
import slobgdemo from "../assets/videos/slobg-demo.mp4";
import uncdemo from "../assets/videos/unc-demo.mov";

const projects = [
  {
    title: "Uncluttered",
    date: "Frontend Developer | September 2023 - June 2024",
    id: 1,
    route: "/uncluttered",
    description: `I developed and styled React components for a task management web application called Uncluttered, a project created by a team of 5 students at Cal Poly San Luis Obispo.

As a frontend developer, some of my tasks include wireframing our project in Figma, creating frontend React components such as the welcome and login pages, and styling our entire application with Tailwind. `,
    technologies: ["React", "TailwindCSS", "Figma", "Node.js"],
    demo: uncdemo,
    code: "https://github.com/angelaleekim/mlflow-demo",
    images: [unc],
  },
  {
    title: "Mindbody + Classpass",
    date: "Software Engineering Intern | June 2022 - September 2022",
    id: 1,
    route: "/mindbody",
    description: `As a software engineering intern at Classpass, I had the opportunity to work with the ML and Data team, where I made significant contributions to enhance the machine learning platform. One of my tasks was leveraging Docker and Amazon S3 to seamlessly integrate MLFlow, which greatly improved the model governance process. This integration allowed for efficient tracking, versioning, and deployment of machine learning models, ensuring smooth collaboration and streamlined development cycles for team.

Additionally, I led an impactful A/B testing experiment focused on optimizing the send time for the ClassPass campaign. Through rigorous experimentation and analysis of user engagement data, I successfully determined the optimal time to send campaigns to individual users, leading to improved campaign effectiveness and higher user conversions. This experience not only honed my data analysis skills but also provided valuable insights into user behavior and campaign optimization strategies.`,
    technologies: ["Python", "SQL", "Amazon S3", "Docker"],
    demo: cpdemo,
    code: "https://github.com/angelaleekim/mlflow-demo",
    images: [cp],
  },
  {
    title: "SLO Botanical Garden",
    date: "Software Developer | October 2021 - June 2022",
    id: 2,
    route: "/slobg",
    description: `As a software developer for Hack4Impact, I had the opportunity to collaborate with a team of six individuals on an active volunteer management platform for the SLO Botanical Garden. Taking on the responsibility of developing front-end components, I ensured the seamless display of administration announcements and the effective tracking of volunteer contributions and progress. Throughout the project, I actively engaged in code reviews and actively communicated with my team members during our weekly standup meetings. 
      
This experience not only sharpened my technical skills but also allowed me to cultivate strong communication and collaboration abilities.By working together harmoniously, we created a platform that has greatly improved the efficiency and impact of volunteer management for the SLO Botanical Garden, positively impacting the community we serve.`,
    technologies: ["React", "Node.js", "MongoDB"],
    demo: slobgdemo,
    code: "https://github.com/hack4impact-calpoly/sloBotanicalGarden22",
    images: [slobg],
  },
];

export default projects;
