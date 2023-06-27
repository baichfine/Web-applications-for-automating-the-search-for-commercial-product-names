import React from 'react';
/*import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';*/
import './index.css';
import ModalControlled from './ModalWindow_avto_products.js';




class Head extends React.Component{


  render(){
  if(this.props.orderActiveWindow === false) {
    return (
        <div>
      <div className="Idetta">
      <p onClick={this.props.mainPage} id="your">Ваше<span id="logoH">Лого</span></p>
      </div>
      <ModalControlled orderActiveWindow={this.props.orderActiveWindow}/>
                  {(this.props.basketCount === 0)?(<div className ="basketNullRight"><button onClick={(e)=>{this.props.clickBasketButtonNull(e);}} id="basketNull"> <svg id="svgBasket" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                        <g fill="none" fillRule="evenodd">
                            <path stroke="#000" strokeWidth="2" d="M4 8h5.09l3.11 9h8.727L23 10.5h-3.5"/>
                            <circle cx="13.5" cy="21.5" r="1.5" fill="#000"/>
                            <circle cx="19.5" cy="21.5" r="1.5" fill="#000"/>
                        </g>
                    </svg> {this.props.basketCount}
</button></div>):(<button onClick={(e)=>{this.props.clickBasketButton(true);}} id="basket"><svg id="svgBasket" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
<g fill="none" fillRule="evenodd">
    <path stroke="#FFF" strokeWidth="2" d="M4 8h5.09l3.11 9h8.727L23 10.5h-3.5"/>
    <circle cx="13.5" cy="21.5" r="1.5" fill="#FFF"/>
    <circle cx="19.5" cy="21.5" r="1.5" fill="#FFF"/>
</g>
  </svg> {this.props.basketCount}
</button>)}
    </div>);
  }
  else {
    return(
      <div className="idettaOrders">
        <a onClick={this.props.mainPage}><p id="your">Ваше<span id="logoH">Лого</span></p></a>
        <hr />
      </div>
    );
  }
}
}

export default Head;
