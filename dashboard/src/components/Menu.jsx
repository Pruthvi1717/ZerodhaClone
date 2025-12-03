import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    fetch("http://localhost:8080/auth/me", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.loggedIn) {
          navigate("http://localhost:5173/login");
        } else {
          setUsername(data.user.fullName);
        }
      });
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // ---------------- LOGOUT FUNCTION ----------------
  const logoutUser = async () => {
    const res = await fetch("http://localhost:8080/auth/logout", {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    console.log("logout:", data);

    window.location.href = "http://localhost:5174/login";
  };
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />

      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* ---------------- PROFILE SECTION ---------------- */}
        <div className="profile" onClick={toggleProfileDropdown}>
          <div className="avatar">{username.substring(0, 2).toUpperCase()}</div>
          <p className="username">{username}</p>
        </div>

        {/* -------- DROPDOWN MENU LIKE ZERODHA -------- */}
        {isProfileDropdownOpen && (
          <div className="dropdown">
            <p>Profile</p>
            <p>Settings</p>
            <p>Console</p>
            <p>Reports</p>
            <a href="http://localhost:5173/login" style={{textDecoration: "none", color: "black"}}><p >Login</p></a>
            
            <p className="logout" onClick={logoutUser}>
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
