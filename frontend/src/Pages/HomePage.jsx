import React from 'react';
import Card from '../Components/page-home/Card';

const HomePage = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4'>
      <Card text="Engage in meaningful conversations with your personal AI companion. Whether you need someone to talk to, seek guidance, or share your thoughts, our AI is here for you 24/7. Confidential and understanding, it's like having a friend who truly cares." 
      link="/chat" 
      linkName="Chat with personal AI"></Card>
      <Card text="Empower yourself by gaining insights into your mental health. Our diagnostic tools, crafted by mental health professionals, provide personalized assessments. Understand your strengths, discover areas for improvement, and embark on a journey towards a more balanced and fulfilling life." 
      link="/classify" 
      linkName="Get your Diagnosis"></Card>
      <Card text="Curious about who we are? Explore our story and mission in the About Us section. We're passionate about breaking barriers and making mental wellness accessible to everyone.Your mental well-being matters. Start your journey with us today." 
      link="/about-us" 
      linkName="Know more about us"></Card>
    </div>
  )
}

export default HomePage