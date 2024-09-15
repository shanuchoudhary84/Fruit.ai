import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { SlSocialFacebook, SlSocialInstagram, SlSocialPintarest, SlSocialLinkedin } from "react-icons/sl";
import { CiMail, CiLock } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoIosFingerPrint } from "react-icons/io";
import './LoginPage.css'; 

function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userId && password) {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">By signing in you are agreeing to <br /> <span className='login-terms'>our Terms and Privacy Policy</span></p>
        <div className="login-nav">
          <ul>
            <li><Link to="/" className="nav-link active">Login</Link></li>
            <li><Link to="/" className="nav-link">Register</Link></li>
          </ul>
        </div>
        <div className="login-form">
          <div className="input-container">
            <CiMail className="input-icon" />
            <input 
              type="text" 
              placeholder="UserId" 
              className="input-field" 
              onChange={(e) => setUserId(e.target.value)} 
            />
          </div>
          <div className="input-container">
            <CiLock className="input-icon" />
            <input 
              type={showPassword ? 'text' : 'password'} 
              placeholder="Password" 
              className="input-field" 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <div 
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </div>
        </div>
        <div className="login-options">
          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" className="remember-label">Remember Me</label>
          </div>
          <div className="forgot-password">
            <span className='forgot-password-link'>Forgot Password?</span>
          </div>
        </div>
        <button 
          onClick={handleLogin} 
          className="login-button"
        >
          Login
        </button>
        <div className="social-connect">
          <span className="social-title">or connect with</span>
          <div className="social-icons">
            <div className="social-icon facebook">
              <SlSocialFacebook size={20} />
            </div>
            <div className="social-icon instagram">
              <SlSocialInstagram size={20} />
            </div>
            <div className="social-icon pinterest">
              <SlSocialPintarest size={20} />
            </div>
            <div className="social-icon linkedin">
              <SlSocialLinkedin size={20} />
            </div>
          </div>
        </div>
        <div className="fingerprint">
          <span className='fingerprint-icon'><IoIosFingerPrint /></span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
