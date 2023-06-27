import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import './index.css';

class RightAvtorizationPage extends React.Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div className="avtorizationR">
        <div id="avtorizHeader">
            <p>Добро пожаловать!</p>
        </div>
        <div id="RightAvtorization">
        <h4>Мои заказы</h4>
        <p>У Вас еще нет заказов</p>
        <button id="goToCatalog" >Перейти в каталог</button>

        </div>
      </div>
    )
  }
}


export class RightAvtorization extends React.Component {
  constructor() {
   super();
   this.state = {
     modalOpen: true
   }
 }

 onClick(e){
     e.preventDefault();
     this.setState({modalOpen: false})
   }

  render() {

    return (
      <div>
      <button id="goToCatalog" onClick={this.onClick.bind(this)}></button>
              {this.state.modalOpen && <RightAvtorizationPage />}
</div>

);
  }
}


export default RightAvtorization;
