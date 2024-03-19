import React from 'react';
import '../layout/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom'; // Import Link for routing

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Address</h3>
          <p style={{ color: 'white' }}>123 Main Street<br />City, State<br />Postal Code</p>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-icons">
            <SocialIcon link="https://www.facebook.com" icon={<FacebookIcon />} />
            <SocialIcon link="https://www.twitter.com" icon={<TwitterIcon />} />
            <SocialIcon link="https://www.instagram.com" icon={<InstagramIcon />} />
          </div>
        </div>
        <div className="footer-links">
          <FooterLink to="/Terms" text="Terms and Conditions" />
          <FooterLink to="/Faq" text="FAQ" />
          <FooterLink to="/privacypolicy" text="Privacy Policy" />
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p style={{ color: 'white' }}>
        Email: example@example.com<br />
        Phone: +1 (123) 456-7890
      </p>
        </div>
      </div>
    </footer>
  );
}

// Social Icon Component
function SocialIcon({ link, icon }) {
  return (
    <a href={link} className="social-icon">
      {icon}
    </a>
  );
}

// Footer Link Component
function FooterLink({ to, text }) {
  return (
    <Link to={to} className="footer-link">
      {text}
    </Link>
  );
}

export default Footer;
