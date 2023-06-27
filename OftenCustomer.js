import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import './index.css';

 export class OftenCustomer extends React.Component {
    render(){
        return (
          <div>
            <div className="often-customer">
              <h5>Частым покупателям</h5>
              <p>Войдите в личный кабинет для того, чтобы получить дополнительные баллы</p>
            </div>
            <input type="text" className="e-mail" placeholder="Эл. почта"/>
            <button id="sign-in">Войти</button>
            <div className="checkbox">
            <input type="checkbox" id="check"/><label htmlFor="check">  Даю согласие на обработку моих персональных данных</label>
</div>

          </div>
        );
    }
}
  /*  <button id="order">Перейти в "Мои заказы"</button> */

export default OftenCustomer;
