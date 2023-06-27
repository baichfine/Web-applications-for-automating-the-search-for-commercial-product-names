import React, { Component } from 'react';
/*import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import Cookies from 'js-cookie';
import ReactDOM from 'react-dom';*/
import './index.css';
import update from 'immutability-helper';
import FilterButtons from './Filter_buttons.js';
import Sort1Confirm from './sort1Confirm.js';


export default class DataArray extends Component {
constructor(props){
  super(props);
  this.state = {
    offer: true,
    offers: [],
    showOffers: [false, false, false],
    catalog: true,
    arrayDataCatalog: {},
    searchRequest: '',
    selectedBrand: '',
    searchRequestLocal: '',
    newArrayFilter: [],
    concatArr: false,
    arrayDataCatalog2: [],
    inStockNames: [[" "," "," "],[" "," "," "],[" "," "," "]],
    inDeliveryNames: [[" "," "," "],[" "," "," "],[" "," "," "]],
    inStockNameStop: [false, false, false],
    newBrandFilters: false,
    arrayDataCatalog3: [],
    createTableStop: [false, false, false],
    table: [[],[],[]],
    filtersClick: [true, true, true, true],
    isCheckedBrands: [],
    clearBrandsStop: false,
    nullSearch: 'searchNull0',
    arrays: [],
    arraysStop: [false, false],
    bestPriceArray: [],
    productInStockArray: [],
    analogsArray: [],
    bestPriceStop: false,
    productInStockStop: false,
    sort1Show: false,
    basketSort1: [],
    showDialog: true,
    buttonsArrows: [[false, false, false],[false, false, false],[false, false, false]],
    numberArray: 0,
    numberProduct: 0,
    checkBasketStop: [false, false, false]
  }
  this.lengthOffer = [1, 3, 3];
  this.catalogTwo = true;
}

//Фильтры
getArrayCheck = (e) => {
  this.setState ({
    isCheckedBrands: e,
  })
  this.state.isCheckedBrands = e;
}
filterChange = (array, n) => {
  if (this.state.newArrayFilter !== 0 && n === 0) this.state.newArrayFilter = [];
  if (typeof(array) === 'object') {this.concatArray(); this.filterBrand(array);}
  else  this.state.newArrayFilter = this.state.arrayDataCatalog2;
  this.setState({
    filtersClick: update(this.state.filtersClick,{[n]:  {$set: !this.state.filtersClick[n]}}),
  })
  this.state.filtersClick[n] = !this.state.filtersClick[n];
  for (var i=0; i < this.state.filtersClick.length; i++){
    if (i !== n){
      this.setState({
        filtersClick: update(this.state.filtersClick,{[i]:  {$set: true}}),
      })
      this.state.filtersClick[i] = true;
    }
  }
  if (n === 1) this.state.newArrayFilter = this.otherFilters(this.state.newArrayFilter, n, this.sortByPrice);
  if (n === 2) this.state.newArrayFilter = this.otherFilters(this.state.newArrayFilter, n, this.sortByDeliveryTime);
  if (n === 3) this.state.newArrayFilter = this.otherFilters(this.state.newArrayFilter, n, this.sortByPresence);
this.setState({
  arrayDataCatalog2: this.state.newArrayFilter,
  newBrandFilters: true,
  arrays: [],
  bestPriceArray: [],
  productInStockArray: [],
  analogsArray: [],
})
this.statesUpdate();
this.state.arrayDataCatalog2 = this.state.newArrayFilter;
if (this.state.arrayDataCatalog2 === "") this.concatArray();
}
filterBrand = (array) => {
  for (var i= 0; i < array.length; i++){
var brands = this.state.arrayDataCatalog2.filter(word => word.brand === array[i]);
this.setState({
  newArrayFilter: this.state.newArrayFilter.concat(brands),
})
this.state.newArrayFilter = this.state.newArrayFilter.concat(brands);
}
this.state.newArrayFilter = this.otherFilters(this.state.newArrayFilter, 1, this.sortByPrice);
}
otherFilters = (arr, n, func) => {
  var temp= {};
  for(var i = 1; i < arr.length; ++i)
    {
      for(var j = 0; j <  arr.length-i; j++)
      {
        if(func(arr[j], arr[j+1], this.state.filtersClick[n]))
        {
          temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
  return arr;
}
sortByPrice = (arr1, arr2, click) => {
  if (parseInt(arr1.sale_price, 10) > parseInt(arr2.sale_price, 10)) return click;
  else return !click;
}
sortByDeliveryTime = (arr1, arr2, click) => {
  if ((arr1.time !== '0' || arr1.time !== 'В наличии') || (arr2.time !== '0' || arr2.time !== 'В наличии')) {this.arr1New =arr1.time.split(" "); this.arr2New =arr2.time.split(" ");}
  if ((arr1.time === '0' || arr1.time === 'В наличии') && (arr2.time !== '0' || arr2.time !== 'В наличии')) return click;
  else if (parseInt(this.arr1New[0], 10) < parseInt(this.arr2New[0], 10)) return click;
  else return !click;
}
sortByPresence = (arr1, arr2, click) => {
  if (arr1.count !== 'Под заказ' || arr2.count !== 'Под заказ') {
    this.i = 0;
    this.j = 0;
    this.arr1New = String(arr1.count).split(">");
    this.arr2New = String(arr2.count).split(">");
    if (String(arr1.count).indexOf(">=") !== -1) this.arr1New = String(arr1.count).split(">=");
    if (String(arr2.count).indexOf(">=") !== -1) this.arr2New = String(arr2.count).split(">=");
    if (String(arr1.count).indexOf("-") !== -1) this.arr1New = String(arr1.count).split("-");
    if (String(arr2.count).indexOf("-") !== -1) this.arr2New = String(arr2.count).split("-");
    if (this.arr1New[1] !== undefined) this.i = 1;
    if (this.arr2New[1] !== undefined) this.j = 1;
    if (this.arr1New[1] === "") this.i = 0;
    if (this.arr2New[1] === "") this.j = 0;
  }
  if (arr1.count !== 'Под заказ' && arr2.count === 'Под заказ') return click;
  else if (parseInt(this.arr1New[this.i], 10) < parseInt(this.arr2New[this.j], 10)) return click;
  else return !click;
}
brandClear = (e) => {
  this.concatArray();
  this.state.newArrayFilter = [];
  this.setState({
    newBrandFilters: true,
    showOffers: [false, false, false],
    clearBrandsStop: true,
    filtersClick: [true, true, true, true],
    arrays: [],
  })
  this.statesUpdate();
  this.state.filtersClick = [true, true, true, true];
  this.state.clearBrandsStop = true;
  this.str ='';
  this.getArrayCheck(this.str);
}
//Товары
createTable = (array, len, i) => {

if(this.state.createTableStop[i] === false){
  var j = 0;
  var min = len;
  var odin;
if(typeof(this.state.arrayDataCatalog) !=='undefined' && this.state.arrayDataCatalog !== 0) {
    this.state.table[i]=array.map((obj,n)=> {
      if (this.props.updateProduct[i] === true) this.updateProductsAfterDelete(obj,i);
      if (this.state.checkBasketStop[i] === false) this.checkbasket(obj);
      if(this.state.inStockNameStop[i] === false) {this.inStockName(obj.time, n, i); this.inDeliveryName(obj.count, n, i); this.buttonsArrow(obj.in_basket, n, i, array);}
      if(i !== 0 && i !== 1)
      if(obj.article === this.state.searchRequest.toUpperCase()){
          len = len + 1;
          j++; if (n === 0 || n === 1 || n === 2) {min++;} odin = n;
        }

      if (this.state.showOffers[i] === false) {
          if (n < min && n!== odin){
              return (<tr id="firstRows" key={n}><th>&#9632;</th><th >{obj.brand} {obj.article} {obj.name}</th><th title="Срок поставки">{this.state.inStockNames[i][n]}</th><th title="Количество"> {this.state.inDeliveryNames[i][n]}</th><th title="Цена">{obj.sale_price} <span >Р</span> </th>{(this.state.buttonsArrows[i][n] === false)?(<th> <button  onClick={(e)=>{this.sort1ClickBasket(obj, i, n);}}>
              {(this.props.sort1Load === false)?(<img src="https://sort1.ru/wp-content/uploads/2020/02/4183831-1.gif" alt="VIN" width="23%"/>):('В корзину')}
              </button></th>):(<th> <button>&#10003;</button></th>)}
              </tr>);
            }
      }
      else if (this.state.showOffers[i] === true) {
        if (n !== odin){
          return (<tr id="firstRows" key={n}><th>&#9632;</th><th >{obj.brand} {obj.article} {obj.name}</th><th title="Срок поставки">{this.state.inStockNames[i][n]}</th><th title="Количество"> {this.state.inDeliveryNames[i][n]}</th><th title="Цена">{obj.sale_price} <span >Р</span> </th>{(this.state.buttonsArrows[i][n] === false)?(<th> <button  onClick={(e)=>{this.sort1ClickBasket(obj, i, n);}}>  {(this.props.sort1Load === false)?(<img src="https://sort1.ru/wp-content/uploads/2020/02/4183831-1.gif" alt="VIN" width="23%"/>):('В корзину')}</button></th>):(<th> <button>&#10003;</button></th>)}
          </tr>);
          }
      }
      else return (null)
});
this.setState({
  arrays: update(this.state.arrays,{[i]:  {$set: array.length - len}}),
  createTableStop: update(this.state.createTableStop,{[i]:  {$set: true}}),
  checkBasketStop: update(this.state.checkBasketStop,{[i]:  {$set: true}}),
})
this.state.arrays[i] = array.length - len;
this.state.createTableStop[i] = true;
}
  return this.state.table[i];
}
return this.state.table[i];
}
bestPrice = (e) => {
  var j=0;
  var m=0;
  for (var i = 0; i < this.state.arrayDataCatalog2.length; i++) {
    if (this.state.arrayDataCatalog2[i].article === this.state.searchRequest.toUpperCase()) {
      this.setState({
        bestPriceArray: update(this.state.bestPriceArray,{[j]:  {$set: this.state.arrayDataCatalog2[i]}}),
        bestPriceStop: true,
      })
      this.state.bestPriceArray[j] = this.state.arrayDataCatalog2[i];
      j++;
    }
    else {
      this.setState({
        analogsArray: update(this.state.analogsArray,{[m]:  {$set: this.state.arrayDataCatalog2[i]}}),
        bestPriceStop: true,
      })
      this.state.analogsArray[m] = this.state.arrayDataCatalog2[i];
      m++;
    }
  }
}
productInStock = (e) => {
  var j=0;
  for (var i = 0; i < this.state.bestPriceArray.length; i++) {
    if (this.state.bestPriceArray[i].article === this.state.searchRequest.toUpperCase() && (String(this.state.bestPriceArray[i].time) === "0" || this.state.bestPriceArray[i].time === "В наличии")) {
      this.setState({
        productInStockArray: update(this.state.productInStockArray,{[j]:  {$set: this.state.bestPriceArray[i]}}),
        productInStockStop: true,
      })
      this.state.productInStockArray[j] = this.state.bestPriceArray[i];
      j++;
    }
  }
}
buttonsArrow = (in_basket, n, i, array) => {
  if (array.length === 1)  this.gg(n, i);
  if (in_basket === false) this.basket = false;
  else this.basket = true;
  this.setState({
    buttonsArrows: update(this.state.buttonsArrows,{[n]:  {$set: this.basket}}),
  })
    this.state.buttonsArrows[i][n] = this.basket;
}
checkbasket = (e) => {

  if (typeof(this.props.arrayBasket["basket_details"]) !== "undefined")
  Object.values(this.props.arrayBasket["basket_details"]).map((obj,n)=> {
    if (obj.name === e.name && obj.article === e.article && obj.brand === e.brand  && parseInt(obj.price, 10) === parseInt(e.sale_price, 10)) e.in_basket = true;
  });
}
updateProductsAfterDelete = (obj, i) => {
  obj.in_basket = false;
  this.props.updateProducts(i);
}
inDeliveryName = (count, e, i) => {
  if (count === "Под заказ") {
  this.setState({
    inDeliveryNames: update(this.state.inDeliveryNames,{[e]:  {$set: "Под заказ"}}),
  })
  this.state.inDeliveryNames[i][e] = "Под заказ";
}
  else {
  this.j =0;
  this.countNew = String(count).split(">");
  if (String(count).indexOf(">=") !== -1) this.countNew = String(count).split(">=");
  if (String(count).indexOf("-") !== -1) this.countNew = String(count).split("-");
  if (this.countNew[1] !== undefined) this.j = 1;
  if (this.countNew[1] === "") this.j = 0;
  this.setState({
    inDeliveryNames: update(this.state.inDeliveryNames,{[e]:  {$set: this.countNew[this.j] + " шт."}}),
  })
  this.state.inDeliveryNames[i][e] = this.countNew[this.j] + " шт.";
}
}
inStockName = (time,e, i) => {
  if (String(time) === "0" || time === "В наличии") {
  this.setState({
    inStockNames: update(this.state.inStockNames,{[e]:  {$set: "В наличии"}}),
    inStockNameStop: update(this.state.inStockNameStop, {[i]: {$set: true}})
  })
  this.state.inStockNames[i][e] = "В наличии";
}
  else {
  this.timeNew = String(time).split(" ");
  this.setState({
    inStockNames: update(this.state.inStockNames,{[e]:  {$set: this.timeNew[0]  + " дн."}}),
    inStockNameStop: update(this.state.inStockNameStop, {[i]: {$set: true}})
  })
  this.state.inStockNames[i][e] = this.timeNew[0]  + " дн.";
}
}
gg = (n, i) => {
  this.setState({
    buttonsArrows: update(this.state.buttonsArrows,{[i]:  {$set: [this.state.buttonsArrows[i], false]}}),
  })
   this.state.buttonsArrows[i] = [this.state.buttonsArrows[i], false];
}
//Еще столько-то предложений
showOffers = (e) =>{
  this.setState({
    createTableStop: update(this.state.createTableStop,{[e]:  {$set: false}}),
    showOffers: update(this.state.showOffers,{[e]:  {$set: !this.state.showOffers[e]}}),
  })
  this.state.createTableStop[e] = !this.state.createTableStop[e];
  this.state.showOffers[e] = !this.state.showOffers[e];
}
offerShow = (i) => {
  if (this.state.showOffers[i] === false && this.state.arrays[i] >= 1)
    return  (<tr id='lastRow'><th></th><th id="more" colSpan="5" text-align="right"><p id='products' onClick={(e)=>{this.showOffers(i);}}>еще {this.state.arrays[i]} {this.state.offers[i]}</p></th></tr>);
}
offerChange = (e) => {
  if(typeof(this.state.arrays[1]) === 'undefined' && this.state.arraysStop[0] === false){
    this.setState({
      arrays: update(this.state.arrays,{[i]:  {$set: this.state.arrays[2]}}),
      arraysStop: update(this.state.arraysStop,{[0]:  {$set: true}}),
    })
  }
  if(typeof(this.state.arrays[2]) === 'undefined' && this.state.arraysStop[1] === false){
    this.setState({
      arrays: update(this.state.arrays,{[i]:  {$set: this.state.arrays[1]}}),
      arraysStop: update(this.state.arraysStop,{[1]:  {$set: true}}),
    })
  }

if( this.state.offer === true){
  for (var i=0; i<3; i++)
  {
    if (this.state.arrays[i] < 100) this.arr = 10;
    else  this.arr2 = 100;
          if(this.state.arrays[i] % this.arr === 1 && (this.state.arrays[i] !== 11 || this.state.arrays[i] % this.arr2 !== 11))
          {
            this.setState({
              offers: update(this.state.offers,{[i]:  {$set: 'предложение'}}),
              offer: false
            })
            this.state.offers[i] = 'предложение';
          }
          else if ((this.state.arrays[i] % this.arr === 2 || this.state.arrays[i] % this.arr === 3 || this.state.arrays[i] % this.arr === 4) &&
          ((this.state.arrays[i] !== 12 || this.state.arrays[i] % this.arr2 !== 12) && (this.state.arrays[i] !== 13 || this.state.arrays[i] % this.arr2 !== 13) && (this.state.arrays[i] !== 14 || this.state.arrays[i] % this.arr2 !== 14)))
          {
            this.setState({
              offers: update(this.state.offers,{[i]:  {$set: 'предложения'}}),
              offer: false
            })
            this.state.offers[i] = 'предложения';
          }
          else
          {
            this.setState({
              offers: update(this.state.offers,{[i]:  {$set: 'предложений'}}),
              offer: false
            })
            this.state.offers[i] = 'предложений';
          }
  }
}
}
//Добавление товара в корзину
sort1ClickBasket = (obj, i, n) => {
 if (this.props.sort1Load === false && this.state.showDialog === true){
   this.setState({
     sort1Show: true,
     basketSort1: obj,
     numberArray: i,
     numberProduct: n
   })
 }
 else {
   this.setState({
     buttonsArrows: update(this.state.buttonsArrows,{[n]:  {$set: true}}),
   })
   this.statesUpdate();
   this.state.buttonsArrows[i][n] = true;
   obj.in_basket = true;
   this.props.clickBasket(obj);
 }
}
sort1ClickBasketClose = (e) => {
  this.setState({
    sort1Show: false
  })
}
clickSort1Basket = (e) => {
  this.setState({
    showDialog: false,
    buttonsArrows: update(this.state.buttonsArrows,{[this.state.numberProduct]:  {$set: true}}),
  })
  this.state.buttonsArrows[this.state.numberArray][this.state.numberProduct] = true;
  this.state.basketSort1.in_basket = true;
  this.statesUpdate();
  this.sort1ClickBasketClose(e);
  this.props.clickBasket(this.state.basketSort1);
}
//Обновление товаров
click = (e, search) => {
  if (typeof(this.state.arrayDataCatalog['sklad_details'])!=='undefined'){
  this.catalogTwo = false;
  }
  if((this.catalogTwo === true && this.state.catalog === true) || (this.state.arrayDataCatalog !== e)){
    this.setState({
      catalog: false,
      arrayDataCatalog: e,
      searchRequest: search,
      concatArr: false,
      newArrayFilter: [],
      arrayDataCatalog2: [],
      newBrandFilrers: false,
      isCheckedBrands: [],
      showOffers: [false, false, false],
      bestPriceArray: [],
      productInStockArray: [],
      analogsArray: [],
      arrays: [],
      checkBasketStop: [false, false, false],
    })
    this.statesUpdate();
    this.props.clickSort1(e);
  }
}
concatArray = (e) => {
  this.array = Object.values(this.state.arrayDataCatalog['price_details']).concat(Object.values(this.state.arrayDataCatalog['sklad_details']));
  if (this.props.arraySort1DataProba !== "") this.newArray = this.otherFilters(this.array.concat(this.props.arraySort1DataProba), 1, this.sortByPrice);
  else this.newArray = this.otherFilters(this.array, 1, this.sortByPrice);
  if (this.state.arrayDataCatalog2 == "" || this.props.updateSort1 === true){
    this.setState({
      arrayDataCatalog3:  this.newArray,
      concatArr: true,
    })
    this.statesUpdate(e);
    this.state.arrayDataCatalog3 = this.newArray;
    this.props.updateSort1Arrays(e);
  }
    this.setState({
      arrayDataCatalog2:  this.newArray,
      concatArr: true,
    })
    this.statesUpdate(e);
    this.state.arrayDataCatalog2 =  this.newArray;
    this.props.updateSort1Arrays(e);
}
statesUpdate = (e) => {
  this.setState({
    inStockNameStop: [false, false, false],
    offer: true,
    createTableStop: [false, false, false],
    bestPriceStop: false,
    productInStockStop: false,
    inStockNames: [[" "," "," "],[" "," "," "],[" "," "," "]],
    inDeliveryNames: [[" "," "," "],[" "," "," "],[" "," "," "]],
    buttonsArrows: [this.state.buttonsArrows[0],this.state.buttonsArrows[1],this.state.buttonsArrows[2]],
    checkBasketStop: [false, false, false],
  })
}
deliveryType = (arr, details) => {
  arr = arr.map((obj, e) => {
    if(details === 'price_list') {
      obj['deliverer_type'] = details;
      obj['deliverer'] = obj.price_list_name;
      obj['deliverer_id'] = obj.price_list_id;
      if (obj.in_basket !== true) obj['in_basket'] = false;
    }
    else if (details === 'sklad') {
      obj['deliverer_type'] = details;
      obj['deliverer'] = obj.sklad_name;
      obj['deliverer_id'] = obj.sklad_id;
      if (obj.in_basket !== true) obj['in_basket'] = false;
    }
    else {
      obj['deliverer_type'] = details;
      obj['deliverer'] = obj.pl_name;
      obj['deliverer_id'] = obj.plid;
      obj['sort1_id'] = obj.id;
      if (obj.in_basket !== true) obj['in_basket'] = false;
    };
  });
  return (arr);
}
//Пустой поиск
searchNull = (e) => {

return (<div>{(this.props.arrayDataProba['brands'] !== 0)?(<div className="searchNull"><h3>Идет загрузка...</h3></div>):(<div className="searchNull"><h3>Товар не найден...</h3><br/><p>Попробуйте проверить введенный Вами код,<br/>если не нашли ошибок, то скорее всего<br/>такого товара на нашем сайте нет...</p></div>)}</div>);
}


render(){
return (
<div id="brandSearch">
{((this.props.arrayDataProba['brands'] !== 0 && typeof(this.props.arrayDataProba['price_details']) !=='undefined' && typeof(this.props.arrayDataProba['sklad_details'])!=='undefined') || (this.props.searchRequest === this.state.searchRequest && this.props.searchRequest !== ""))?(<div>
{(typeof(this.props.arrayDataProba['price_details'])!=='undefined' && this.props.searchRequest !== 0) ? (this.click(this.props.arrayDataProba, this.props.searchRequest)): (null)}
{((typeof(this.state.arrayDataCatalog['price_details'])!=='undefined' && typeof(this.state.arrayDataCatalog['sklad_details'])!=='undefined'))?(<div>
  {this.deliveryType(Object.values(this.state.arrayDataCatalog['price_details']), 'price_list')}
  {this.deliveryType(Object.values(this.state.arrayDataCatalog['sklad_details']), 'sklad')}
  {(this.props.arraySort1DataProba !== "")?(this.deliveryType(this.props.arraySort1DataProba, 'sort1')):(null)}
    <h3 id="searchRequest">{this.state.searchRequest}</h3>
    {(this.state.concatArr === false || this.props.updateSort1 === true)?(this.concatArray()):(null)}
    {(this.state.sort1Show === true)?(<Sort1Confirm clickSort1Basket={this.clickSort1Basket} sort1ClickBasketClose={this.sort1ClickBasketClose}/>):(null)}
    <FilterButtons sort1Load={this.props.sort1Load} clearBrandsStop={this.state.clearBrandsStop} brandClear={this.brandClear} isCheckedBrands={this.state.isCheckedBrands} getArrayCheck={this.getArrayCheck} filterChange={this.filterChange} arrayDataCatalog = {this.state.arrayDataCatalog3}/>

  {(this.state.bestPriceStop === false)?(this.bestPrice()):(null)}
  {(this.state.bestPriceArray != 0 )?(<div className="InStock">
    <table id="bestPrice"  border="1" cellSpacing="0" cellPadding="4">
      <tbody>
      {(this.state.showOffers[0] === true)?(<tr id="colorCaption"><td border="1" id='rowCaption' colspan="5">ЛУЧШАЯ ЦЕНА</td><td id='rowCaptionClose' onClick={(e)=>{this.showOffers(0);}}>скрыть<span id="moreArrow">&nbsp; &#10095;</span></td></tr> ):(<tr><td border="1" id='rowCaption' colspan="5">ЛУЧШАЯ ЦЕНА</td><td id='rowCaptionClose'></td></tr>)}

        {this.createTable(this.state.bestPriceArray,this.lengthOffer[0], 0)}
        {(this.state.showOffers[0] === false)?(this.offerShow(0)):(this.offerShow(0))}
      </tbody>
    </table>
  </div>):(null)}

  {(this.state.productInStockStop === false)?(this.productInStock()):(null)}
    {(this.state.productInStockArray != 0 )?(<div className="InStock">
       <table id="bestPrice"  border="1" cellSpacing="0" cellPadding="4">
         <tbody>
             {(this.state.showOffers[1] === true)?(<tr><td border="1" id='rowCaption' colspan="5">ТОВАР В НАЛИЧИИ</td><td id='rowCaptionClose' onClick={(e)=>{this.showOffers(1);}}>скрыть<span id="moreArrow">&nbsp; &#10095;</span></td></tr> ):(<tr><td border="1" id='rowCaption' colspan="5">ТОВАР В НАЛИЧИИ</td><td id='rowCaptionClose'></td></tr>)}
           {this.createTable(this.state.productInStockArray,this.lengthOffer[1], 1)}
           {(this.state.showOffers[1] === false)?(this.offerShow(1)):(this.offerShow(1))}
         </tbody>
       </table>
    </div>):(null)}

{(this.state.analogsArray != 0 )?(<div className="Analogs">
   <table id="bestPrice"  border="1" cellSpacing="0" cellPadding="4">
     <tbody>
         {(this.state.showOffers[2] === true)?(<tr><td border="1" id='rowCaption' colspan="5">АНАЛОГИ</td><td id='rowCaptionClose' onClick={(e)=>{this.showOffers(2);}}>скрыть<span id="moreArrow">&nbsp; &#10095;</span></td></tr> ):(<tr><td border="1" id='rowCaption' colspan="5">АНАЛОГИ</td><td id='rowCaptionClose'></td></tr>)}

       {this.createTable(this.state.analogsArray,this.lengthOffer[2], 2)}
       {(this.state.showOffers[2] === false)?(this.offerShow(2)):(this.offerShow(2))}
     </tbody>
   </table>
</div>):(null)}
{this.offerChange()}

</div>):(null)}</div>):(this.searchNull())
}
</div>
    );
  }
}
