import {useState} from 'react';
import './App.css';
import html2canvas from "html2canvas";

function App() {

  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value);
  }

  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value);
  }

  const onChangeImagen = function(evento){
    setImagen(evento.target.value);
  }




  const onClickExportar = function (evento) {
    alert("Exportar");
    html2canvas(document.querySelector("#postal")).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'postal.png';
      link.href= img;
      link.click();
    });
  };

  
  return (
    <div className="App">
      <h1>Postales para fechas especiales</h1>
      <select className="inp" onChange={onChangeImagen}>
        <br />
        <option value="select">Seleccionar</option>
        <option value="amor1" >Amor y Amistad</option>
        <option value="cumple2">Cumpleaños</option>
        <option value="mujer1">Dia de la Mujer</option>
        <option value="navidad4">Feliz Navidad</option>
        <option value="newYear3">Feliz Año</option>
        <option value="paisaje2">Paisaje</option>
        <option value="otros">Otras Ocasiones</option>
      </select><br/><br/>
      
      <input className="inp" onChange={onChangeLinea1} type="text" placeholder="Titulo"/><br/><br/>
      <input className="inp"  onChange={onChangeLinea2} type="text" placeholder="Leyenda"/><br/><br/>
     

      <div className="postal" id="postal">
          <span>{linea1}</span>
          <br />
          <span>{linea2}</span>
          <img className="img" src={"/img/" + imagen + ".jpg"}/>
      </div>
      <br/>
      <button type="button"className="primary-button" onClick={onClickExportar}>Exportar</button>

      <div className="footer">
        <h2>Creado por OAL WEB</h2>
        
      </div>
    </div>
    
    
  );
}

export default App;
