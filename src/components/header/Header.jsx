import React, { useEffect, useState } from "react";
import "../../components/header/header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const link = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "How it Works", path: "/works" },
  ];

  const location = useLocation();


  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 250;
      if (window.scrollY > scrollThreshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`headerwrapper ${
        isFixed ? 'headerwrapperfixed' : ''
      }`}>
        <div className="headerwrapperinner1">
          <img src="images/logo.png" alt="" />
        </div>
        <div className="headerwrapperinner2">
          <ul className="headerul">
            {link.map((link, idx) => (
              <li
                key={idx}
                className={`${
                  link.path === location.pathname &&
                  "text-black border-b-2 border-red-300"
                } capitalize text-[14px] font-medium hover:text-red-300 transition-all`}
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="headerwrapperinner3">
          <button className="headerbtn">Sign Up</button>
          <button className="headerbtn1">Log In</button>
        </div>
      </div>


      <div className="MobileHeader">
        <RxHamburgerMenu size={30} />
      </div>
    </>
  );
};

export default Header;
