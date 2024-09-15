import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import ChatbotPage from './components/ChatBotPage/ChatbotPage';
import FaqPage from './components/FaqPage/FaqPage';
import AboutPage from './components/AboutPage/AboutPage';
import HelloChat from './components/ChatBotPage/HelloChat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/hellochat" element={<HelloChat/>} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/translator" element={<HelloChat />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
