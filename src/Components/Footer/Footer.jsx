import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer */}
      <div  className="footer-main">
        <div className="footer-container">
          
          {/* Company Info */}
          <div className="footer-column">
            <h4  className="footer-logo">WHAT WE DO</h4>
            {/* <div class="aniliner"></div> */}

            <p  className="company-description">
              Fisheye interior & construction is a 
              structured firm having professional
              expertise to fulfill the elaborate range of 
              services in interiors, construction and 
              consulting to the clients, with perfection
              and uncompromised quality
            </p>
            <div className="social-links">
              <h4  className="footer-logo">SOCIAL LINK</h4>
               {/* <div class="aniliner"></div> */}
              <div className="link-flex">
              <a 
                href="https://facebook.com/auraspaces" 
                className="social-link" 
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://twitter.com/auraspaces" 
                className="social-link" 
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://instagram.com/auraspaces" 
                className="social-link" 
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://linkedin.com/company/auraspaces" 
                className="social-link" 
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              </div>
            </div>
          </div>

          {/* About Column */}
          <div className="footer-column">
            <h4 className="footer-logo">OUR SERVICE</h4>
             {/* <div class="aniliner"></div> */}
            <ul className="footer-links">
         <li><a  href="#Indoor Gardening" className="company-description">Indoor Gardening</a></li>
              <li><a   href="#Construction" className="company-description">Construction</a></li>
              <li><a   href="#House Interior" className="company-description">House Interior</a></li>
              <li><a   href="#Hotel Interior" className="company-description">Hotel Interior</a></li>
              <li><a   href="#Office Interior" className="company-description">Office Interior</a></li>
            </ul>
          </div>

          {/* Our Services Column */}
          <div className="footer-column">
            <h4 className="footer-logo">MORE..</h4>
             {/* <div class="aniliner1"></div> */}
            <ul className="footer-links">
              <li><a   href="#modular Kitchen" className="company-description">Modular Kitchen</a></li>
              <li><a  href="#Bedroom Wardrobes" className="company-description">Bedroom Wardrobes</a></li>
              <li><a  href="#False ceiling" className="company-description">False Ceiling</a></li>
              <li><a  href="#Wallpappers" className="company-description">Wallpappers</a></li>
              <li><a   href="#Wooden Floorings" className="company-description">Wooden Floorings</a></li>

            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h4  className="footer-logo">ADDRESS</h4>
             {/* <div class="aniliner1"></div> */}
               <p className="company-description">
                <ul className="footer-links">
                <a href="https://maps.app.goo.gl/NXQWXG9i2ukQuKu3A" >
                10/11 , Trichy Road,
                Sundram Brothers Layout, Ramanathapuram,
                Coimbatore - 641 045 , Tamilnadu.
                </a>
                </ul>
              </p>
              <br />
            <h4  className="footer-logo">CONTACT</h4>
             {/* <div class="aniliner1"></div> */}
            <div className="contact-info">
              <ul className="footer-links">
               <li><a href="tel:+919994444121" className="company-contact">📞 +91 99944 44121 </a> <br />
               <a href="tel:+918220767230"> 📞 +91 82207 67230</a></li>
               </ul>
              <a className="contact-email" href="mailto:admin@fisheyeinterior.com">✉️ admin@fisheyeinterior.com</a>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="copy"><div>© 2025 Fisheye Interior & Construction. All rights reserved. </div> <div> <a className="contact-fist" href="https://www.fist-o.com/">Designed By <span > Fist-O Private Limited</span></a> </div></div>
      </div>
    </footer>
  );
};

export default Footer;
