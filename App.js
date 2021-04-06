import React, {useState, useEffect } from 'react';
import { isElementOfType } from 'react-dom/test-utils';
import './App.css';
//import ReactDOM from 'react-dom';
//const url = ':https://dev.tuten.cl/TutenREST/rest/user/testapis%40tuten.cl '


fetch(url)
.then(response => response.json() )
.then(data => {

  let element = document.getElementById('elem')
  element.innerHTML =`
  <p>${data.nombre}</p>
  <p>${data.order}</p>
  <img src='${data.sprites.fromt_default}'

  `;
  
    console.log(data)
})

.catch(err =>console.log(err));






let now = new Date();
alert( now ); // muestra en pantalla la fecha y la hora actuales

var d=new Date();
var dia=new Array(7);
dia[0]="Domingo";
dia[1]="Lunes";
dia[2]="Martes";
dia[3]="Miercoles";
dia[4]="Jueves";
dia[5]="Viernes";
dia[6]="Sabado";
document.write("Hoy es: " + dia[d.getDay()]);


var d = new Date();
document.write('Fecha: '+d.getDate(),'<br>Dia de la semana: '+d.getDay(),'<br>Mes (0 al 11): '+d.getMonth(),'<br>Año: '+d.getFullYear(),'<br>Hora: '+d.getHours(),'<br>Hora UTC: '+d.getUTCHours(),'<br>Minutos: '+d.getMinutes(),'<br>Segundos: '+d.getSeconds());


function App() {

  const url = "https://dev.tuten.cl:443/TutenREST/rest/user/contacto%40tuten.cl/locations"
  const [todos, setTodos] = useState()
  const fetchApi = async () => {
   const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
  }

  useEffect(() => {
     fetchApi()
  }, [])
  return (

    <div classname="App">
      Hola Mundo
      { ! todos ? 'Cargando...' :
      todos.map ((todo, index)=>{
        return <li>{todo.title} </li>
      })
    }
    </div>
    
  );

 
}



export default App;
