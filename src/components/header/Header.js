import React, { useState } from "react";

import { Fade } from "react-reveal";
import Link from "next/link";
import { useRouter } from "next/router";
import { greeting } from "../../repository/data";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";

function Header(props) {
  const theme = props.theme;

  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props.theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${
        props.theme.name === "light" ? "#F7D774" : "#646464"
      }`,
    },
  });

  const link = "/home";
  const router = useRouter();
  const onPath = (path) => router.pathname === path;

  const [currTheme, setCurrTheme] = useState(props.theme);

  function changeTheme() {
    if (currTheme === "light") {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    } else {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
      setCurrTheme("light");
    }
  }

  const icon =
    props.theme.name === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    );

  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <Link href={link} className="logo">
            <span style={{ color: theme.text }}></span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}></span>
          </Link>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <Link
                href="/home"
                className="homei"
                style={{ borderRadius: 5, color: theme.text, fontWeight: onPath("/home") ? "bold" : "normal" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/educations"
                className="ec"
                style={{ borderRadius: 5, color: theme.text, fontWeight: onPath("/educations") ? "bold" : "normal" }}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href="/experiences"
                className="xp"
                style={{ borderRadius: 5, color: theme.text, fontWeight: onPath("/experiences") ? "bold" : "normal" }}
              >
                Experiences
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="projects"
                style={{ borderRadius: 5, color: theme.text, fontWeight: onPath("/projects") ? "bold" : "normal" }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className="cr"
                style={{ borderRadius: 5, color: theme.text, fontWeight: onPath("/contacts") ? "bold" : "normal" }}
              >
                Contacts
              </Link>
            </li>
            <button {...styles} onClick={changeTheme}>
              {icon}
            </button>
          </ul>
        </header>
      </div>
    </Fade>
  );
}

export default Header;
