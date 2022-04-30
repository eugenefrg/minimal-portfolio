import { Person, SkillLevel } from "./types";
import sunsetHillsGif from "../images/projects/sunsetHills.gif";
import wpWebsiteAttempt from "../images/projects/wpWebsiteAttempt.png";

/**
 * An object that contains all the data for the website.
 * This is used to populate the website with data.
 * @type {Person}
 */
const data: Person = {
  name: "Eugene Francis R.",
  description: `Indeed, the ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code. Therefore making it easy to read makes it easier to write.
    ― Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship `,
  links: [
    { name: "github", url: "https://github.com/eugenefrg" },
    {
      name: "linkedIn",
      url: "https://www.linkedin.com/in/eugene-francis-rebong-b1374a13b/",
    },
    { name: "email", url: "mailto:eugene999.dev@gmail.com" },
    { name: "twitter", url: "https://twitter.com/eugenefrancis_r" },
  ],
  projects: [
    {
      name: "FreeCodeCamp Responsive Web Design",
      imageUrl:
        "https://assets.codepen.io/2597325/internal/screenshots/pens/abyzjvj.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1634046527&width=960",
      demoUrl: "https://codepen.io/eugenefrancisrebong/pen/abyzjvj",
      description:
        "I wanted to learn more about web development, and it was worth it! I learned more about the things I can do with just HTML and CSS, and this has helped me update my knowledge on the current things that I can do with the tecnologies.",
    },
    {
      name: "Sunset Hills",
      imageUrl: sunsetHillsGif,
      demoUrl: "https://eugenefrg-sunset-hills.netlify.app/",
      repoUrl: "https://github.com/eugenefrg/sunset-hills",
      description:
        "A Coding Challenge: when given an array of buildings, if the sun is to the left side, display which buildings or part of buildings are unobstructed and can see the sun.",
    },
    {
      name: "Portfolio v1",
      imageUrl: wpWebsiteAttempt,
      demoUrl: "https://eugenefrancisr.000webhostapp.com/",
      description:
        "An attempt at making my personal website. Trying out wordpress to see how easy it is compared to anything that I have done. And although it can be easy, it needed to be hosted and the free ones limit me.",
    },
  ],
  certifications: [
    {
      name: "Responsive Web Design",
      url: "https://www.freecodecamp.org/certification/eugenefrancis_r/responsive-web-design",
      source: "freeCodeCamp",
    },
    {
      name: "Programming Foundations: Fundamentals by Annyce Davis",
      url: "https://www.linkedin.com/learning/certificates/48de8e94a929c320a5753ac73af4cfaa17ae004cbec9d7cc3f910c7ee609287d?trk=share_certificate",
      source: "LinkedIn",
    },
  ],
  educations: [
    {
      name: "AMA University",
      url: "https://www.ama.edu.ph/",
      description: "Bachelor of Science in Information Technology",
      yearStart: 2013,
      yearEnd: 2017,
    },
    {
      name: "AMA University",
      url: "https://www.ama.edu.ph/",
      description: "Master of Science in Information Technology",
      yearStart: 2019,
      yearEnd: 2021,
      finished: false,
    },
  ],
  skills: [
    {
      name: "HTML",
      level: SkillLevel.advanced,
      iconUrl: "https://img.icons8.com/color/48/000000/html-5.png",
    },
    {
      name: "CSS",
      level: SkillLevel.advanced,
      iconUrl: "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
      name: "JavaScript",
      level: SkillLevel.advanced,
      iconUrl: "https://img.icons8.com/color/48/000000/javascript.png",
    },
    {
      name: "TypeScript",
      level: SkillLevel.advanced,
      iconUrl: "https://img.icons8.com/color/48/000000/typescript.png",
    },
    {
      name: "React",
      level: SkillLevel.advanced,
      iconUrl: "https://img.icons8.com/officel/344/react.png",
    },
    {
      name: "Node.js",
      level: SkillLevel.advanced,
      iconUrl: "https://img.icons8.com/color/48/000000/nodejs.png",
    },
    {
      name: "Express",
      level: SkillLevel.intermediate,
      iconUrl: "https://img.icons8.com/color/48/000000/express.png",
    },
    {
      name: "MongoDB",
      level: SkillLevel.intermediate,
      iconUrl: "https://img.icons8.com/color/48/000000/mongodb.png",
    },
    {
      name: "MySQL",
      level: SkillLevel.advanced,
      iconUrl: "https://img.icons8.com/color/48/000000/mysql.png",
    },
    {
      name: "Git",
      level: SkillLevel.advanced,
      iconUrl: "https://img.icons8.com/color/48/000000/git.png",
    },
    {
      name: "GitHub",
      level: SkillLevel.advanced,
      iconUrl: "https://img.icons8.com/color/48/000000/github.png",
    },
    {
      name: "Heroku",
      level: SkillLevel.intermediate,
      iconUrl: "https://img.icons8.com/color/48/000000/heroku.png",
    },
    {
      name: "Netlify",
      level: SkillLevel.intermediate,
      iconUrl:
        "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
    },
    {
      name: "Adobe Photoshop",
      level: SkillLevel.intermediate,
      iconUrl: "https://img.icons8.com/color/48/000000/adobe-photoshop.png",
    },
    {
      name: "Python",
      level: SkillLevel.beginner,
      iconUrl: "https://img.icons8.com/color/48/000000/python.png",
    },
    {
      name: "Blender",
      level: SkillLevel.advanced,
      iconUrl: "https://img.icons8.com/color/344/blender-3d.png",
    },
    {
      name: "Unity",
      level: SkillLevel.beginner,
      iconUrl: "https://img.icons8.com/color/48/000000/unity.png",
    },
    {
      name: "C#",
      level: SkillLevel.beginner,
      iconUrl: "https://img.icons8.com/color/48/000000/c-sharp-logo.png",
    },
    {
      name: "Java",
      level: SkillLevel.beginner,
      iconUrl: "https://img.icons8.com/color/48/000000/java.png",
    },
    {
      name: "Kubernetes",
      level: SkillLevel.intermediate,
      iconUrl: "https://img.icons8.com/color/48/000000/kubernetes.png",
    },
    {
      name: "Docker",
      level: SkillLevel.intermediate,
      iconUrl: "https://img.icons8.com/color/48/000000/docker.png",
    },
    {
      name: "AWS",
      level: SkillLevel.beginner,
      iconUrl: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
    },
    {
      name: "Github Actions",
      level: SkillLevel.beginner,
      iconUrl: "https://avatars.githubusercontent.com/u/44036562?s=200&v=4",
    },
    {
      name: "Vercel",
      level: SkillLevel.beginner,
      iconUrl: "https://www.svgrepo.com/show/354513/vercel-icon.svg",
    },
    {
      name: "Jest",
      level: SkillLevel.intermediate,
      iconUrl:
        "https://www.pngitem.com/pimgs/m/346-3463674_jest-logo-png-transparent-png.png",
    },
    {
      name: "React Testing Library",
      level: SkillLevel.intermediate,
      iconUrl: "https://testing-library.com/img/octopus-64x64.png",
    },
    {
      name: "TailwindCSS",
      level: SkillLevel.advanced,
      iconUrl:
        "https://static-00.iconduck.com/assets.00/tailwind-css-icon-512x307-1v56l8ed.png",
    },
    {
      name: "Ant Design",
      level: SkillLevel.advanced,
      iconUrl:
        "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    },
    {
      name: "Figma",
      level: SkillLevel.intermediate,
      iconUrl: "https://img.icons8.com/color/48/000000/figma.png",
    },
    {
      name: "Sass",
      level: SkillLevel.intermediate,
      iconUrl: "https://img.icons8.com/color/48/000000/sass.png",
    },
    {
      name: "Vue",
      level: SkillLevel.beginner,
      iconUrl: "https://img.icons8.com/color/344/vue-js.png",
    },
    {
      name: "Auth0",
      level: SkillLevel.intermediate,
      iconUrl:
        "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-auth0-the-solution-you-need-for-web-mobile-iot-and-internal-applications-logo-shadow-tal-revivo.png",
    },
    {
      name: "Microsoft SQL Server",
      level: SkillLevel.intermediate,
      iconUrl:
        "https://img.icons8.com/color/48/000000/microsoft-sql-server.png",
    },
  ],
};

export default data;
