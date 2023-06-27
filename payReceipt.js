import React from 'react';
/*import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';

import HeaderIdetta from './HeaderIdetta.js'
import MyOrders from './MyOrders.js'; */
import './index.css';

export class PayReceipt extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      confirmOrder: false,
      selectedPay: true,
      dataOrder: [{}],
      cart: "",
      data: "",
      cvc: "",
    }
  }

  mainPage = (e) => {
    this.props.mainPage(e);

  }
  createTable = (array) => {

    let table = [];
    table = array.map((obj,e)=> {
  return(<tr key={obj.name}><td>{obj.brand} {obj.article} {obj.name}</td><td>{obj.count} шт</td><td> {Math.floor(obj.price * obj.count * 10) /10} <span className="rub">Р</span></td></tr>)
    });
    return table;
  }



  confirmOrder = (e) => {
    this.setState({
      dataOrder: [{details: this.props.saveArrayBasket, delivery_type: this.props.priceDelivery, payment_type: this.state.selectedPay}],
    })
    this.state.dataOrder = [{details: this.props.saveArrayBasket, delivery_type: this.props.priceDelivery, payment_type: this.state.selectedPay}];
    this.state.array = Object.values(this.state.dataOrder).map((obj, e) => {
      if(obj['delivery_type'] == 0)  obj.delivery_type = 1;
      else  obj.delivery_type = 2;
      if(obj['payment_type'] == true)  obj.payment_type = 2;
      else if (obj.payment_type == false)   obj.payment_type = 3;
    });
    this.setState ({
      dataOrder: this.array
    })
    this.props.saveOrder(this.state.dataOrder[0]);
    this.setState ({
      confirmOrder: true
    })
    this.props.basketUpdateAfterOrder();
  }
  selectPay = (e) => {

    this.setState ({
      selectedPay: !this.state.selectedPay
    })
  }
  userDataChangeCart =(e) => {
   this.setState({cart: e.target.value});
  }
  userDataChangeData =(e) => {
   this.setState({data: e.target.value});
  }
  userDataChangeCVC =(e) => {
   this.setState({cvc: e.target.value});
  }
    render(){
      if (this.state.confirmOrder === false){
        return (
          <div className="makeOrder">
          <div className="orderApproval">
          <table>
          <tbody>
          <tr><td onClick={this.mainPage}>Магазин</td>
          <td id='gray'>&#8594;</td>
          <td onClick={this.props.zakazBack}>Заказ</td>
          <td id='gray'>&#8594;</td>
          <td onClick={(e)=>{this.props.paymentMethodsChange(0);}}>Оформление заказа</td>
          <td id='gray'>&#8594;</td>
          <td onClick={(e)=>{this.props.paymentMethodsChange(1);}}>Оплата</td>
          </tr>
          </tbody>
          </table>
          </div>
            <h3>Оплата заказа № 1082026</h3>
            <div className="deliveryWindow">
            <table className="orderTable">
              <tbody>
                {this.createTable(this.props.saveArrayBasket)}
              </tbody>
            </table>
            <div className ="payMethods1">
            <table className="deliveryTable">
              <tbody>
                <tr><td><b>Способ доставки:</b> {this.props.orderGet} <b>{this.props.value}</b></td><td>{this.props.priceDelivery}<span className="rub">Р</span> </td></tr>
                <tr><td><b>Способ оплаты:</b></td></tr>
                <tr><td><label><input type="radio" name="radio" hidden checked={this.state.selectedPay === true} onClick={this.selectPay}/><span></span> На сайте банковскими картами</label></td><td>{this.state.priceDelivery}</td></tr>
                <tr><td><label><input type="radio"  name="radio" hidden checked={this.state.selectedPay === false} onClick={this.selectPay}/><span></span> При получении заказа (картой или наличными)</label></td></tr>
              </tbody></table>
            </div>
            {(this.state.selectedPay === true)?(<div>
              <table className="orderData"><tbody>
                <tr>
                <td>{(this.state.cart!= 0)?(<span id="comment">№ карты</span>):(null)}<input type="text" onChange={this.userDataChangeCart} placeholder="№ карты" value={this.state.cart}/></td>
                <td>{(this.state.data!= 0)?(<span id="comment">Срок действия</span>):(null)}<input type="text" onChange={this.userDataChangeData} placeholder="Срок действия" value={this.state.data}/></td>
                <td>{(this.state.cvc!= 0)?(<span id="comment">CVC/CVV</span>):(null)}<input type="text" onChange={this.userDataChangeCVC} placeholder="CVC/CVV" value={this.state.cvc}/></td></tr>
              </tbody></table>  <div className="orderButton">
                  <h3>Итого: {this.props.lastPrice} <span className="rub">Р</span></h3>
                  <button id="sign-in-modal" onClick={(e)=>{this.confirmOrder(e);}}>Оплатить</button>
                  <p className = "pay">Оплатите, чтобы завершить оформление заказа.</p>
                  <p className = "pay">Для отмены или изменения заказа звоните по тел. 8 800 200 90 70</p>
                </div></div>):(  <div className="orderButton">
                    <h3>Итого: {this.props.lastPrice} <span className="rub">Р</span></h3>
                    <button id="sign-in-modal" onClick={(e)=>{this.confirmOrder(e);}}>Завершить заказ</button>
                    <p className = "pay">Для отмены или изменения заказа звоните по тел. 8 800 200 90 70</p>
                  </div>)}
            </div>

          </div>)
      }
      else{
        if (this.state.selectedPay === true) return(
          <div className="makeOrder">
          <p className = "pay1"align="justify">После оплаты по карте открывается страница банка для подтверждения оплаты по смс коду.</p>
          <div className="orderButton">
          <button id="sign-in-modal" onClick={(e)=>{this.mainPage(e);}}>Вернуться в магазин</button>
          </div>
          </div>
        )
        else if (this.state.selectedPay === false) return(
        <div className="makeOrder">
        <h3>Ваш заказ принят!</h3>
        <p className = "pay1"align="justify">Ожидайте смс с подтверждением заказа.</p>
        <div className="orderButton">
        <button id="sign-in-modal" onClick={(e)=>{this.mainPage(e);}}>Вернуться в магазин</button>
        </div>
        <p></p>
        <p className = "pay" id="newPay">Для отмены или изменения заказа звоните по тел. 8 800 200 90 70</p>
        </div>)
      }
    }
}

export default PayReceipt;
