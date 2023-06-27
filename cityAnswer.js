import React from 'react';
/*import Cookies from 'js-cookie';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';*/
import './fonts/fonts.css';
import './index.css';


class CityAnswer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div id="cityModalAnswer">
      <table>
      <tr><td id ="answerCity"><strong><span>Ваш город - Москва?</span></strong><span  id ="cityAnswerClose" onClick={this.props.cityAnswerUpdate}>&#10006;</span></td></tr>
      <tr><td><button onClick={this.props.openCity} id="buttonOrder2">Нет, выбрать другой</button><button id="moscow" abbr="Москва" onClick={this.props.choiceMoscow} id="buttonCityYes">Да</button></td></tr>
      </table>
      </div>
    );
  }
}

export default CityAnswer;
