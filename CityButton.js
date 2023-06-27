import React, { Component } from 'react';
/*import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import './index.css';
import CityAnswer from './cityAnswer.js';*/


export default class HeaderCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityAnswer: false,
      choiceCity: "Выберите город",
  };

  }
cityAnswerUpdate = (e) => {
    this.setState ({
      cityAnswer: true
    })
  }
  openCity = (e) => {
    this.cityAnswerUpdate(e);
    this.props.handleOpen(e);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }
  UNSAFE_componentWillMount() {
    document.addEventListener('click', this.handleClickOutside, false);
  }
  handleClickOutside = (e) => {
    const cityModal = document.querySelector("#cityModalAnswer");
    const cityModalButton = document.querySelector("#buttonOrder2");
    const cityButton = document.querySelector("#cityClick");
    const city = document.querySelector(".modalw_lg");
    const searchButton = document.querySelector(".search_button");
    const moscow = document.querySelector("#moscow4");
    const spb = document.querySelector("#spb4");
    const kazan = document.querySelector("#kazan4");
/*alert(!e.path.includes(cityButton) + " " + !e.path.includes(searchButton)  + " " + !e.path.includes(city)  + " " + !e.path.includes(cityModal)  + " " + !e.path.includes(cityModalButton)  + " " + !e.path.includes(moscow)  + " " + !e.path.includes(spb)  + " " + !e.path.includes(kazan));*/

    if (typeof(e.path.includes(cityModalButton)) !== undefined && typeof(!e.path.includes(cityModal)) !== undefined){
      if (e.path.includes(cityModalButton)) this.openCity();
      if (!e.path.includes(cityModal)) this.cityAnswerUpdate(e);
      }
  //if (moscow !== undefined && spb !== undefined && kazan !== undefined ) {

      if (e.path.includes(moscow) === true) this.props.handleSubmit("Москва");
      if (e.path.includes(spb) === true)  this.props.handleSubmit("Санкт-Петербург");
      if (e.path.includes(kazan) === true)  this.props.handleSubmit("Казань");
  //  }
/*if (typeof(cityButton) !== undefined && typeof(searchButton) !== undefined && typeof(city) !== undefined && typeof(cityModal) !== undefined && typeof(cityModalButton) !== undefined) { */
    if (!e.path.includes(cityButton) && !e.path.includes(searchButton) && !e.path.includes(city) && !e.path.includes(cityModal) && !e.path.includes(cityModalButton)){
      this.props.getReference2();
    }
  // }
  }


    render() {
      if(this.props.orderActiveWindow === false) {
    return(
      <div className="buttonHeaderRight">
        <button id="cityClick" onClick={this.props.handleOpen}>{(typeof(this.props.selectedCity) === 'undefined')?(this.state.choiceCity):(this.props.selectedCity)}</button>
        {(typeof(this.props.selectedCity) === 'undefined' && this.state.cityAnswer === false) ?(<div id="cityModalAnswer">
        <table>
        <tr><td id ="answerCity"><strong><span>Ваш город - Москва?</span></strong><span  id ="cityAnswerClose" onClick={this.cityAnswerUpdate}>&#10006;</span></td></tr>
        <tr><td ><button id="buttonOrder2" onClick={this.handleClickOutside}>Нет, выбрать другой</button><button id="buttonCityYes" onClick={this.props.choiceMoscow}>Да</button></td></tr>
        </table>
        </div>):(null)}
      </div>
    )
  }

else if (this.props.cityOrder === true) {
  return ( <div className="orderCityButton">
    <button id="cityClick" onClick={this.props.handleOpen}>

    {(typeof(this.props.selectedCity) === 'undefined')?(this.state.choiceCity):(this.props.selectedCity)}</button>
  </div>)
}
else return (null)
}
}
