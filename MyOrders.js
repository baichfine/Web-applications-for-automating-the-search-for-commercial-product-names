import React from 'react'
/*import { render } from 'react-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';*/
import './index.css';
import update from 'immutability-helper';

export class MyOrders extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      deliveryChoice: [],
      deliveryPrice: [],
      payChoice: [],
      deliveryStop: true,
      payStop: true,
      dateOrderStop: true,
      getZakazDetails: true,
      getArrayZakazStop: true,
      table: [],
      table2: [],
      dateOrder: [],
      pay: false,
      deleteOrderArray: [],
    }
  }
checkStatus = (arr, e) => {
  for (var i = 0; i< arr.length; i++){
    if (e === arr[i].id){
      return arr[i].descr;
  }
  }
}
delivery = (obj, e) => {
  if (this.state.deliveryStop === true) {
  if (obj.delivery_type == 1){
    this.setState({
      deliveryChoice: update(this.state.deliveryChoice, {[e]:  {$set: 'Самовывоз из'}}),
      deliveryPrice: update(this.state.deliveryPrice, {[e]:  {$set: 0}}),
      deliveryStop: false
    })
    this.state.deliveryChoice[e] = 'Самовывоз из';
    this.state.deliveryPrice[e] = 0;
  }
  else{
  this.setState({
    deliveryChoice: update(this.state.deliveryChoice, {[e]:  {$set: 'Доставить курьером на'}}),
    deliveryPrice: update(this.state.deliveryPrice, {[e]:  {$set: 780}}),
    deliveryStop: false
  })
  this.state.deliveryChoice[e] = 'Доставить курьером на';
  this.state.deliveryPrice[e] = 780;
}
}
}
pay = (obj, e) => {
  if (this.state.payStop === true){
  if (obj.payment_type == 2){
    this.setState({
      payChoice: update(this.state.payChoice, {[e]:  {$set: 'Банковской картой'}}),
      payStop: false
    })
    this.state.payChoice[e] = 'Банковской картой';
  }
  else if (obj.payment_type == 3){
  this.setState({
    payChoice: update(this.state.payChoice, {[e]:  {$set: 'При получении заказа'}}),
    payStop: false
  })
  this.state.payChoice[e] = 'При получении заказа';
}}

}
date = (date, e) => {
  if (this.state.dateOrderStop === true){
  this.Date = date.create_date.substr(0,10).split("-");
  this.newDate = this.Date[2] + this.month(parseInt(this.Date[1],10)) + this.Date[0];
  this.setState({
    dateOrder: update(this.state.dateOrder, {[e]:  {$set: this.newDate}}),
    dateOrderStop: false
  })
  this.state.dateOrder[e] = this.newDate;
}

}
month = (e) => {

  switch (e) {
  case 1:
    this.months = ' января ';
    break;
  case 2:
    this.months = ' февраля ';
    break;
  case 3:
    this.months = ' марта ';
    break;
  case 4:
    this.months = ' апреля ';
    break;
  case 5:
    this.months = ' мая ';
    break;
  case 6:
    this.months = ' июня ';
    break;
  case 7:
    this.months = ' июля ';
    break;
  case 8:
    this.months = ' августа ';
    break;
  case 9:
    this.months = ' сентября ';
    break;
  case 10:
    this.months = ' октября ';
    break;
  case 11:
    this.months = ' ноября ';
    break;
  case 12:
    this.months = ' декабря ';
    break;
  default:
    break;
}
return this.months;
}
click = (e) => {
  if (this.props.updateDate === false){
  this.setState({
    dateOrderStop: true,
    deliveryStop: true,
    payStop: true,
  })
  this.state.dateOrderStop = true;
  this.state.deliveryStop = true;
  this.state.payStop = true;
  this.props.updateDates();
}
}
createDetails = (array, i) => {
  if (this.props.updateOrders === false){
  this.state.table[i] = array.map((obj,e)=> {
return(<tr key={obj.id}><td>{obj.brand} {obj.article} {obj.name}</td><td>{obj.count} шт</td><td> {Math.floor(obj.price * obj.count * 10) /10} <span className="rub">Р</span></td><td>{this.checkStatus(this.props.arrayZakazDetailStatus, obj.status)}</td></tr>)
  });
  this.props.updateOrder();
  return this.state.table[i];
}
return this.state.table[i];
}
createTable = (array) => {
  if (this.props.updateOrders === false){
    this.state.table2 = array.map((obj,e)=> {
      return (
      <div className="deliveryWindow">
      {(this.props.deleteOrderStop === true)?(this.deleteOrderArrayUpdate(e)):(null)}
      {(this.checkStatus(this.props.arrayZakazStatus, obj.status) == "Новый")?(<span id="orderCancel" onClick={()=>{this.deleteOrder(obj.id, e);}}><strong>Отменить заказ</strong></span>):(null)}
      <table className="numberOrder">
        <tbody>
        {this.date(obj, e)}
        <tr><td id ="numbertd"><span id ="dev">№{obj.id}&nbsp;</span>/ {this.checkStatus(this.props.arrayZakazStatus, obj.status)}</td><td> {this.state.dateOrder[e]}</td></tr>
        </tbody>
      </table>
        <table className="orderTable">
          <tbody>
          {this.createDetails(this.props.getZakazData[e]['zakaz_details'], e)}
          </tbody>
        </table>
        <div className ="payMethods1">
        <table className="deliveryTable">
          <tbody>
          {this.delivery(obj, e)}
          {this.pay(obj, e)}
            <tr><td><b>Способ доставки:</b> {this.state.deliveryChoice[e]} ул. Н. Ершова, 62 Г, кв 41</td><td>{this.state.deliveryPrice[e]}<span className="rub">Р</span> </td></tr>
            <tr><td><b>Способ оплаты:</b> {this.state.payChoice[e]} </td></tr>
          </tbody>
        </table>
        <table className="orderOplata">
          <tbody>
          {(this.checkStatus(this.props.arrayZakazStatus, obj.status) !== 'Оплачен')?(<tr><td><button id="buttonOrder">Оплатить</button></td><td>Итого: {Math.floor((parseFloat(obj.zakaz_sum, 10) + this.state.deliveryPrice[e])* 10) /10} <span className="rub">Р</span></td></tr>):(<tr><td></td><td>Итого: {Math.floor((parseFloat(obj.zakaz_sum, 10) + this.state.deliveryPrice[e])* 10) /10} <span className="rub">Р</span></td></tr>)}
          </tbody>
        </table>
        </div>
      </div>)
    });
    this.props.updateOrder();
    return this.state.table2;
  }
  return this.state.table2;
  }
