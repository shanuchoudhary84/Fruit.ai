import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FaqPage.css";

const FAQPage = () => {
  const API = process.env.REACT_APP_API;
  const [faqs, setFaqs] = useState([]);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [newFaq, setNewFaq] = useState({ question: "", answer: "" });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get(`${API}/faqs`);
        setFaqs(response.data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };
    fetchFaqs();
  }, [API]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFaq({ ...newFaq, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (selectedFaq) {
        await axios.put(`${API}/faqs/${selectedFaq.id}`, newFaq);
        const updatedFaqs = faqs.map((faq) =>
          faq.id === selectedFaq.id ? newFaq : faq
        );
        setFaqs(updatedFaqs);
        setSelectedFaq(null);
      } else {
        const response = await axios.post(`${API}/faqs`, newFaq);
        setFaqs([...faqs, response.data]);
      }
      setNewFaq({ question: "", answer: "" });
    } catch (error) {
      console.error("Error submitting FAQ:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/faqs/${id}`);
      setFaqs(faqs.filter((faq) => faq.id !== id));
    } catch (error) {
      console.error("Error deleting FAQ:", error);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`faq-page`}>
      <div className={`faq-container ${isDarkMode ? "dark-mode" : ""}`}>
        <header className="faq-header">
          <h1>FAQ Page</h1>
          <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </header>

        <div className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.id} className={`faq-item ${isDarkMode ? "dark-mode" : ""}`}>
              <div className="faq-question">
                <span className="faq-label">Question:</span> {faq.question}
              </div>
              <div className="faq-answer">
                <span className="faq-label">Answer:</span> {faq.answer}
              </div>
              <div className="faq-buttons">
                <button className="edit" onClick={() => setSelectedFaq(faq)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(faq.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-form">
          <input
            id="question"
            name="question"
            value={newFaq.question}
            onChange={handleInputChange}
            placeholder={selectedFaq ? "Update Question" : "Enter Question"}
            className="faq-input"
          />
          <input
            id="answer"
            name="answer"
            value={newFaq.answer}
            onChange={handleInputChange}
            placeholder={selectedFaq ? "Update Answere" : "Enter Answere"}
            className="faq-input"
          />
          <button onClick={handleSubmit} className="submit-button">
            {selectedFaq ? "Update FAQ" : "Add FAQ"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
