import React, { Component } from 'react';

/*import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';*/
import './index.css';
import CityHeader from './cityHeader.js';
/*import PayMethods from './payMethods.js';*/
import PayReceipt from './payReceipt.js';

export default class OrderCheckOut extends Component {
constructor(props){
  super(props);
  this.state = {
    courier: true,
    selectedOption: true,
    priceDelivery: 780,
    selectDelivery: true,
    lastPrice: 0,
    payReceipt: false,
    orderGet: "Доставить курьером по",
    isChecked: true,
    name: "",
    email: "",
    mobile: "",
    address: "",
    index: "",
    comment: "",
    dataOrder: true,
    value: this.props.addressSelect
  }
  this.handleChange = this.handleChange.bind(this);
}
saveOrder = (e) => {
  this.props.saveOrder(e);
}
mainPage = (e) => {
  this.props.paymentMethodsChange(0);
  this.props.mainPage(e);
}
paymentMethodsChange = (e) => {
  this.props.paymentMethodsChange(e);
}
myOrderDelivery = (e)=> {
  this.props.myOrderDelivery(e);
}
payReceiptChange = (e) => {
  if (this.state.payReceipt === false)
  this.setState({
    payReceipt: true
  })
}
totalGoods = (e) => {
  this.total = 0;
  for (var i=0; i< e.length; i++)
  this.total += Math.floor(e[i].price * e[i].count * 10) /10;
  return this.total;
}
createTable = (array) => {
  let table = [];
  table = array.map((obj,e)=> {
return(<tr key={obj.name}><td>{obj.brand} {obj.article} {obj.name}</td><td>{obj.count} шт</td><td> {Math.floor(obj.price * obj.count * 10) /10} <span className="rub">Р</span></td></tr>)
  });
  return table;
}

createListSklads = (array) => {
let list = [];
list = Object.values(array).map((obj, e) => {
return(
    <option key={e} value={obj.address}>
      {obj.address}
    </option>)
});
return list;
}
createListAddresess = (array) => {
  let list = [];

  list =array.map((obj, e) => {
  return(

      <option key={e} value={obj.delivery_address}>
        {obj.delivery_address}
      </option>)
  });
  return list;
}

handleChange(event) {
   this.setState({value: event.target.value});
   this.props.changeAddress(event.target.value);
 }
userDataLoad = (e) => {
  if (this.state.dataOrder === true){
  if(typeof(this.props.userDataList['user'][0]['email']) != 'undefined') {
  this.setState({
    email: this.props.userDataList['user'][0]['email']
  })}
  if(typeof(this.props.userDataList['user'][0]['name']) != 'undefined' && typeof(this.props.userDataList['user'][0]['lastname']) != 'undefined') {
  this.setState({
    name: this.props.userDataList['user'][0]['name']+" "+this.props.userDataList['user'][0]['lastname']
  }) }
  else if (typeof(this.props.userDataList['user'][0]['name']) != 'undefined') {
    this.setState({
      name: this.props.userDataList['user'][0]['name']
    })
  }
  else {
    this.setState({
      name: this.props.userDataList['user'][0]['lastname']
    })
  }
  if(typeof(this.props.userDataList['user'][0]['mphone']) != 'undefined') {
  this.setState({
    mobile: this.props.userDataList['user'][0]['mphone']
  })}
  if (this.props.arrayCompany != ''){
    this.setState({
      address: this.props.arrayCompany['delivery_addresses'][0].delivery_address
    })
  }
  this.setState({
    dataOrder: false
  })
}
}
userDataChangeEmail =(e) => {
 this.setState({email: e.target.value});
}
userDataChangeName =(e) => {
 this.setState({name: e.target.value});
}
userDataChangeMobile =(e) => {
 this.setState({mobile: e.target.value});
}
userDataChangeAddress =(e) => {
 this.setState({address: e.target.value});
}
userDataChangeIndex =(e) => {
 this.setState({index: e.target.value});
}
userDataChangeComment =(e) => {
 this.setState({comment: e.target.value});
}
showDelivery = (e) => {
  if(this.state.courier === true) {
  return(
  <table className="orderData">
  {this.userDataLoad()}
    <tbody>
      <tr>
      <td>{(this.state.name!= 0)?(<span id="comment">Имя и фамилия</span>):(null)}<input type="text" onChange={this.userDataChangeName} placeholder="Имя и фамилия" value={this.state.name}/></td>
      <td>{(this.state.email!= 0)?(<span id="comment">Эл. почта</span>):(null)}<input type="text" onChange={this.userDataChangeEmail} placeholder="Эл. почта" value={this.state.email}/></td>
      <td>{(this.state.mobile!= 0)?(<span id="comment">Моб. телефон</span>):(null)}<input type="text" onChange={this.userDataChangeMobile} placeholder="Моб. телефон" value={this.state.mobile}/></td></tr>
      <tr>
      <td>{(this.state.index!= 0)?(<span id="comment">Индекс</span>):(null)}<input type="text" onChange={this.userDataChangeIndex} placeholder="Индекс" value={this.state.index}/></td>
      <td colspan="2">{(this.state.address!= 0)?(<span id="comment">Адрес</span>):(null)}<input type="text" onChange={this.userDataChangeAddress} placeholder="Адрес" value={this.state.address}/></td>
      </tr>
      <tr>
      <td colspan="3">{(this.state.comment!= 0)?(<span id="comment">Комментарий</span>):(null)}<input type="text" onChange={this.userDataChangeComment} placeholder="Комментарий" value={this.state.comment}/></td>
      </tr>
    </tbody>
  </table>)
  }
  else
  return (
  <table className="orderData">
  {this.userDataLoad()}
    <tbody>
    <tr>
    <td>{(this.state.name!= 0)?(<span id="comment">Имя и фамилия</span>):(null)}<input type="text" onChange={this.userDataChangeName} placeholder="Имя и фамилия" value={this.state.name}/></td>
    <td>{(this.state.email!= 0)?(<span id="comment">Эл. почта</span>):(null)}<input type="text" onChange={this.userDataChangeEmail} placeholder="Эл. почта" value={this.state.email}/></td>
    <td>{(this.state.mobile!= 0)?(<span id="comment">Моб. телефон</span>):(null)}<input type="text" onChange={this.userDataChangeMobile} placeholder="Моб. телефон" value={this.state.mobile}/></td></tr>
    </tbody>
  </table>)
}
selectDelivery = (e) => {
  if (this.state.priceDelivery === 0) {
    e = 780; this.delivery = "Доставить курьером по";}
  else {
    e = 0; this.delivery = "Самовывоз из";}
  this.setState({
    courier: !this.state.courier,
    selectedOption: !this.state.selectedOption,
    priceDelivery: e,
    selectDelivery: !this.state.selectDelivery,
    orderGet: this.delivery
  })
}
nullCity = (e) => {
  this.props.nullCity();
}
citySearchChange = (e) => {
  this.props.citySearchChange(e);
}
updateCity = (e) => {
  this.props.updateCity(e);
}
render(){

if (this.props.paymentMethods === false) {
  return (
    <div>
    {(this.props.userData === false) ?(this.props.userDataInfo()):(null)}
    {(typeof(this.props.userDataList['user']) != 'undefined')?(
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
    <td id="orderApprovalLast" onClick={(e)=>{this.props.paymentMethodsChange(1);}}>Оплата</td>
    </tr>
    </tbody>
    </table>
    </div>
      <h3>Оформление заказа</h3>
      <CityHeader   cityAnswerModalClose={this.props.cityAnswerModalClose} cityAnswerModal={this.props.cityAnswerModal} nullCity={this.nullCity} cityArray={this.props.cityArray} citySearchChange={this.citySearchChange} cityInput={this.props.cityInput} orderActiveWindow={this.props.orderActiveWindow}  updateCity={this.updateCity} selectedCity={this.props.selectedCity} cityOrder={this.props.cityOrder}/>

      <div className="orderWindow">
        <table className="orderTable">
          <tbody>
            {this.createTable(this.props.saveArrayBasket)}
          </tbody>
        </table>
      </div>


      <div className="deliveryWindow">
        <table className="deliveryTable">
          <tbody>

            <tr><td><label><input type="radio" name="radio" hidden checked={this.state.selectedOption === true} onClick={this.selectDelivery}/><span></span> Доставить курьером &nbsp;&nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="19" height="11" viewBox="0 0 19 11">
                <g fill="#000" fillRule="nonzero">
                    <path d="M18.736 5.238l-1.625-2.446a1.587 1.587 0 0 0-1.315-.697h-2.602c-.18.002-.358.034-.527.095V1.57c0-.867-.71-1.571-1.584-1.571H.528A.526.526 0 0 0 0 .524c0 .29.236.524.528.524h10.555c.292 0 .528.234.528.523v6.81h-.607a2.109 2.109 0 0 0-2.037-1.546c-.953 0-1.787.633-2.037 1.546H6.86a.526.526 0 0 1-.528-.524V6.81a.526.526 0 0 0-.527-.524.526.526 0 0 0-.528.524v1.047c0 .868.709 1.572 1.583 1.572h.074a2.109 2.109 0 0 0 2.037 1.545c.953 0 1.788-.633 2.037-1.545h2.26a2.109 2.109 0 0 0 2.037 1.545c.952 0 1.787-.633 2.037-1.545h.074c.874 0 1.583-.704 1.583-1.572V6.081a1.563 1.563 0 0 0-.264-.843zM8.972 9.952a1.052 1.052 0 0 1-1.055-1.047c0-.579.472-1.048 1.055-1.048s1.056.47 1.056 1.048c0 .578-.473 1.047-1.056 1.047zm6.334 0a1.052 1.052 0 0 1-1.056-1.047c0-.579.473-1.048 1.056-1.048.583 0 1.055.47 1.055 1.048 0 .578-.472 1.047-1.055 1.047zm2.638-2.095c0 .29-.236.524-.527.524h-.08A2.109 2.109 0 0 0 15.3 6.835c-.952 0-1.787.633-2.037 1.546h-.596V3.667c0-.29.236-.524.527-.524h2.602c.176 0 .34.086.438.23l1.626 2.42a.521.521 0 0 1 .09.283l-.006 1.781z"/>
                    <path d="M8.444 2.619a.526.526 0 0 0-.527-.524H2.11a.526.526 0 0 0-.528.524c0 .29.237.524.528.524h5.806a.526.526 0 0 0 .527-.524zM8.444 4.714a.526.526 0 0 0-.527-.524H3.694a.526.526 0 0 0-.527.524c0 .29.236.524.527.524h4.223a.526.526 0 0 0 .527-.524z"/>
                </g></svg> &nbsp;&nbsp; 1-2 дня</label></td><td>{this.state.priceDelivery} <span className="rub">Р</span></td></tr>
            <tr><td><label><input type="radio"  name="radio" hidden checked={this.state.selectedOption === false} onClick={this.selectDelivery}/><span></span> Заберу сам</label></td></tr>
          </tbody>
        </table>
        {(this.state.selectedOption === false)?(<p id = "pointOf">  <select value={this.props.addressSelect} onChange={this.handleChange} id="listOKOPF">{this.createListSklads(this.props.arraySkladDeliveries['sklads'])}</select></p>):(<p id = "pointOf">  <select value={this.props.arrayCompany.address} onChange={this.handleChange} id="listOKOPF">{this.createListAddresess(this.props.arrayCompany['delivery_addresses'])}</select></p>)}
        {this.showDelivery()}
        <div className="checkbox">
          <input type="checkbox" id="check"  checked={this.state.isChecked} /><label htmlFor="check">  Даю согласие на обработку моих персональных данных</label>
        </div>
      </div>
      <div className="orderButton">
        <h3>Итого: {Math.floor((this.totalGoods(this.props.saveArrayBasket) + this.state.priceDelivery) * 10)/10} <span className="rub">Р</span></h3>
        <button id="sign-in-modal" onClick={(e)=>{this.props.paymentMethodsChange(1);}}>Способы оплаты &#8594;</button>
      </div>
    </div>):(null)}
  </div>)
}
else if (this.props.paymentMethods === true) {
  return (
    <PayReceipt value={this.state.value} basketUpdateAfterOrder={this.props.basketUpdateAfterOrder} paymentMethodsChange={this.paymentMethodsChange} zakazBack={this.zakazBack} saveOrder={this.saveOrder} myOrderDelivery={this.myOrderDelivery} mainPage={this.mainPage} orderGet={this.state.orderGet} priceDelivery={this.state.priceDelivery} saveArrayBasket = {this.props.saveArrayBasket} payReceipt = {this.state.payReceipt} lastPrice = {Math.floor((this.totalGoods(this.props.saveArrayBasket) + this.state.priceDelivery) * 10)/10}/>)
}
}
}
