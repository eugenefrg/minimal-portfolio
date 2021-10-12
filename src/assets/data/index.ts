import { Person } from "./types";
import sunsetHillsGif from "../images/projects/sunsetHills.gif";
import wpWebsiteAttempt from "../images/projects/wpWebsiteAttempt.png";

const data: Person = {
  name: "Eugene Francis R.",
  description:
    "A Full Stack Developer / Software Engineer and Enigmatologist.\nI break complex obstacles to simple and less daunting forms and figure it out from there.",
  links: {
    github: "https://github.com/eugenefrg",
    linkedin: "https://www.linkedin.com/in/eugene-francis-rebong-b1374a13b/",
    gmail: "mailto:eugene999.dev@gmail.com",
    twitter: "https://twitter.com/eugenefrancis_r",
  },
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
  certifications: {
    freeCodeCamp: [
      {
        name: "Responsive Web Design",
        url: "https://www.freecodecamp.org/certification/eugenefrancis_r/responsive-web-design",
      },
    ],
  },
};

export default data;
