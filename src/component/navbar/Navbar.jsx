import { Button } from '@/components/ui/button.jsx';
import './GooeyNav.css';
import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <a href="/">
          <img
            src="https://www.empowherto.org/images/empowherto-logo.svg"
            className="logo"
            alt="EmpowHerTo"
          />
        </a>
      </div>
      <div className="rightNav">
        <button>
          <a href="/" className="navLink">
            Home
          </a>
        </button>
        <button>
          <a href="/" className="navLink">
            About Us
          </a>
        </button>
        <button>
          <a href="/" className="navLink">
            Programs
          </a>
        </button>
        <button>
          <a href="/" className="navLink">
            Blog
          </a>
        </button>
        <button>
          <a href="/" className="navLink">
            Contact
          </a>
        </button>
        <button>
          <a href="/" className="donate">
            Donate
          </a>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
