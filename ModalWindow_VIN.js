import React, { Component } from 'react'
import { Header, Modal } from 'semantic-ui-react'
import './index.css';
import VIN from './VIN.js';



export default class VinModal extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    if (this.props.vinShow) {
    return (

      <Modal
        trigger={<div className="VIN"><h2><span className="VIN-decoration" onClick={this.handleOpen}>VIN-код</span> - это уникальный идентификатор автомобиля, который позволяет точно определить модификацию</h2></div>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header  />
        <Modal.Content>
          <div className="dark_full" onClick={this.handleClose}>
          <div id="modalVIN">

          <h3>Где найти VIN-код?</h3>
          <div id="closeModalVin"  >&#10006; </div>
          <div className="vinImage"><VIN /></div>

          </div>
          </div>
        </Modal.Content>
        <Modal.Actions>

        </Modal.Actions>
      </Modal>
    )
  }
  else return (null)
}

}
