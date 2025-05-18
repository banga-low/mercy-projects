import { Link } from 'react-router-dom';
import '../styles/landingPage.css';
import landingImg from '../assets/landing.jpeg'; 

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">

        {/* Welcome Title and Subtitle */}
        <h1 className="landing-title">Welcome to Our App</h1>
        <p className="landing-subtitle">
          Your gateway to efficient management.
        </p>

        {/* Image */}
        <div className="landing-image-container">
          <img 
            src={landingImg} 
            alt="Welcome illustration" 
            className="landing-image"
          />
        </div>

        {/* Action Buttons */}
        <div className="landing-buttons">
          <Link
            to="/login"
            className="landing-button login-button"
          >
            Login
          </Link>
          <div className="button-spacer"></div>
          <Link
            to="/signup"
            className="landing-button signup-button"
          >
            Sign Up
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default LandingPage;
