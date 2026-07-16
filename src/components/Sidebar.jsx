import React from "react";

function Sidebar({ menu, setMenu }) {
  const menus = [
    {
      id: "dashboard",
      icon: "🏠",
      title: "Dashboard",
    },
    {
      id: "kandidat",
      icon: "👨‍🎓",
      title: "Data Kandidat",
    },
    {
      id: "grafik",
      icon: "📊",
      title: "Grafik Statistik",
    },
    {
      id: "hasil",
      icon: "📋",
      title: "Hasil Evaluasi",
    },

    {
      id: "tentang",
      icon: "ℹ️",
      title: "Tentang",
    },
  ];

  return (
    <aside className="sidebar">

      {/* Logo */}

      <div className="sidebar-logo">

        <div className="logo-icon">
          🎓
        </div>

        <div>
          <h2>SmartScholar</h2>
          <span>v1.0</span>
        </div>

      </div>

      {/* User */}

      <div className="sidebar-user">

        <div className="avatar">

          👤

        </div>

        <div>

          <strong>
            {localStorage.getItem("username") || "Admin"}
          </strong>

          <small>● Online</small>

        </div>

      </div>

      <hr />

      {/* Menu */}

      <ul className="sidebar-menu">

        {menus.map((item) => (

          <li
            key={item.id}
            className={menu === item.id ? "active" : ""}
            onClick={() => setMenu(item.id)}
          >

            <span className="menu-icon">
              {item.icon}
            </span>

            <span>
              {item.title}
            </span>

          </li>

        ))}

      </ul>

      {/* Footer */}

      <div className="sidebar-footer">

        <small>

          SmartScholar © 2026

        </small>

      </div>

    </aside>
  );
}

export default Sidebar;