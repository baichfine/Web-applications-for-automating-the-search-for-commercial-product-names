import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import './index.css';

class TitleWaySearchCenter extends React.Component {

  render() {
    return (
      <div className="orderApproval">
        <table>
          <tbody>
            <tr>
              <td>Магазин</td>
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


        <h3>Оформление заказа</h3>
      </div>
    );
  }
}

export default TitleWaySearchCenter;
