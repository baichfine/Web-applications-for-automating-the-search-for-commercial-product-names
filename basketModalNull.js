import React, { Component } from 'react'
/*import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import update from 'immutability-helper';*/
import './index.css';


export default class BasketModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: [],
      count: true,
      arrayBasketNew: {}
    }
}


  render() {
    return (
    <div id="basketModal">
    <p id="curerNull">Ваша корзина пуста</p>
    <button id="sign-in-modal" onClick={(e)=>{this.props.clickBasketButtonNull(e);}}>Начать покупки</button>
    </div>
  )
}
}
