/* eslint-disable jsx-a11y/anchor-is-valid */
import countries from "../../js/countries";
import lbLogo from "../../img/lb.png";
import styles from "../../css/Login.module.css";
import { useNavigate } from "react-router-dom";
import React from "react";

const LoginComponent = () => {
  const navigate = useNavigate(); // Hook para redirigir

  const handleLogin = () => {
    // Redirigir a la página principal (ajusta la ruta según corresponda)
    navigate("/app/HomePage");
  };

  const handleClick = () => {
    // Redirigir a la página principal (ajusta la ruta según corresponda)
    navigate("/register");
  };

  return (
    <body className={styles.loginPage}>
      <div className={styles.header}>
        <img src={lbLogo} alt="Deezer Logo" className={styles.logo} />
      </div>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <h1 className={styles.title}>Inciar Sección</h1>
          <form action="#" method="POST">
            <div className={styles.inputGroup}>
              <label htmlFor="country">países</label>
              <select id="country" name="country" required>
                <option value="">Honduras</option> {}
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="correo">Correo electrónico</label>
              <input type="text" id="correo" name="correo" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button
              type="submit"
              onClick={handleLogin}
              className={styles.loginButton}
            >
              Acceso
            </button>
          </form>
        </div>
      </div>
      <p className={styles.signupLink2}>
        ¿Aún no estás registrado en Deezer?{" "}
        <span className={styles.registerButton}>
          <a href="#" onClick={handleClick}>
            Inscribirse
          </a>
        </span>
      </p>
      <p className={styles.signupLink3}>
        Este sitio está protegido por reCAPTCHA. Se aplican{" "}
        <a href="https://policies.google.com/privacy">
          la Política de privacidad
        </a>{" "}
        y{" "}
        <a href="https://policies.google.com/privacy">
          los Términos de servicio
        </a>{" "}
        de Google.
      </p>
    </body>
  );
};

export default LoginComponent;
