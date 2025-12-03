import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");

  // ---------------- CHECK LOGIN ON LOAD ----------------
  useEffect(() => {
    fetch("https://stoxly-sqxa.onrender.com/auth/me", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.loggedIn) {
          window.location.href = "https://stoxlyfront.onrender.com/login";
        } else {
          setUsername(data.user.fullName);
        }
      })
      .catch(() => {
        window.location.href = "https://stoxlyfront.onrender.com/login";
      });
  }, []);

  const handleMenuClick = (index) => setSelectedMenu(index);

  const toggleProfileDropdown = () =>
    setIsProfileDropdownOpen(!isProfileDropdownOpen);

  // ---------------- LOGOUT FUNCTION ----------------
  const logoutUser = async () => {
    await fetch("https://stoxly-sqxa.onrender.com/auth/logout", {
      method: "GET",
      credentials: "include",
    });

    window.location.href = "https://stoxlyfront.onrender.com/login";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />

      <div className="menus">
        <ul>
          <li>
            <Link to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link to="/apps" onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* ---------------- PROFILE ---------------- */}
        <div className="profile" onClick={toggleProfileDropdown}>
          <div className="avatar">
            {username.substring(0, 2).toUpperCase()}
          </div>
          <p className="username">{username}</p>
        </div>

        {/* ---------------- DROPDOWN ---------------- */}
        {isProfileDropdownOpen && (
          <div className="dropdown">
            <p>Profile</p>
            <p>Settings</p>
            <p>Console</p>
            <p>Reports</p>

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
