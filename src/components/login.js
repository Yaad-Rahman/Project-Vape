import React from 'react';
import Modal from 'react-modal';
import './signup.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '600px',
    height                : '620px',
    background            : '#FFFFFF',
    boxShadow             : '10px 4px 4px rgba(0, 0, 0, 0.5)',
    borderRadius          : '20px',
  }
};


class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <h2 id="signup" onClick={this.openModal}>Log In</h2>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
                <h2 id="intro">Hey There !! <br/>
                Welcome to Vape Shop
                </h2>
                <form id="form">
                    Your Name: <br/>
                    <input type="text" name="userName" /> <br/> <br/> <br/>
                    Password: <br/>
                    <input type="password" name="password" /> <br/> <br/> <br/> <br/>
                    <button id="cancelbtn" onclick={this.closeModal}>Cancel</button>
                    <button id="signbtn">Sign In</button>

                   
                </form>
        </Modal>
      </div>
    );
  }
}

export default Login;