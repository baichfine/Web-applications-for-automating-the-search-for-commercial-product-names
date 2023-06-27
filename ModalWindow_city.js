import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import './index.css';
import Poisk from './poisk.js';

export default class CityModal extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  constructor(props) {
    super(props);
    this.state = {abbr: 'oil'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({abbr: event.target.abbr});
  }

  handleSubmit(event) {
    this.state.city = event.target.abbr;
    alert('Selected ' + event.target.abbr);
    //event.preventDefault();
  }

  render() {
    return (
      <Modal
        trigger={<button id="no_button" ><div id="tekst">Нет, выбрать другой</div></button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header  />
        <Modal.Content>
          <div className="dark">
          <div className="modalw_lg">
          <div id="closeModalCity"  onClick={this.handleClose}>&#10006; </div>
          <h3>Поиск города</h3>
          <input type="text" className="search_field_city input" placeholder="Поиск города"/>
          <table>
            <tbody>
                <tr><td abbr="moscow" onClick={this.handleSubmit}>Москва</td><td abbr="krasnodar" onClick={this.handleSubmit}>Краснодар</td><td abbr="samara" onClick={this.handleSubmit}>Самара</td></tr>
                <tr><td abbr="vladivistok" onClick={this.handleSubmit}>Владивосток</td><td abbr="krasnoyarsk" onClick={this.handleSubmit}>Красноярск</td><td abbr="spb" onClick={this.handleSubmit}>Санкт-Петербург</td></tr>
                <tr><td abbr="volgograd" onClick={this.handleSubmit}>Волгоград</td><td abbr="novgorod" onClick={this.handleSubmit}>Нижний Новгород</td><td abbr="saratov" onClick={this.handleSubmit}>Саратов</td></tr>
                <tr><td abbr="voronezh" onClick={this.handleSubmit}>Воронеж</td><td abbr="novosibyrsk" onClick={this.handleSubmit}>Новосибирск</td><td abbr="surgut" onClick={this.handleSubmit}>Сургут</td></tr>
                <tr><td abbr="ekaterinburg" onClick={this.handleSubmit}>Екатеринбург</td><td abbr="omsk" onClick={this.handleSubmit}>Омск</td><td abbr="tumen" onClick={this.handleSubmit}>Тюмень</td></tr>
                <tr><td abbr="irkutsk" onClick={this.handleSubmit}>Иркутск</td><td abbr="perm" onClick={this.handleSubmit}>Пермь</td><td abbr="Ufa" onClick={this.handleSubmit}>Уфа</td></tr>
                <tr><td abbr="kazan" onClick={this.handleSubmit}>Казань</td><td abbr="rostovOnDon" onClick={this.handleSubmit}>Ростов-на-Дону</td><td abbr="chelyabinsk" onClick={this.handleSubmit}>Челябинск</td></tr>
            </tbody>
          </table>

          </div>
          </div>
        </Modal.Content>
        <Modal.Actions>

        </Modal.Actions>
      </Modal>
    )
  }
}
