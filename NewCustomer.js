import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import './index.css';

 export class NewCustomer extends React.Component {
    render(){
        return (
          <div>
            <div className="new-customer">
               <h5>Новым покупателям</h5>
               <p>При первом заказе регистрация  </p>
               <p>происходит автоматически. Пароль отправляется на почту.</p>
              </div>
             <button id="firstOrder">Сделать первый заказ</button>
             </div>
        );
    }
}
  /*  <button id="order">Перейти в "Мои заказы"</button> */

export default NewCustomer;
