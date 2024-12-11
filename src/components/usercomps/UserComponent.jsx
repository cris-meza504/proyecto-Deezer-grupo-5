import { Link } from "react-router-dom";
import styles from "../../css/User.module.css";
import { useState } from "react";
const UserComponent = () => {
  const [userName, setUserName] = useState("Josu Posas");

  const [image, setImage] = useState(null);
  const [hover, setHover] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <body>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=photo_camera"
      />
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
      <div className={styles.divPage}>
        <div className={styles.divContainer}>
          <div>
            <h2 className={styles.tittleForm}>Mi información</h2>
            <hr className={styles.barHorizontal} />
            <div className={styles.divForm}>
              <div className={styles.divFormSub1}>
                <div className={styles.divPhoto}>
                  {/* Si hay una imagen cargada, la mostramos; si no, mostramos el ícono */}
                  {image ? (
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    >
                      <img
                        src={image}
                        alt="Foto de perfil"
                        style={{
                          width: "150px",
                          height: "150px",
                          borderRadius: "50%",
                          cursor: "pointer",
                        }}
                      />
                      {hover && (
                        <span
                          className="material-symbols-outlined"
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            fontSize: "24px",
                            display: "block",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            padding: "20px",
                            color: "black",
                          }}
                        >
                          photo_camera
                        </span>
                      )}
                    </div>
                  ) : (
                    <i
                      className="fa-regular fa-user"
                      style={{ fontSize: "55px", cursor: "pointer" }}
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                    ></i>
                  )}
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
                <div className={styles.divInfo}>
                  <h3 className={styles.userName}>Josu Posas</h3>
                  <p className={styles.fontSteper}>
                    Estás disfrutando de Deezer Free.
                  </p>
                </div>
                <Link className={styles.suscriptionLink}>
                  Administrar mi suscripción
                </Link>
              </div>

              <div className={styles.divFormSub2}>
                <h3 style={{ fontSize: "20px" }}>Acceso</h3>
                <hr className={styles.barHorizontal} />
                <div className={styles.formDatos1}>
                  <div className={styles.formControl}>
                    <label htmlFor="">Su correo electronico: </label>
                    <div className={styles.formInput}>
                      <input type="text" value={"josueposas@yahoo.com"} />
                      <Link className={styles.editButton}>
                        <i className="bx bx-pencil"></i>
                      </Link>
                    </div>
                  </div>
                  <div className={styles.formControl}>
                    <label htmlFor="">Su contraseña: </label>
                    <div className={styles.formInput}>
                      <input type="password" value={"*****"} />
                      <Link className={styles.editButton}>
                        <i className="bx bx-pencil"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divFormSub3}>
                <h3 style={{ fontSize: "20px" }}>
                  Información de Deezer que pueden ver otros usuarios de Deezer
                </h3>
                <hr className={styles.barHorizontal} />
                <div className={styles.formDatos1}>
                  <div className={styles.formControl}>
                    <label htmlFor="">Me identifico como</label>
                    <div className={styles.formInput}>
                      <div className={styles.radioControl}>
                        <input
                          id="masculino"
                          type="radio"
                          name="gender"
                          value={"masculino"}
                          defaultChecked
                        />
                        <label htmlFor="masculino">Masculino</label>
                      </div>
                      <div className={styles.radioControl}>
                        <input
                          id="femenino"
                          type="radio"
                          name="gender"
                          value={"femenino"}
                        />
                        <label htmlFor="femenino">Femenino</label>
                      </div>
                      <div className={styles.radioControl}>
                        <input
                          id="noBinario"
                          type="radio"
                          name="gender"
                          value={"no binario"}
                        />
                        <label htmlFor="noBinario">No binario</label>
                      </div>
                    </div>
                  </div>
                  <div className={styles.formControl}>
                    <label htmlFor="">Nombre de usuario </label>
                    <div className={styles.formInput}>
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divFormSub4}>
                <h3 style={{ fontSize: "20px" }}>Información privada</h3>
                <hr className={styles.barHorizontal} />
                <div className={styles.formDatos2}>
                  <div className={styles.groupButtons}>
                    <Link className={styles.settingPrivacy}>
                      Configuración de privacidad
                    </Link>
                    <Link className={styles.dataPersonal}>
                      Mis datos personales
                    </Link>
                  </div>
                  <div className={styles.formControl}>
                    <label htmlFor="">Fecha de nacimiento </label>
                    <div className={styles.formInput}>
                      <select
                        name="day"
                        id="day"
                        className={styles.select}
                        defaultValue={"1"}
                      >
                        {Array.from({ length: 31 }, (_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>

                      <select
                        name="month"
                        id="month"
                        className={styles.select}
                        defaultValue={"1"}
                      >
                        {Array.from({ length: 12 }, (_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>

                      <select
                        name="year"
                        id="year"
                        className={styles.select}
                        defaultValue={"2004"}
                      >
                        {Array.from({ length: 100 }, (_, i) => (
                          <option key={i + 1930} value={i + 1930}>
                            {i + 1930}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className={styles.formControl}>
                    <label htmlFor="">Idioma </label>
                    <div className={styles.formInput}>
                      <select
                        name="language"
                        id="language"
                        className={styles.select}
                        defaultValue="es"
                      >
                        <option value="es">Español</option>
                        <option value="en">Inglés</option>
                        <option value="fr">Francés</option>
                        <option value="de">Alemán</option>
                        <option value="it">Italiano</option>
                        <option value="pt">Portugués</option>
                        <option value="ru">Ruso</option>
                        <option value="zh">Chino</option>
                        <option value="ja">Japonés</option>
                        <option value="ar">Árabe</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.buttonGuardar}>
                    <Link className={styles.emailSignup}>Guardar</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className={styles.barHorizontal} />
          <div className={styles.divEliminar}>
            <Link className={styles.dataPersonal}>Eliminar mi cuenta</Link>
          </div>
        </div>
      </div>
    </body>
  );
};

export default UserComponent;
