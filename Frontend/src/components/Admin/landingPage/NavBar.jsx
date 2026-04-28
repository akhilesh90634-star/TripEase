import React, { useState } from 'react';
import styles from './NavBar.module.css';
import * as Icons from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const [isMenuClose, setisMenuClose] = useState(false);
  let navigate = useNavigate();

  let navItems = [
    { name: "Customers", icon: <Icons.People />, href: "/admin/customers" },
    { name: "Products", icon: <Icons.ShoppingBasket />, href: "/admin/products" },
    { name: "Orders", icon: <Icons.Dashboard />, href: "/admin/orders" },
  ];

  function handleMenu() {
    setisMenuClose(!isMenuClose);
  }

  return (
    <nav
      className={styles.sideBarContainer}
      style={{
        width: isMenuClose ? "70px" : "400px",
        transition: "all 0.2s linear 0s"
      }}
    >
      <div className={styles.header}>
        <div className={styles.menu} onClick={handleMenu}>
          <Icons.KeyboardDoubleArrowLeft
            sx={{
              transform: isMenuClose ? "rotate(180deg)" : "",
              transition: "all 0.2s linear 0s"
            }}
          />
          {!isMenuClose && <span>Admin</span>}
        </div>
      </div>

      <div className={styles.navbar}>
        {navItems.map((item, ind) => (
          <div
            className={styles.navItem}
            onClick={() => navigate(item.href)}
            key={ind}
          >
            {item.icon}
            {!isMenuClose && <span>{item.name}</span>}
          </div>
        ))}
      </div>

      <div className={styles.footer}></div>
    </nav>
  );
}

export default NavBar;