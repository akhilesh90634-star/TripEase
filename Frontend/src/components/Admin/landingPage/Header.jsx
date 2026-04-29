import React, { useState } from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const [display, setdisplay] = useState(false);
  let navigate = useNavigate();

  function logout() {
    localStorage.removeItem("accessToken");
    navigate("/login");
  }

  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/logo.png" className={styles.logo} />
        <h3>TripEase</h3>
      </div>

      <div className={styles.nameContainer} onClick={() => setdisplay(true)}>
        <div className={styles.circle}>S</div>
        <p>Admin</p>
      </div>

      {display && (
        <div className={styles.dropDownContainer}>
          <div style={{ padding: "10px" }}>
            <div>Admin@gmail.com</div>
            <div>Admin</div>
          </div>

          <div className={styles.line}></div>

          <div
            className={styles.logoutContainer}
            style={{ padding: "10px" }}
            onClick={logout}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
