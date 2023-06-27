import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import './index.css';



export default class TermFilterButton extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={  <button className="default_btn" id="term"  onClick={this.handleOpen}>Срок поставки &#160;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="10.5" viewBox="0 0 10 7">
              <path fill="#000" fillRule="evenodd" d="M.757 2L2.172.586 5 3.414 7.828.586 9.243 2 5 6.243z"/>
          </svg></button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header  />
        <Modal.Content>
          <div className="dark_full" onClick={this.handleClose}>
          3333333333333333333333333
          </div>
        </Modal.Content>
        <Modal.Actions>

        </Modal.Actions>
      </Modal>
    )
  }
}
