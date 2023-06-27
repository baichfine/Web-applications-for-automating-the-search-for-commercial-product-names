import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchHeaderT from './SearchHeaderT.js';
import FilterButtons from './Filter_buttons.js';
import TitleWaySearch from './titleWaySearch.js';





 export class BrandSearching extends React.Component {
    render(){
        return (
          <div id="brandSearch">
        <div><SearchHeaderT /> </div>
        <TitleWaySearch />
    

          <div className="tableR">
<p><input name="beznal" type="radio" value="beznal" />Безналичный расчет юр. лицам</p>
          <table id="requisites">
          <tbody>
          <tr><td>ООО / ИП</td><td>Наименование</td></tr>
          <tr><td>Адрес юр. лица</td><td>Банк</td></tr>
          <tr><td>ИНН</td><td>БИК</td></tr>
          <tr><td>КПП</td><td>Расчетный счет</td></tr>
          <tr><td>ОГРН / ОГРНИП</td><td>Корс. счет</td></tr>
        </tbody>
          </table>
          <p>Даю согласие на обработку моих персональных данных</p>
          </div>
          </div>
        );
    }
}
  /*  <button id="order">Перейти в "Мои заказы"</button> */

export default BrandSearching;
