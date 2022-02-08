import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "react-feather";

function NavLink({ to, children, setIsNavOpen }) {
  const navigate = useNavigate();
  return (
    <div className="header_wrappernav_link">
      <input
        type="radio"
        // defaultChecked={to === window.location.pathname}
        className="header_wrappernavlink_input"
        name="header_wrappernavlink_input"
        onClick={() => {
          navigate(to);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          if (window.innerWidth < 1050) {
            setIsNavOpen(false);
          }
        }}
      />
      <div className="header_wrappernavlink_content">{children}</div>
    </div>
  );
}

export default function Header() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 1050) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1050) {
        setIsNavOpen(false);
      } else {
        setIsNavOpen(true);
      }
    });
    return () => window.removeEventListener("resize");
  }, []);
  return (
    <div className="header">
      <div className="header__wrapper">
        <a href="#" className="header_wrapper_logo">
          <img src={logo} alt="logo" className="header_wrapperlogo_img" />
        </a>
        <button
          className="header_wrapper_menu"
          onClick={() => {
            isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
          }}
        >
          {isNavOpen ? (
            <X size={20} color="currentColor" />
          ) : (
            <Menu size={20} color="currentColor" />
          )}
        </button>
        {isNavOpen ? (
          <div className="header_wrapper_nav">
            <NavLink to="/" id="home" setIsNavOpen={setIsNavOpen}>
              Home
            </NavLink>
            <NavLink to="/" id="ourschool" setIsNavOpen={setIsNavOpen}>
              Our School
            </NavLink>
            <NavLink to="/" id="ourcampus" setIsNavOpen={setIsNavOpen}>
              Our Campus
            </NavLink>
            <NavLink to="/" id="admissions" setIsNavOpen={setIsNavOpen}>
              Admissions
            </NavLink>
            <NavLink to="/" id="careers" setIsNavOpen={setIsNavOpen}>
              Careers
            </NavLink>
            <NavLink to="/" id="careers" setIsNavOpen={setIsNavOpen}>
              Contact Us
            </NavLink>
          </div>
        ) : null}
      </div>
    </div>
  );
}