import React from 'react';
import './AboutUs.css';
import Sidebar from '../Sidebar/Sidebar';

const TeamMember = ({ name, image, description }) => (
  <div className="team-member">
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{description}</p>
  </div>
);

const AboutUs = () => (
<div className="sideUs">
    <Sidebar/>
  <div className="about-us">
    
    <h1>About Us</h1>
    <div className="team-info">
      <h2>IIITech Geeks</h2>
      <p>
        Our team, IIITech Geeks, has achieved significant milestones by winning the <strong>HumanAIze Fintech Hackathon</strong>, 
        <strong>Hack4Good Hackathon</strong>, and the <strong>MHTechin Innovation Challenge</strong>. We've been invited to 
        showcase our projects at the <strong>TCoE 2024 in New Delhi</strong> and the <strong>FinTech Festival India 2024</strong>. 
        Additionally, we're proud finalists in the <strong>SIH 2023</strong>, upcoming <strong>SIH 2024</strong>, 
        <strong>5G & 6G Hackathon 2024</strong>, <strong>Scale+91 Fintech Hackathon 2024</strong>, 
        <strong>REVA She Code 2024</strong>, and the <strong>Vultr Cloud Innovation Challenge 2024</strong>. Our product, 
        <strong>VanTrade</strong>, was also nominated for the <strong>People's Choice Award by Google</strong>.
      </p>
    </div>
    
    <div className="team-container">
      <TeamMember 
        name="Nitin Yadav"
        image="public/nitinsir.jpeg"
        description="User designs AI/ML models for personalized creative suggestions, cross-disciplinary style fusion, and adaptive prompts to help overcome creative blocks."
      />
      
      <TeamMember 
        name="Ronak Nayak"
        image="public/ronaksir.jpeg"
        description="Built secure backend for AI Art/Music Platform, creating RESTful API for authentication, content, interactions, and role-based access."
      />
      
      <TeamMember 
        name="Vikas Kaushik"
        image="public/vikassir.jpeg"
        description="Prototyping an AI-driven art and music platform with VR for immersive creativity, managing timelines to keep the team on track and deliver on time."
      />
      
      <TeamMember 
        name="Arpit Chauhan"
        image="public/arpit.jpeg"
        description="Designed and Developed the platform's UI, created Figma layouts, built React components, implemented a dashboard, and collaborated for integration."
      />
    </div>
  </div>
  </div>
);

export default AboutUs;