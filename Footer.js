import React from 'react';
/*import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';*/
/*import './index.css';
import Search from './Search.js';
import { Switch, Route } from 'react-router-dom'; */

class Footer extends React.Component{
  render(){
    return (


        <div className="footer"><div id="footer">
          <div id="footer_menu">
          <div id="copyright"><a href="/">&copy; 2020 ВашСайт.ru</a></div>
            <ul>
                <li  onClick={this.props.aboutPage}> О нас</li>
              <li onClick={this.props.deliveryPage}>Доставка</li>
              <li onClick={this.props.paymentPage}>Оплата</li>
              <li onClick={this.props.warrantlyPage}>Возврат и гарантия</li>
              <li  onClick={this.props.offerPage}>Оферта</li>
            </ul>
            <div className="footer_right">8 800 000 00 00
            <button id = "call" >Заказать звонок</button></div>

          </div>
          </div>
          {/* <div class="Avtotovari" onClick="">
            <div class="Headtext">АВТОТОВАРЫ &#8897;</div>
          </div>
          <div class="Navigator" onClick="">
            <button id="Navigator"></button><div class="Headtext">&#10147; Казань</div>
          </div>
          <div class="Korzina" onClick="">
            <button id="Korzina"></button><div class="Headtext"><img src="https://img.icons8.com/android/24/000000/shopping-cart.png"></img>0</div>
          </div>
          <div class="Authorize" onClick="">
            <button id="Authoriz
            e"></button><div class="Headtext">Войти</div>
          </div> */}
      </div>
    );
  }
}



export default Footer;
