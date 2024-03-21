import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import psychiatrist from "../assets/psychiatrist.png";
import send from "../assets/send.png";

const ClassifyPage = () => {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();

  const handleSendClick = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ post_text: inputText }),
      });

      if (response.ok) {
        const result = await response.json();
        // Redirect to the result page with the classification result
        navigate('/classify-result', { state: { result } });
      } else {
        console.error("Failed to fetch classification result");
      }
    } catch (error) {
      console.error("Error occurred while fetching classification result", error);
    }
  };

  return (
    <div>
      <div className='flex flex-row justify-center items-center mt-12 gap-8'>
        <img src={psychiatrist} className='h-32 w-32'></img>
        <span className='text-3xl font-bold'>Hey! How are you feeling today?</span>
      </div>
      <div className=''>
        <div className='flex flex-row justify-center items-center mt-12 gap-8'>
          <textarea
            id="input"
            rows="10"
            cols="100"
            value={inputText}
            placeholder="Enter your Emotions here....."
            onChange={(e) => setInputText(e.target.value)}
            className='border-4'
          ></textarea>
          <div onClick={handleSendClick} className='h-32 w-32 hover:drop-shadow-xl hover:-rotate-45 duration-100 ease-in'>
            <img src={send}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassifyPage