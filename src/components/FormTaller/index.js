import React, {Component} from 'react';
import './styles.css';



class FormTaller extends Component{

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      description: null,
      attendes: null
    };
    this.name = React.createRef();
    this.description = React.createRef();
    this.attendes = React.createRef();
  }

  fn = (event) => {
    event.preventDefault();
    this.props.addLista({
      name: this.name.current.value,
      description: this.description.current.value, 
      attendes: this.attendes.current.value
    });
  };

  render() {
    const {name, description, attendes } = this;
    return  (<form className="Form">
      <input className="Form-input" type="text" placeholder="Título" ref={name}/>
      <input className="Form-input" type="text" placeholder="Descripción" ref={description}/>
      <input className="Form-input" type="number" placeholder="Asistentes" ref={attendes}/>
      <button className="Form-submit" onClick={this.fn}>Registrar</button>
    </form>);
  }
}


export default FormTaller;


