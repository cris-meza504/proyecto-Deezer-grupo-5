import { useState } from "react";
import lbLogo from "../../img/lb.png";
import styles from "../../css/Register.module.css";

const RegisterComponent = () => {
  const [currentSection, setCurrentSection] = useState(1);

  const nextSection = () => {
    setCurrentSection((prevSection) => prevSection + 1);
  };

  const previousSection = () => {
    setCurrentSection((prevSection) => Math.max(prevSection - 1, 1));
  };

  const getProgressText = () => {
    return `Paso ${currentSection} de 3`;
  };

  return (
    <div className={styles.wrapper}>
      {" "}
      {/* Agrega un contenedor principal */}
      <div className={styles.header}>
        <img src={lbLogo} alt="Deezer Logo" className={styles.logo} />
      </div>
      <div className={styles.loginContainer}>
        {/* Encabezado */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          {currentSection > 1 && (
            <button
              onClick={previousSection}
              style={{
                background: "none",
                border: "none",
                color: "#ccc",
                fontSize: "24px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              &#x2190;
            </button>
          )}
          <span style={{ color: "#ccc", fontSize: "16px" }}>
            {getProgressText()}
          </span>
        </div>
        {/* Sección 1 */}
        {currentSection === 1 && (
          <div
            id="section-1"
            className={`${styles.loginCard} ${styles.section}`}
            style={{
              width: "481px",
            }}
          >
            <h1 className={styles.title}>
              Introduzca su dirección de correo electrónico
            </h1>
            <form>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
              </div>
              <button
                type="button"
                className={styles.loginButton}
                onClick={nextSection}
              >
                Continuar
              </button>
            </form>
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
          </div>
        )}

        {/* Sección 2 */}
        {currentSection === 2 && (
          <div
            id="section-2"
            className={`${styles.loginCard} ${styles.section}`}
            style={{
              width: "481px",
            }}
          >
            <h1 className={styles.title}>Crear una Contraseña</h1>
            <form>
              <div className={styles.inputGroup}>
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Crea una contraseña"
                  required
                />
              </div>
              <div className={styles.buttonGroup}>
                <button
                  type="button"
                  className={styles.loginButton}
                  onClick={nextSection}
                >
                  Continuar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Sección 3 */}
        {currentSection === 3 && (
          <div
            id="section-3"
            className={`${styles.loginCard} ${styles.section}`}
            style={{
              width: "481px",
            }}
          >
            <h1 className={styles.title}>Introduzca sus datos personales</h1>
            <form>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Nombre de usuario</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ingresa tu nombre completo"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="age">Edad</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="Ingresa tu edad"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="gender">Identidad</label>
                <select id="gender" name="gender" required>
                  <option value="female">Identidad</option>
                  <option value="female">Femenino</option>
                  <option value="male">Masculino</option>
                  <option value="other">No binario</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
              <div className={styles.buttonGroup}>
                <button type="submit" className={styles.loginButton}>
                  Registrarse gratis
                </button>
              </div>
            </form>
            <p className={styles.signupLink3}>
              Al hacer clic en &quot;Registrate gratis&quot;, aceptas crear una
              cuenta y aceptas los{" "}
              <a href="https://www.deezer.com/legal/cgu">
                Términos y Condiciones de Uso
              </a>{" "}
              y la{" "}
              <a href="https://www.deezer.com/legal/personal-datas">
                Política de Privacidad
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterComponent;
