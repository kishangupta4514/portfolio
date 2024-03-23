"use client"
import React,{useTransition, useState} from 'react'
import Image from "next/image"
import TabButton from './TabButton'

const TAB_DATA=[
  {
    title:"Skills",
    id:"skills",
    content: (
      <ul className='list-disc pl-2'>
       <li>HTML, CSS & Javascript</li>
       <li>Tailwind CSS</li>
       <li>React.js</li>
       <li>Express.js</li>
       <li>Node.js</li>
       <li>SQL & MongoDb</li>
       <li>Git & Github</li>
      </ul>      
    )
  },
  {
    title:"Education",
    id:"education",
    content:(
      <ul className='list-disc pl-2'>
        <li>B.N.S.D Shiksha Niketan,Kanpur(Highschool & Intermediate)</li>
        <li>Institute of Engineerring & Science IPS ACADEMY,Indore (Bachelor of Technology) </li>
      </ul>
      
    )
  }, {
    title:"Certifications",
    id:"certifications",
    content:(
      <ul className='list-disc pl-2'>
        <li>Artificial Intelligence Builder Program by IITD</li>
      </ul>
      
    )
  }
]

const AboutSection = () => {
  const [tab,setTab] = useState("skills");
  const [isPending,startTransiton]=useTransition();

 const handleTabChange=(id) => {
  startTransiton( () => {
    setTab(id);
  }
  );
 };



  return <section id="about" className='text-white scroll-smooth'><div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
    <Image src="/images/aboutsection.jpg" width={600} height={600} />
  <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
    <h2 className='text-4xl font-bold text-white mb-4 '>About Me</h2>
    <p className='text-base lg:text-lg'>
      I am a full stack web developer with a passion for creating 
      interactive and responsive web applications.I have experience 
      working with Javascript, React, Redux , Node.js, Express, PostgreSQL.
      Sequelize, HTML, CSS, and Git.I am a quick learner and I am always 
      looking to expand my knowledge and skill set. I am a team player and
      I am excited to work with others to create amazing applications.    
    </p>
    <div className='flex flex-row justify-start  mt-8'>
      <TabButton 
      selectTab={() => handleTabChange("skills")} 
      active={tab ==="skills"}>
        {" "}
        Skills{" "}
      </TabButton>
      <TabButton 
      selectTab={() => handleTabChange("education")} 
      active={tab ==="education"}>
        {" "}
        Education{" "}
      </TabButton>
      <TabButton 
      selectTab={() => handleTabChange("certifications")} 
      active={tab ==="certifications"}>
        {" "}
        Certifications{" "}
      </TabButton>
    </div>
    <div className='mt-8 '>{TAB_DATA.find((t) => t.id === tab).content}</div>
  </div>
  </div>
  </section>
   
  
}

export default AboutSection
