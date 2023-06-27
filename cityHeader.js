
import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderCity from './CityButton.js';
import Cookies from 'js-cookie';




export default class CityHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abbr: '',
      modalOpen: false,
      choiseCity: true,
      choiseMoscow: false,
      choiseSpb: false,
      choiseKazan: false
  };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleOpen = (e) => {
  this.setState({ modalOpen: true },   this.props.cityAnswerModalClose());



}
choiceMoscow = (e) => {
  this.props.updateCity("Москва");

}

handleSubmitStreet = (e) => {
  this.props.updateStreet(e.target.abbr);
  this.getReference2();
  this.setState({
    choiseCity: true,
    choiseMoscow: false,
    choiseSpb: false,
  choiseKazan: false
  })
}
handleSubmit(e) {
    this.props.updateCity(e);
    if(e == "Москва") {
      this.setState({
        choiseCity: false,
        choiseMoscow: true,
        choiseSpb: false,
      choiseKazan: false      });
    }
    if(e == "Санкт-Петербург") {
      this.setState({
        choiseCity: false,
        choiseMoscow: false,
        choiseSpb: true,
        choiseKazan: false
      });
    }
    if(e == "Казань") {
      this.setState({
      choiseCity: false,
      choiseKazan: true,
    choiseSpb: false,
  choiseMoscow: false})
    }
    else {
      return(null)
    }

  }
getReference2 = (e) => {
  this.setState({
      modalOpen: false
  }, this.props.cityAnswerModalClose());

}
fac = (e) => {

}

  render() {
      return (

        <Modal
            trigger={<HeaderCity handleSubmit={this.handleSubmit} cityAnswerModal={this.props.cityAnswerModal} getReference2={this.getReference2} choiceMoscow={this.choiceMoscow} cityOrder={this.props.cityOrder} orderActiveWindow={this.props.orderActiveWindow} selectedCity={this.props.selectedCity} handleOpen={this.handleOpen}/>}
            open={this.state.modalOpen || this.props.cityAnswerModal}

            onClose={this.handleOpen}
            basic
            size='small'
          >
            <Header  />
            <Modal.Content>
              <div className="fullLogin">
              {(this.state.choiseCity == true)?(<div className="modalw_lg"><div id="closeModalCity"  onClick={this.getReference2}>&#10006; </div><h3 id="h3City">Выбор города</h3>
                <table id='tableCityChoise'><tbody>
                    <tr><td id="moscow4" abbr="Москва" onClick={this.fac}>Москва</td></tr>
                    <tr><td id="spb4" abbr="Санкт-Петербург" onClick={this.fac}>Санкт-Петербург</td></tr>
                    <tr><td id="kazan4" abbr="Казань" onClick={this.fac}>Казань</td></tr>
                    </tbody>
                  </table>
                    </div>
              ):(null)}
              {(this.state.choiseMoscow == true)?(<div className="modalw_lg"><div id="closeModalCity"  onClick={this.getReference2}>&#10006; </div><h3 id="h3City">Выбор филиала</h3>
                <table id='tableCityChoise'><tbody>
                    <tr><td id="moscow3" abbr="Ленинградский" onClick={this.handleSubmitStreet}>Ленинградский пр-т., 39</td></tr>
                    <tr><td id="spb3" abbr="Преображенская" onClick={this.handleSubmitStreet}>Преображенская пл., 8</td></tr>
                    <tr><td id="kazan3" abbr="Угрешская" onClick={this.handleSubmitStreet}>Угрешская ул., 2</td></tr>
                    </tbody>
                  </table>
                    </div>
              ):(null)}
              {(this.state.choiseSpb == true)?(<div className="modalw_lg"><div id="closeModalCity"  onClick={this.getReference2}>&#10006; </div><h3 id="h3City">Выбор филиала</h3>
                <table id='tableCityChoise'><tbody>
                  <tr><td id="kazan2" abbr=">Бумажная" onClick={this.handleSubmitStreet}>Бумажная ул., 16</td></tr>
                    <tr><td id="moscow2" abbr="Свердловская" onClick={this.handleSubmitStreet}>Свердловская наб., 44Д</td></tr>
                    <tr><td id="spb2" abbr="ул.Химиков" onClick={this.handleSubmitStreet}>ул. Химиков, 28АС</td></tr>
                    </tbody>
                  </table>
                    </div>
              ):(null)}{(this.state.choiseKazan == true)?(<div className="modalw_lg"><div id="closeModalCity"  onClick={this.getReference2}>&#10006; </div><h3 id="h3City">Выбор филиала</h3>
                <table id='tableCityChoise'><tbody>
                    <tr><td id="spb" abbr=">Право-Булачная" onClick={this.handleSubmitStreet}>Право-Булачная ул., 35/2</td></tr>
                      <tr><td id="moscow" abbr="ул.Шмидта" onClick={this.handleSubmitStreet}>ул. Шмидта, 35А</td></tr>
                    </tbody>
                  </table>
                    </div>
              ):(null)}
              </div>
            </Modal.Content>
            <Modal.Actions>

            </Modal.Actions>
          </Modal>
        )


              }

          }
