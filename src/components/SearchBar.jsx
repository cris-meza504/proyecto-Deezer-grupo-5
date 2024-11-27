import React, { useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const styles = {
  navbar: {
    background: "#000000",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.5)",
    zIndex: 10,
    position: "sticky",
    top: 0,
    marginLeft: "0px",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    background: "#29282D",
    borderRadius: "5px",
    width: "375px",
    padding: "10px",
    transition: "border-color 0.3s, background-color 0.3s",
    boxSizing: "border-box",
    flexShrink: 0,
  },
  search: {
    background: "transparent",
    color: "#fff",
    border: "none",
    outline: "none",
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    width: "calc(100% - 20px)",
    boxSizing: "border-box",
  },
  searchIcon: {
    marginRight: "10px",
    fontSize: "18px",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  profileIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#bbb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    cursor: "pointer",
  },
  notificationIcon: {
    fontSize: "24px",
    cursor: "pointer",
  },
};

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Almacena la búsqueda del usuario
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate(); // Hook para redirigir

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  //Maneja las busquedas
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario
    if (searchQuery.trim() !== "") {
      // Redirige a la página de resultados con la búsqueda
      navigate(`/app/songs/${encodeURIComponent(searchQuery)}`);
    } else {
      navigate(`/app/songs`);
    }
  };

  return (
    <header style={styles.navbar}>
      <form
        onSubmit={handleSearchSubmit}
        style={{
          ...styles.searchContainer,
          border: isFocused ? "2px solid #A020F0" : "none",
          background: isFocused ? "#3a393d" : "#29282D",
        }}
      >
        <FaSearch style={styles.searchIcon} />
        <input
          type="text"
          placeholder="Artistas, canciones, podcasts..."
          style={styles.search}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Actualiza el estado de la búsqueda
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </form>
      <div style={styles.profile}>
        <FaBell style={styles.notificationIcon} />
        <div style={styles.profileIcon}>
          <span>👤</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
