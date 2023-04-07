
import './App.css';
import Testimonio  from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Galería de Imagenes con React</h1>
      <Testimonio 
      nombre='El avance de la programación'
      imagen='code' 
      testimonio='Cada vez son más los accesos para aprender programación a nivel usuario.'/> 

      <Testimonio
      nombre='El futuro de la AI'
      imagen='robot'
      testimonio='Proximamente la AI se verá reflejada en asistentes robots altamente eficientes.'/>

      <Testimonio
       nombre='Las nuevas tecnologias'
       imagen='tecno'
       testimonio='El avance de las pantallas flexibles, los hologramas y la AI, auspician una revolución tecnologica.'/>

<Testimonio
       nombre='VR una herramienta que quiere alcanzar su maximo potencial'
       imagen='vr'
       testimonio='Nuevos usos en la tecnologia de Virtual Reality en el area de la medicina.'/>
 
      </div>
    </div>
  );
}

export default App;
