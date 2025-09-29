import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import logo from "../Header/interior logo_png.png";
import Image from "next/image";

const Navbar = ({ handleScrollTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onLinkClick = (section) => {
    if (handleScrollTo) handleScrollTo(section);
    setMenuOpen(false);
  };

  return (
    <div className="navbar-head">
      <nav className="navbar">
        <div className="navbar-content">
          <Link  href="/">
          <div className="logo">
            <Image src={logo} alt="Logo" width={100} height={50} />
          </div>
          </Link>
          <div className={`nav-links${menuOpen ? " open" : ""}`}>
            <Link href="/">
              <span onClick={() => onLinkClick("home")}>Home</span>
            </Link>
            <Link href="/about_us">
              <span>About us</span>
            </Link>
            <Link href="/gallery">
              <span>Gallery</span>
            </Link>
            <Link href="/constinterio">
              <span>Constinterio</span>
            </Link>
            <Link href="/contact_us">
              <span>Contact us</span>
            </Link>

          </div>
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
