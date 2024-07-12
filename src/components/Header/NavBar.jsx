import "../Header/NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const NavBar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const handelBurgerMenuIcon = () => {
    setBurgerMenu(!burgerMenu);
  };

  return (
    <div className="main_nav_parent_container">
      <nav className="nav_container">
        <div className="web_name">
          <h2>
            Logic<span>Nactor</span>
          </h2>
        </div>

        <div
          id="main_nav_navigate_container"
          className={
            burgerMenu
              ? "#main_nav_navigate_container isActive"
              : "#main_nav_navigate_container"
          }
        >
          <ul onClick={handelBurgerMenuIcon}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#8e198a] underline" : ""
                }
              >
                HOME
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-[#8e198a] underline" : ""
                }
              >
                BLOG
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-[#8e198a] underline" : ""
                }
              >
                CONTACT
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-[#8e198a] underline" : ""
                }
              >
                ABOUT US
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="nav_singin_container">
          <Link to="/">
            <button>SING IN</button>
          </Link>
        </div>

        <div onClick={handelBurgerMenuIcon} className="burger_menu_container">
          {burgerMenu ? (
            <div>
              <TiThMenu />
            </div>
          ) : (
            <div>
              <ImCross />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
