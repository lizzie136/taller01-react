import React from 'react';
import './styles.css';


const ListaTalleres = (props) => {

  const list = props.lista; 

  const talleres = list.map((taller, index) => (
    <li className="Lista-taller" key={`taller-${index}`}>
      <h3>{taller.name}</h3>
      <div>
        <p>{taller.description}</p>
        <span>Asistentes: {taller.attendes} personas</span>
      </div>
    </li>
  ));

  return (<ul className="Lista">{talleres}</ul>);
};


export default ListaTalleres;





