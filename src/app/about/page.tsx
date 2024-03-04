"use client";

import React from 'react';
// import Biography from '@/_components/Biography';
// import TechList from '@/_components/TechList';
// import Experience from '@/_components/Experience';
import Footer from '@/_components/Footer';
import dynamic from 'next/dynamic';
const Biography = dynamic(() => import('@/_components/Biography'));
const TechList = dynamic(() => import('@/_components/TechList'));
const Experience = dynamic(() => import('@/_components/Experience'));

export default function About() {
 // Define your data here or fetch it from an API
 const biography = `Hey, I’m Zhilin! I grew up in the Guangzhou, China and love all things creative.
 As a designer turned developer, I found my calling in blending artistic flair with technical skill. My journey has led me to specialize in front-end development, where I craft interactive experiences that are not just functional, but also visually stunning. 
 
 When I'm not coding, you'll find me experimenting with digital art or exploring the latest in web animation.`;
 const experiences = [
    { title: "Software Engineer Intern", time_period: "May 2023-Aug 2023", institution: "Equinix", description: "Building Solution Builder at Equinix Network Edge" },
    // More experiences...
 ];
 const education = [
   { title: "Master in Information Systems", time_period: "Aug 2022-May 2024", institution: "Cornell Tech", description: "Experimenting on Roosevelt Island" },
   // More experiences...
];
 const techList = [
   { tech_color: "#6DB33F", tech_name: "Spring" },
    { tech_color: "#61DBFB", tech_name: "React" },
    // More tech items...
 ];
 const name = "Your Name";
 const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    // More navigation items...
 ];
 const linkedinLink = "https://linkedin.com/in/juliali19";

 return (
   <div>
      <Biography heading="About Zhilin" body={biography} button_text="Resume" button_link="/contact" avatar="/images/avatar.jpeg" />
      <TechList title="What I Use" techList={techList} />
      <Experience heading="Experiences" experiences={experiences} />
      <Experience heading="Schools" experiences={education} />
   </div>
 );
};


