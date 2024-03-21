// AboutUs.js (updated with Tailwind CSS classes)
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4 flex justify-center items-center flex-col mt-16">
      <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
      <div className='flex justify-center flex-col items-center'>
      <p className="text-lg mb-4">
        Welcome to our mental health chat platform! We are dedicated to providing a supportive
        and safe space for individuals to express their thoughts and emotions.
      </p>
      <p className="text-lg mb-4">
        Our goal is to offer a compassionate environment where users can interact with our
        chatbot and receive helpful insights and guidance on their mental health journey.
      </p>
      <p className="text-lg">
        If you have any questions or suggestions, feel free to call national suicide helpline number : 9152987821.
        {/* <a href="mailto:info@example.com" className="text-blue-500"> info@example.com</a>. */}
      </p>
      </div>
      <div className='flex justify-center flex-col items-center mt-8'>
      <p className="text-3xl font-bold mb-4 text-center">
        Developed By :
      </p>
      <div className='flex flex-row gap-4 mt-5'>
      <p className="text-lg mb-4">
        Aditya Bhivgade 
        <p>Web Developer</p>
      </p>
      <p className="text-lg mb-4">
        Jjateen Gundesha
        <p>ML Engineer</p>
      </p>
      <p className="text-lg mb-4">
        Atharva Deopujari
        <p>ML Engineer</p>
      </p>
      <p className="text-lg mb-4">
        Prerak Gupta
        <p>ML Engineer</p>
      </p>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
