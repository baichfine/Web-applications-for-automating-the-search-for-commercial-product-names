import React, { Component } from 'react'
/*import { Button, Header, Icon, Modal } from 'semantic-ui-react'*/
import './index.css';
import update from 'immutability-helper';

export default class BasketModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: [],
      count: true,
      arrayBasketNew: {}
    }
}
saveBasket = (obj) => {
  for(var i = 0; i < obj.length; i++){
    obj[i].count = this.state.counter[i];
  }
  this.props.saveBasket(obj);
  }
click = (e) => {
  if(this.props.basketTwo === true){
    this.setState({
        arrayBasketNew: e
    })
    this.state.arrayBasketNew = e;
    this.props.basketTwoFunction();
  }
}
countDelete = (e) => {
    this.setState({
        arrayBasketNew: update(this.state.arrayBasketNew, {$splice: [[e, 1]]})
    })
    this.props.deleteBasketCount(this.state.arrayBasketNew[e],e);

    if (this.props.basketCount - 1 === 0 ){
        this.props.closeBasket();
    }
}
countPlus  = (count, e, znak, obj) => {
 if (znak === 1){

  if (parseInt(count, 10) <= parseInt(obj, 10)-1) {

    this.setState({
      counter: update(this.state.counter, {[e]:  {$set: parseInt(count, 10) + znak}})
    })
    this.state.counter[e] = parseInt(count, 10) + 1;
  }
}
if (znak === -1 && (this.state.counter[e]+ znak) > 0) {
  this.setState({
    counter: update(this.state.counter, {[e]:  {$set: parseInt(count, 10) + znak}})
  })
  this.state.counter[e] = parseInt(count, 10) + 1;
}
}
countSet = (obj, e) => {
    this.setState({
      counter: update(this.state.counter, {[e]:  {$set: obj}}),
      count: false
    })
    this.state.counter[e] = obj;
  }
createTable = (e) => {
    let table = []
      table=this.state.arrayBasketNew.map((obj,e)=> {

        return (
          <div key={obj.name}>
        {(this.state.count === true)?(this.countSet(obj.count, e)):(null)}
        <h2 key={obj.name}>{obj.brand} {obj.article} {obj.name}</h2>
        <div className='priceCount' id="priceDetail"><p><b>{Math.floor(obj.price * this.state.counter[e] * 10) / 10}&nbsp;<span className="rub">Р</span></b></p></div>
        <div className='priceCount' id='null'><p></p></div>
        <div className='priceCount' id='countBasket' onClick={()=>{this.countPlus(this.state.counter[e], e, -1, obj.max_count);}}><p><b>-</b></p></div>
        <div className='priceCount' id='countBasket' id='more10'> <p> {this.state.counter[e]}</p></div>
        <div className='priceCount' id='countBasket' onClick={()=>{this.countPlus(this.state.counter[e], e, 1, obj.max_count);}}><p><b>+</b></p></div>
        <div className='priceCount' id="null" id='x' onClick={()=>{this.countDelete(e);}}><p>&#10006;</p></div></div>)
      });
    return table;
  }

  render() {

    return (
    <div id="basketModal">
    {(typeof(this.props.arrayBasket['basket_details']) !=='undefined' && this.props.arrayBasket['basket_details'] !== 0 ) ? (<div>
    {this.click(Object.values(this.props.arrayBasket['basket_details']))}
    <div className="basketHeader">{this.createTable()}</div>
    <div className="basketFooter"><p id="curer" id="columnOne">Доставка курьером при заказе на сумму от 2 000 руб.</p><p title="Очистить корзину" id="columnTwo" onClick={(e)=>{this.props.basketDelete(this.props.arrayBasket);}}><svg id="svgBasketClear"  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">

	<g>
		<path d="M4 8h5.09l3.11 9h8.727L23 10.5h-3.5"/>
		<circle cx="13.5" cy="21.5" r="1.5" fill="#000"/>
		<circle cx="19.5" cy="21.5" r="1.5" fill="#000"/>
	</g>
	<path id='x' d='m 5 5, l 20,20 m 0,-20 l -20,20'/>
</svg></p>
    <button id="sign-in-modal" onClick={(e)=>{this.saveBasket(this.state.arrayBasketNew);}}>Оформить заказ</button> </div></div>) : (null)}
    </div>
  )
}
}