deleteOrderArrayUpdate = (e) => {
  this.setState({
    deleteOrderArray: update(this.state.deleteOrderArray,{[e]:  {$set: false}}),
  })
  this.state.deleteOrderArray[e] = false;
  this.props.deleteOrderStopFunction(e);
}
deleteOrder = (obj, e) => {
  if (this.state.deleteOrderArray[e] === false)this.props.deleteOrder(obj);
  this.setState({
    deleteOrderArray: update(this.state.deleteOrderArray,{[e]:  {$set: true}}),
  })
}
  render() {
if(this.props.clickedMyOrders === true && typeof(this.props.myOrderData['zakazs']) !== 'undefined' && this.props.orderTrue === true) {
  return (
    <div className="dark_full">
      {this.click()}
      <div id="closeModalOrders" onClick={this.props.myOrdersChangeClose} >&#10006;</div>
      <div id="RightAvtorization">
        <h4>Мои заказы</h4>

        <table id='balans'><tbody><tr><td><button className="default_btn" id='getter'>Баланс</button></td><td><button className="default_btn">{this.props.arrayCompany.company_balance} руб</button></td>
        {(this.props.arrayCompany.company_balance < this.props.arrayCompany.company_rezerv)?(<td></td>):(null)}
        {(this.props.arrayCompany.company_balance < this.props.arrayCompany.company_rezerv)?(<td><button id='rezervPay'>Оплатить</button></td>):(null)}


        <td><button id='rezerv' className="default_btn">{this.props.arrayCompany.company_rezerv} руб</button></td><td><button className="default_btn" id='presense'>Зарезервировано под заказы</button></td></tr></tbody></table>

        <div className="myOrders">
          {this.createTable(Object.values(this.props.myOrderData['zakazs']))}
        </div>
      </div>
    </div>)
    }
else if (this.props.clickedMyOrders === true && this.props.myOrderData['zakazs'] =='') {
  return (
    <div className="dark_full">

      <div id="closeModalOrders" onClick={this.props.myOrdersChangeClose} >&#10006;</div>
      <div id="RightAvtorization">
      <h4>Мои заказы</h4>
      <p>У Вас еще нет заказов</p>

      <button id="goToCatalog"  onClick={this.props.myOrdersChangeClose} >Перейти в каталог</button>

      </div>
  </div>)

}
else return(null)
}
}
export default MyOrders;
