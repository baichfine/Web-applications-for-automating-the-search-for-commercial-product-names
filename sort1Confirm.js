import React, { Component } from 'react';
import './index.css';
/*import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';

import Cookies from 'js-cookie';
import update from 'immutability-helper';*/


export default class Sort1Confirm extends Component {
constructor(props){
  super(props);
  this.state = {

}
}

render() {

return(

  <div className ="fullAutoProducts">
    <div id="sort1Confirm">
    <span  id ="sort1AnswerClose" onClick={this.props.sort1ClickBasketClose}>&#10006;</span>
    <p id ="answerSort1"><strong>Поиск не завершен. Деталь может быть дешевле. Добавить в корзину?</strong></p>
    <table>
    <tr><td ><button id="buttonSort1No" onClick={this.props.clickSort1Basket}>Добавить в корзину</button><button id="buttonSort1Yes" onClick={this.props.sort1ClickBasketClose}>Продолжить поиск</button></td></tr>
    </table>
    </div>
    </div>
)}

}
