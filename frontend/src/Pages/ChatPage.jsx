// import React, { useState } from 'react';
// import axios from 'axios';

// const ChatPage = () => {
//   const [userInput, setUserInput] = useState('');
//   const [chatMessages, setChatMessages] = useState([]);

//   const sendMessage = async () => {
//     try {
//       // Send user input to the server using Axios
//       const response = await axios.post('http://127.0.0.1:8000/chat', {
//         message: userInput,
//       });

//       // Get the server's response
//       const responseData = response.data;

//       // Update chat messages with the response
//       setChatMessages([...chatMessages, { type: 'user', text: userInput }]);
//       setChatMessages([...chatMessages, { type: 'server', text: responseData }]);
      
//       // Clear the input box
//       setUserInput('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <div className="bg-gray-200 p-4 mb-4 max-w-lg w-full rounded">
//         {chatMessages.map((message, index) => (
//           <div
//             key={index}
//             className={`mb-2 text-${message.type === 'user' ? 'blue' : 'green'}`}
//           >
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <div className="flex">
//         <input
//           type="text"
//           value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//           placeholder="Type your message..."
//           className="p-2 border rounded-l"
//         />
//         <button
//           onClick={sendMessage}
//           className="bg-blue-500 text-white p-2 rounded-r"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatPage;

import React, { useState } from 'react';
import axios from 'axios';

const ChatPage = () => {
  const [userInput, setUserInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const sendMessage = async () => {
    try {
      // Send user input to the server using Axios
      const response = await axios.post('http://127.0.0.1:8000/chat', {
        message: userInput,
      });

      // Get the server's response
      const responseData = response.data;

      // Update chat messages with the response
      setChatMessages([
        ...chatMessages,
        { type: 'user', text: userInput },
        { type: 'server', text: responseData },
      ]);

      // Clear the input box
      setUserInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="flex flex-col mt-8 h-screen w-full p-12">
      <div className="bg-gray-200 p-4 mb-4 w-full rounded h-96 overflow-y-auto">
        {chatMessages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 flex items-start ${
              message.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div className="flex items-center">
              <div
                className={`p-2 rounded ${
                  message.type === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-green-500 text-white'
                }`}
              >
                {message.text}
              </div>
              <div className="ml-2">
                {/* Use appropriate icons for user and server messages */}
                {message.type === 'user' ? (
                  <span role="img" aria-label="user-icon">
                    🙋‍♂️
                  </span>
                ) : (
                  <span role="img" aria-label="server-icon">
                    🤖
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          className="p-2 border rounded-l w-full"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white p-2 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;


