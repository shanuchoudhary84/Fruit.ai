import React from "react";
import { IoIosChatboxes } from "react-icons/io";
import { Link } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci";
import "./HelloChat.css"; 

const HelloChat = () => {
  return (
    <div className="hellochat">
      <div className="hellochat-inner-container">
        <span className="icon">
          <IoIosChatboxes />
        </span>
        <div className="hellochat-title">
          Hello <br />
          <span className="title-highlight">Chat.</span>
        </div>
        <p className="description">
          The last chatapp you'll ever need.
        </p>
        <Link to={"/chatbot"} className="link">
          Continue
          <span className="link-icon">
            <CiLocationArrow1 />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HelloChat;
