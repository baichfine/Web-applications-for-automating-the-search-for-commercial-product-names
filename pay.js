import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderIdetta from './HeaderIdetta.js'



 export class Pay extends React.Component {
    render(){
        return (

          <div className="orderApproval">
          <HeaderIdetta />
          <table>
          <tbody>
          <tr><td>Магазин</td>
          <td id='gray'>&#8594;</td>
          <td>Заказ</td>
          <td id='gray'>&#8594;</td>
          <td>Оформление заказа</td>
          <td id='gray'>&#8594;</td>
          <td>Способы оплаты</td>
          <td id='gray'>&#8594;</td>
          <td>Оплата</td>
          </tr>
          </tbody>

          </table>


          <h3>Ваш заказ принят!</h3>
          <p>Ожидайте СМС с подтверждением заказа. <br />
          Так же, на Вашу почту будет выслана квитанция в электронном виде. <br />
          Оплатите её, чтобы завершить оформление заказа.</p>
          <button id="order">Перейти в "Мои заказы"</button>
          </div>
        );
    }
}


export default Pay;
