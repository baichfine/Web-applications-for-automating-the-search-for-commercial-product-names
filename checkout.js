import React, { Component } from 'react'
import { render } from 'react-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import './index.css';
import ButtonMyBasket from './buttonMyBasket.js';

export class Checkout extends React.Component {


render() {

  return (


    <Modal
      trigger={<ButtonMyBasket />}
    //  open={this.state.modalOpen}
    //  onClose={this.handleClose}
      basic
      size='small'
    >
      <Header  />
      <Modal.Content>


      <div>

        <div className="fullLogin">

          <div id="modalLoginEntranсe">
                    <span id="modalLoginClose" >&#10006;</span>
            <h3> </h3>


              <input id="email" type="text"  className="inputText" placeholder="Эл. почта" required/>
              <span id="floating-label"></span>
              <label>
              <input className="password" placeholder="Пароль" />

              {/* <span className="password__strength" data-score={this.state.score} /> */}
              </label>

              <span id="floating-label2"></span>
            {/* <input type="password" className="password" placeholder="Пароль"/> */}
            <button id="sign-in-modal" >Войти</button>


          </div>
          </div>
          </div>



      </Modal.Content>
      <Modal.Actions>
      </Modal.Actions>
    </Modal>);
  }
}

export default Checkout;
