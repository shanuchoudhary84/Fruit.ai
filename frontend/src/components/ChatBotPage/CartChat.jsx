import React, { useState } from "react";
import './ChatMessage.css'; 

const ChatMessage = ({ name, image, message }) => {
  const [quantity, setQuantity] = useState(2);
  const pricePerItem = 8.0;

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="chat-message">
      <div className="message-info">
        <div className="profile-picture">
          <img
            src={image} 
            alt={name}
            className="profile-img"
          />
        </div>
        <div className="message-content">
          <h2 className="username">{name}</h2>
          <p className="message-text">{message}</p>
        </div>
      </div>
      <div className="message-actions">
        <button
          onClick={handleDecrease}
          className="action-button"
        >
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button
          onClick={handleIncrease}
          className="action-button"
        >
          +
        </button>
      </div>
      <div className="message-total">
        ${quantity * pricePerItem}.00
      </div>
    </div>
  );
};

export default ChatMessage;
