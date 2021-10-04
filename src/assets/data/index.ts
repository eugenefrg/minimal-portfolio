import { Person } from "./types";
import sunsetHillsGif from "../images/projects/sunsetHills.gif"
import wpWebsiteAttempt from "../images/projects/wpWebsiteAttempt.png"

const data: Person = {
    name: "Eugene Francis R.",
    description: "A Full Stack Developer / Software Engineer and Enigmatologist.\nI break complex obstacles to simple and less daunting forms and figure it out from there.",
    links: {
        github:"https://github.com/eugenefrg",
        linkedin:"https://www.linkedin.com/in/eugene-francis-rebong-b1374a13b/",
        gmail:"mailto:eugene999.dev@gmail.com",
        twitter:"https://twitter.com/eugenefrancis_r"
    },
    projects: [
        {
            name: "Sunset Hills",
            imageUrl:sunsetHillsGif,
            demoUrl:"https://eugenefrg-sunset-hills.netlify.app/",
            repoUrl:"https://github.com/eugenefrg/sunset-hills",
            description:"A Coding Challenge: when given an array of buildings, if the sun is to the left side, display which buildings or part of buildings are unobstructed and can see the sun."
        },
        {
            name: "Portfolio v1",
            imageUrl:wpWebsiteAttempt,
            demoUrl:"https://eugenefrancisr.000webhostapp.com/",
            description:"An attempt at making my personal website. Trying out wordpress to see how easy it is compared to anything that I have done. And although it can be easy, it needed to be hosted and the free ones limit me."
        }
    ]
}

export default data;