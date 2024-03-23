"use client"
import React,{useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import {motion, useInView} from "framer-motion"

const projectsData=[
  {
    id:1,
    title:"Spotify Clone",
    description:
    "Crafting a seamless music streaming experience with elegant design and dynamic functionality.",
    image:"/images/projects/Spotify.png",
    tag:["All","Frontend"],
    gitUrl:"https://github.com/kishangupta4514/spotifyclone__",
    previewUrl:"https://kishangupta4514.github.io/spotifyclone__/"
},
    {
        id:2,
        title:"Netflix Clone",
        description:"Building a Netflix clone enriched with the power of TMDB API, offering a captivating streaming platform with extensive movie and TV show catalog.",
        image:"/images/projects/Netflix.png",
        tag:["All","Frontend"],
        gitUrl:"https://github.com/kishangupta4514/netflixclone",
        previewUrl:"https://nexflixclone.onrender.com/"
    },
    {
        id:3,
        title:"Instagram Clone",
        description:"Creating an Instagram clone with robust backend functionalities, enabling users to share photos and connect seamlessly in a visually engaging social media environment.",
        image:"/images/projects/Instagram.png",
        tag:["All","Backend"],
        gitUrl:"https://github.com/kishangupta4514/insta-backend",
        previewUrl:"https://insta-zf5j.onrender.com/"
    },
    {
        id:4,
        title:"Wanderlust",
        description:"Wanderlust: Full-stack project delivering a seamless travel platform, enabling users to explore destinations, plan trips, and share experiences with elegance and functionality.",
        image:"/images/projects/Wanderlust.png",
        tag:["All","Backend"],
        gitUrl:"https://github.com/kishangupta4514/Majorpro",
        previewUrl:"https://airbnb-ayby.onrender.com/listings"
    },
    {
        id:5,
        title:"Study Notion",
        description:"Study Notion: A precise edtech website integrating frontend design and backend functionality for seamless studying, collaboration, and knowledge sharing.",
        image:"/images/projects/StudyNotion.png",
        tag:["All","Backend"],
        gitUrl:"https://github.com/kishangupta4514/StudyNotion",
        previewUrl:"https://studynotion-ochre.vercel.app/"
    },
    // {
    //     id:5,
    //     title:"Spotify Clone",
    //     description:"Project 1 description",
    //     image:"/images/projects/spotify.png",
    //     tag:["All","Backend"],
    //     gitUrl:"/",
    //     previewUrl:"/"
    // },
    // {
    //     id:6,
    //     title:"Spotify Clone",
    //     description:"Project 1 description",
    //     image:"/images/projects/spotify.png",
    //     tag:["All","Frontend"],
    //     gitUrl:"/",
    //     previewUrl:"/"
    // },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref=useRef(null);
    const isInView=useInView(ref, {once: true});


    const handleTabChange = (newTag) => {
        setTag(newTag);
    };
    const filteredProjects=projectsData.filter((project) => 
        project.tag.includes(tag)
    );
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };
    
  return (
    <section id="projects">
    <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
       <ProjectTag
       onClick={handleTabChange}
       name="All"
       isSelected={tag === "All"}
       />
        <ProjectTag
       onClick={handleTabChange}
       name="Frontend"
       isSelected={tag === "Frontend"}
       />
       <ProjectTag
       onClick={handleTabChange}
       name="Backend"
       isSelected={tag === "Backend"}
       />
    </div>
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      
    </section>
  );
};

export default ProjectSection
