import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  upwork,
  foureyes,
  ignition,
  vanbram,
  Heavensdoor,
  blueox,
  kindness,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "WordPress Developer",
    icon: backend,
  },
  {
    title: "Shopify Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Owner & Web Developer",
    company_name: "Four Eyes Design",
    icon: foureyes,
    iconBg: "linear-gradient(175deg, rgba(29,153,169,1) 0%, rgba(0,0,0,1) 100%)",
    date: "September 2016 - October 2020",
    points: [
      "Led full-scale redesigns prioritizing user experience, utilizing Figma for design and prototyping ahead of site development.",
      "Expert in Figma for crafting intuitive mockups, prototypes, and designs.",
      "Applied SEO best practices to enhance website visibility and performance.",
      "Successfully collaborated with and managed remote teams and clients, ensuring project efficiency and quality.",
    ],
  },
  {
    title: "Senior WordPress Developer",
    company_name: "Ignition Advertising",
    icon: ignition,
    iconBg: "#383E56",
    date: "December 2020 - November 2022",
    points: [
      "Developed full Figma mockups for comprehensive site redesigns, enhancing user accessibility and visual styling.",
      "Proven ability to work seamlessly with remote teams and clients, ensuring effective communication and project success.",
      "Specialized in Figma for prototyping and design, creating user-focused and aesthetically pleasing interfaces.",
    ],
  },
  {
    title: "WordPress and Shopify Developer",
    company_name: "Van Bram Marketing",
    icon: vanbram,
    iconBg: "#383E56",
    date: "November 2022 - February 2022",
    points: [
      "Spearheaded a comprehensive redesign, focusing on enhancing components, color scheme, and typography to improve both aesthetic appeal and user functionality.",
      "Skilled in crafting visually appealing and functionally robust web applications.",
      "Demonstrated effectiveness in collaborating with remote teams, ensuring smooth project execution and communication.",
    ],
  },
  {
    title: "Squarespace, WordPress, Shopify, and Web Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#14a80d",
    date: "March 2023 - Present",
    points: [
      "Developed and currently maintain a productivity-focused Chrome extension, showcasing full-stack development skills and a focus on user experience.",
      "Proficient in Figma, creating efficient, appealing designs and wireframes.",
      "Strong in understanding and addressing client needs, ensuring alignment of design objectives.",
      "Experienced in effectively collaborating and managing projects with remote teams and clients.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Jacob is an exceptional freelancer and someone that should be a model for other freelancers on UpWork. We received dozens of applications for our small job and everyone overstated the estimated time to complete our task. We had an idea of the time required, as most of us are programmers to some degree, but we needed an expert to handle a truly complicated task. Jacob gave us a quote that was more accurate than anyone else and he delivered without any hesitation. I am pleased that we waited for the right proposal to come in and have confidence in Jacob's ability to tackle any future project we may have, as we will certainly rehire him again in the future.",
    name: "Adam Xavier",
  },
  {
    testimonial:
      "Jacob was awesome, he communicated well and was willing to go above and beyond to try different solutions to help get the job done. In the end, there was one task that wasn't able to be completed, but Jacob was professional and resilient with trying many alternative options. Thank you! Will certainly work with you again.",
    name: "Ayden",
  },
  {
    testimonial:
      "Jacob is so talented, I am so happy I hired him. My former Squarespace designer always told me 'can't do this, can't do that'. Everything she told me I couldn't do with Squarespace was wrong!! Jacob did it all and MORE!!! He got the job done same day and he is a joy to work with. Very happy with this Whiz of a programmer/designer.",
    name: "Stacy Robins",
  },
];

const projects = [
  {
    name: "Heaven's Door",
    description:
      "Bob Dylan's whiskey brand, Heaven's Door. This site was built on Squarespace, and I managed SEO for several months. By the time we were finished, there were about 50,000 daily visitors.",
    tags: [
      {
        name: "SquareSpace",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Heavensdoor,
    source_code_link: "https://heavensdoor.com",
  },
  {
    name: "Blue Ox Films",
    description:
      "A beautiful site for beautiful work. Blue Ox Films' site that was built on SquareSpace's developer mode platform. Everything was put together from the ground up using HTML, CSS, JavaScript, and JSON-T.",
    tags: [
      {
        name: "SquareSpace",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: blueox,
    source_code_link: "https://www.blueoxfilms.com/",
  },
  {
    name: "Kindness",
    description:
      "A welcoming design for a heart-warming idea. Kindness was custom built from the ground up using Squarespace's developer mode. ",
    tags: [
      {
        name: "Squarespace",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: kindness,
    source_code_link: "https://kindness.org/",
  },
];

export { services, technologies, experiences, testimonials, projects };
