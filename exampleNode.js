import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchHeader from './SearchHeader.js';
import FilterButtons from './Filter_buttons.js';
import TitleWaySearch from './titleWaySearch.js';
import TheBestPrice from './theBestPrice.js';
import InStock from './inStock.js';
import Analogs from './analogs.js';




 export class NodeExample extends React.Component {
    render(){
        return (
          <div id="nodeExample">
        <div><SearchHeader /> </div>
        <TitleWaySearch />
        <div id="allNode">
        <div id="nodeLi">
        <ol>
          <li>Облицовка бампера</li>
          <li>Решетка радиатора</li>
          <li>Решетка радиатора</li>
          <li>Колпачок</li>
          <li>Крышка противотуманной фары</li>
          <li>Колпачок</li>
          <li>Декоративная накладка</li>
          <li>Направляющий профиль</li>
          <li>Замыкающая панель</li>
          <li>Накладка</li>
          <li>Кронштейн зуммера</li>
          <li>Винт самонарез. с внутр. TORX</li>
          <li>Винт со скр.цил.гол.,внут.TORX</li>
          <li>Накладка</li>
          <li>Надпись</li>
          <li>1 к-т элементов крепления</li>
          <li>Крепёжная плита</li>
          <li>Гайка, вставная</li>
          </ol>
          </div>
          <div id="imageLi">  здесь будет картинка</div>

        </div>



          </div>
        );
    }
}
  /*  <button id="order">Перейти в "Мои заказы"</button> */

export default NodeExample;
