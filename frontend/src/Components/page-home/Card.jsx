import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({text,link,linkName}) => {
  return (
    <div className='flex flex-col bg-secondary rounded-xl justify-center items-center w-full h-auto p-8 mt-8 md:mt-24'>
        <p>
            {text}
        </p>
        <Link to={`${link}`}><button className='bg-tertiary text-black rounded-md p-4 mt-6'>{linkName}</button></Link>
    </div>
  )
}

export default Card