
import './App.css';
import Testimonio from "./componentes/Testimonio";
 
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
       <h1>Esto es lo que dicen nuestros alumnos de FreeCodeCamp</h1>
      <Testimonio
        nombre="Felipe Gomez"
        pais="Colombia"
        cargo="Ingeniero Sistemas"
        testimonio="Antes de unirme a FreeCodeCamp, estaba buscando una forma de aprender programación de manera accesible y gratuita. FreeCodeCamp superó mis expectativas. Los proyectos prácticos y los desafíos me permitieron aplicar lo que aprendía de manera inmediata. Gracias a FreeCodeCamp, ahora soy un desarrollador web profesional y he conseguido un trabajo en una empresa de renombre. Estoy enormemente agradecido por la calidad de la educación que recibí en FreeCodeCamp"
        imagen="1"
      />

      <Testimonio
        nombre="Maria "
        pais="Croacia"
        cargo="Ingeniera de Software"
        testimonio="Me encanta cómo FreeCodeCamp ofrece una experiencia de aprendizaje interactiva. Pude aprender a programar mientras trabajaba a tiempo completo y cuidaba de mi familia. Los módulos bien estructurados y las prácticas guiadas me ayudaron a adquirir las habilidades necesarias para lanzar mi propia página web. FreeCodeCamp me brindó el apoyo y los recursos necesarios para impulsar mi carrera en desarrollo web y estoy emocionada de lo que el futuro me depara"
        imagen="3"
      />

      <Testimonio
        nombre="Obama "
        pais="Estados Unidos"
        cargo="Ingeniero de Software"
        testimonio="FreeCodeCamp cambió mi vida. Como autodidacta, estaba luchando por aprender programación por mi cuenta. Pero cuando me encontré con FreeCodeCamp, finalmente encontré una comunidad de personas apasionadas y un plan de estudios estructurado que me guió paso a paso. Aprendí a programar desde cero y, lo más importante, aprendí a pensar como un desarrollador. FreeCodeCamp me dio la confianza para perseguir mis sueños y ahora tengo un trabajo que amo como desarrollador de software"
        imagen="2"
      />
      </div>
    </div>
  );
}

export default App;
