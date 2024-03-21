import React, { useEffect } from 'react';
import Navbar from './Components/Common/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import ChatPage from './Pages/ChatPage';
import ClassifyPage from './Pages/ClassifyPage';
import ResultPage from "./Pages/ResultPage";
import AboutUs from './Pages/AboutUs';

const App = () => {
    return (
        <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/chat" element={<ChatPage />}></Route>
            <Route path="/classify" element={<ClassifyPage />}></Route>
            <Route path="/classify-result" element={<ResultPage />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
        </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
