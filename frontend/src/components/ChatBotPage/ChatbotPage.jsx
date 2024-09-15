import React, { useState } from "react";
import { FaArrowLeft, FaRegPaperPlane } from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg";
import profile from "../../assets/images/jhondoe.jpg";
import './Chatbot.css';
import {Link} from "react-router-dom"
import CartItem from "./CartChat";

const messages = [
  { text: "Hello! How can I assist you today?", sender: "bot" },
  { text: "I hope you're having a great day!", sender: "bot" },
  { text: "Feel free to ask me anything.", sender: "bot" },
  { text: "I'm here to help!", sender: "bot" },
  { text: "Let's chat!", sender: "bot" }
];

const Chatbot = () => {
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState('');
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const sendMessage = () => {
    if (input.trim() !== '') {
      setChat(prevChat => [...prevChat, { text: input, sender: 'user' }]);
      setInput('');

      setTimeout(() => {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        setChat(prevChat => [...prevChat, randomMessage]);
      }, 1000);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={'chatbot'}>
      <div className={`chatbot-container ${darkMode ? 'dark-mode' : ''}`}>
        <header className="chatbot-header">
          <Link to={'/home'} className="back-button">
            <FaArrowLeft size={24} />
          </Link>
          <div className="chatbot-header-info">
            <img src={profile} alt="Jhon Doe" className="profile-pic" />
            <span className="username">Jhon Doe </span>
            <button className="more-options-button" onClick={toggleDarkMode}>
              <CgDarkMode size={24} />
            </button>
          </div>
        </header>
        <div className="chat-canvas">

          <CartItem name={'orange'} image={'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS_l2nKIkDzVLzxONc371GJWkhKWsk-uqTVFau7nskckDvQlqk4Ka2KytgbdCPDld-J'}/>
          <CartItem name={'Lemon'} image={'https://img.freepik.com/premium-psd/delicious-lemoon-isolated-white_885258-1149.jpg'}/>
          <CartItem name={'Banana'} image={'https://community.akamai.steamstatic.com/economy/image/a5HYp9Sw61Iks7TiNF57DFqT0e-WtnR84yvwcWpNrTTcGA/360fx360f'}/>
          {chat.map((msg, index) => (
            <div key={index} className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}>
              <div className="message-text">{msg.text}</div>
            </div>
          ))}
        </div>
        <footer className={`chat-input-area ${darkMode ? 'dark-mode' : ''}`}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="chat-input"
          />
          <button onClick={sendMessage} className="send-button">
            <FaRegPaperPlane size={20} />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Chatbot;
