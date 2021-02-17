import React, { Component } from 'react';
import './App.css';
import Axios from "axios";
import axios from 'axios';

class App extends Component {
  email = React.createRef();
  asunto = React.createRef();
  mensaje = React.createRef();

  state = {
    email: "",
    asunto: "",
    mensaje: ""
  };
  ComprobarCambios = () =>{
    var email = this.email.current.value;
    var asunto = this.asunto.current.value;
    var mensaje= this.mensaje.current.value;
    this.setState({
      email: email,
      asunto: asunto,
      mensaje: mensaje
    });
  };
  constructor(){
    super();
    this.enviarEmail = this.enviarEmail.bind(this);
  }
  async enviarEmail(e){
    e.preventDefault();
    const {email, asunto, mensaje} = this.state;
    const form = await axios.post("/api/form",
    {
      email,
      asunto,
      mensaje
    })
  }
  render(){
    return (
      <div>
        <form className='formulario' onSubmit={this.enviarEmail}>
          <h1>Enviando Emails en React</h1>
          <div>
            <label htmlFor='email'>
              Email:
            </label>
            <input type='email'
              name='email'
              onChange={this.ComprobarCambios}
              className='form-control'
              ref={this.email}
             /> 
           
          </div>
          <div>
            <label htmlFor='asunto'>
              Asunto:
            </label>
            <input type="text" name="asunto" onChange={this.ComprobarCambios} 
            className="form-control"  ref={this.asunto} />
          </div>
          <div>
            <label htmlFor="mensaje"> Mensaje:</label>
            <textarea
            rows='4'
            name="mensaje"
            onChange={this.ComprobarCambios}
            className='form-control'
            ref={this.mensaje}
            ></textarea>
          
          </div>
          <button type='submit'>
              Enviar
          </button>
        </form>
      </div>
    )
  }
}

export default App;
