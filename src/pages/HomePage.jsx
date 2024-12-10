import React, { useEffect } from "react";
import { useUser } from "../context/UserContext";  // Asegúrate de importar el hook
import CircleCategory from "../components/appcomps/CircleCategory";
import ContinueStreaming from "../components/appcomps/ContinueStreaming";
import Discover from "../components/appcomps/Discover";
import BeyondStreaming from "../components/appcomps/BeyondStreaming";

function HomePage({ onClick }) {
  const { user } = useUser();  // Obtener el usuario del contexto

  useEffect(() => {
    // Imprimir el id del usuario en consola cuando se carga el componente
    if (user) {
      console.log(user.id);
    }
  }, [user]); // Ejecutar el efecto solo cuando el usuario esté disponible

  return (
    <div onClick={onClick}>
      <CircleCategory />
      <ContinueStreaming />
      <Discover />
      <BeyondStreaming />
    </div>
  );
}

export default HomePage;