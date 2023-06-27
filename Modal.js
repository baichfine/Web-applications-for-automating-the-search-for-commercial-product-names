import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import './index.css';

class ModalWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.openModal()}>Open modal</button>
        <Modal
          isOpen={this.state.isModalOpen}
          onClose={() => this.closeModal()}
        >
          <h3>Modal title</h3>
          <p>Content</p>
        </Modal>
      </div>
    );
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }
}

class Modal extends React.Component {
  render() {
    if (this.props.isOpen === false) return null;

    return (
      <div>
        <div className="modal">{this.props.children}</div>
        <div className="bg" onClick={e => this.close(e)} />
      </div>
    );
  }

  close(e) {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  }
}

export default ModalWindow;









class ModalWindow extends React.Component {
  render() {
    const { closeModal } = this.props;

    return (
      <div className="jumbotron" style={{position: 'absolute', width: '100%', top: 0, height: 500}}>
        <h1>Some Modal</h1>
        <button
          className="btn btn-md btn-primary"
          onClick={closeModal}
          >Close Modal</button>
      </div>
    )
  }
}

class Application extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };
  }

  _openModal() {
    this.setState({modalOpen: true});
  }

  _closeModal() {
    this.setState({modalOpen: false});
  }

  render() {
    const { modalOpen } = this.state;

    return (
      <div>
        <button
          className="btn btn-md btn-primary"
          onClick={this._openModal.bind(this)}
          >Open Modal</button>

        {/* Only show Modal when "this.state.modalOpen === true" */}
        {modalOpen
          ? <Modal closeModal={this._closeModal.bind(this)} />
          : ''}
      </div>
    );
  }
}



/* ReactDOM.render(<App />, document.getElementById("root")); */
