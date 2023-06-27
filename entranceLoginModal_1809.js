import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import './index.css';
import Login from './Login.js';
import Cookies from 'universal-cookie';
import ErrorAvtorization from './ErrorAvtorization.js';
import MyOrders from './MyOrders.js';
import ButtonMyOrders from './buttonMyOrders.js';
import ButtonMyOrders2 from './buttonMyOrders2.js';
import PersonalData from './PersonalData.js';
import MyMenu from './myMenu.js';

export default class EntranceLoginModal extends Component {
//  state={modalOrdersOpen: false};
//  updateModal = (modalState) => {
//  this.setState({modalOrdersOpen: modalState});
//}
//*  handleOpen = () => this.setState({ modalOpen: true })
//*  handleClose = () => this.setState({ modalOpen: false })

  constructor(props) {
    super(props);
    this.state = {
      type: 'password',
      score: 'null',
      error: null,
      isLoaded: false,
      isClickedLogin: false,
      items: [],
      login: '',
      password: '',
      sesskey: '',
      loginIncorrect: null,
      authorization: false,
      modalMyMenu: false,
      activeMenu: false,
      modalOrdersOpen: false,
      notError: false,
      greeting: true,
      personalDataModal: false,
      orderPriority: true,
      registration: false,
      isChecked: true,
      passwordSend: false,
      messageMail: false,
      myOrdersActive: false

    };


    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange= this.handlePasswordChange.bind(this);
    this.showHide = this.showHide.bind(this);
    this.passwordStrength = this.passwordStrength.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpenCloseMyOrders = this.handleOpenCloseMyOrders.bind(this);
    }

  componentDidMount() {

    if(this.state.isClickedLogin){
    fetch("http://192.168.35.148:84/api/index.php",{
       method: 'POST',
       headers: {'Content-Type':'application/json'},
       body: JSON.stringify({"action":"user_login","login":this.state.login,"password":this.state.password})
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
            sesskey: result.sesskey,

          });

          if (typeof(this.state.sesskey) == 'undefined') {

            this.setState({
              loginIncorrect: true,
              notError: false
            })

          }


          else {

            this.setState({
              loginIncorrect: false,
              authorization: true,
              modalOrdersOpen: true

              });

          }

          const cookies = new Cookies();
          cookies.set('PHPSESSID', result.sesskey, { path: '/', host: '192.168.35.148' });
          console.log(cookies.get('PHPSESSID'));


          this.setState({
            sesskey: result.sesskey


          });

        /*  if (this.state.loginIncorrect == false) {

            this.setState({
              modalOpen: !this.state.modalOpen
            });
            alert(this.state.loginIncorrect);
          }
*/
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      .catch(alert);
    }
  }

/*  handleSesskeyChange(e) {
  /*  setTimeout(() => {
      if (typeof(this.state.sesskey) == 'undefined') {
        alert("ошибкаd");
      } else {
          alert("все верно");
}}, 3000);

       return ( <ErrorAvtorization />
       );
     } */

  handleLoginChange(e) {
     this.setState({login: e.target.value});
  }

  handlePasswordChange(e) {
     this.setState({password: e.target.value});
  }

  showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })
  }

  clickLogin(e){
    this.setState({isClickedLogin: true},()=>{this.componentDidMount();});

    //alert(this.state.isClickedLogin);

  }


  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.componentDidMount(e)
    }
  }

  passwordStrength(e){
    if(e.target.value === ''){
      this.setState({
        score: 'null'
      })
    }
    else{
      var pw = e.target.value;
      this.setState({
        score: pw.score
      });
    }
  }

  toggleChange = () => {
     this.setState({
       isChecked: !this.state.isChecked,
     });
   }

  onModalClose() {

      this.setState({
          modalOrdersOpen: false,
          activeMenu: true
      });
  }

  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })
  handleOrdersOpen = () => this.setState({ modalMyMenu: true })
  handleOrdersClose = () => this.setState({ modalMyMenu: false })


  logout() {
      this.setState({
          sesskey: '',
          authorization: false,
          loginIncorrect: true,
          modalMyMenu: false,
          activeMenu: false,
          notError: true,
          registration:  false,
          personalDataModal: false,
          modalOpen: true}, (e) =>  {this.props.logoutClick();});
}

myOrders() {
    this.setState({
          activeMenu: false,
          greeting: false,
          orderPriority: true,
          modalOrdersOpen: true,
          myOrdersActive: true
}); 


}

personalData() {
  this.setState({
          personalDataModal: true,
          activeMenu: false,
          modalMyMenu: false,
          orderPriority: false,
          modalOrdersOpen: false,
          authorization: true,
          registration: false
          });

}

personalDataClose() {
  this.setState({
    personalDataModal: false,
    modalMyMenu: true,
    activeMenu: true,
          });

}


registrationEntranceChange() {
  this.setState({
    registration: true
});
}

entranceRegistrationChange() {
  this.setState({
    registration: false
});
}

  handleOpenCloseMyOrders(event) {
     this.setState({ modalOrdersOpen: true });
}

passwordSendMessage() {
  this.setState({
    passwordSend: true,
    modalMyMenu: true,
    activeMenu: true,
    modalOpen: false
});

}

messageMail() {
  this.setState({
    registration: false,
    messageMail: true
    });
    setTimeout(() => {
  this.setState({ messageMail: false });
}, 5000);


}

handleChangeActiveMenu = () => this.setState({ activeMenu: true })

  render() {
    const loginIncorrect = this.state.loginIncorrect;
    const authorization = this.state.authorization;
    const notError = this.state.notError;
    const personalDataModal = this.state.personalDataModal;
    const orderPriority = this.state.orderPriority;
    const passwordSend = this.state.passwordSend;
    const messageMail = this.state.messageMail;
    const registration = this.state.registration;
    const myOrdersActive = this.state.myOrdersActive;




    if (((this.props.logoutEntrance == false || typeof(this.props.logoutEntrance) == 'undefined')  && this.state.authorization == false && this.state.activeMenu == false && this.state.registration == false) || (this.state.authorization == true && this.state.activeMenu == false && this.state.registration == false  && this.props.logoutEntrance == false  ) ){
    return (


      <Modal
        trigger={<ButtonMyOrders handleOpen={this.handleOpen.bind(this)}  authorization={this.state.authorization} />}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header  />
        <Modal.Content>


        <div>

          <div className="fullLogin">

            <div id="modalLoginEntranсe">
                      <span id="modalLoginClose" onClick={this.handleClose}>&#10006;</span>
              <h3> </h3>

              <span id="entranceSpanActive" onClick={this.entranceRegistrationChange.bind(this)}>Вход</span><span id="reg" onClick={this.registrationEntranceChange.bind(this)}>Регистрация</span>
                <input id="email" type="text" value={this.state.login} onChange={this.handleLoginChange} className="inputText" placeholder="Эл. почта" required/>
                <span id="floating-label"></span>
                <label>
                <input type={this.state.type} className="password" placeholder="Пароль" value={this.state.password} onKeyPress={this.handleKeyPress} onChange={this.handlePasswordChange} onClick={this.passwordStrength} />
                <span id="passwordShow" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
                {/* <span className="password__strength" data-score={this.state.score} /> */}
                </label>

                <span id="floating-label2"></span>
              {/* <input type="password" className="password" placeholder="Пароль"/> */}
              <button id="sign-in-modal" onClick={(e)=>{this.clickLogin(e);}} >Войти</button>

              <div className="checkbox">
              <input type="checkbox" id="check"  checked={this.state.isChecked} onChange={this.toggleChange}/><label htmlFor="check">  Даю согласие на обработку моих персональных данных</label>


              </div>

            </div> ) : (<div></div>) }



            {((personalDataModal == true && orderPriority == false)) ? (
        <PersonalData activeMenu={this.state.activeMenu} handleChangeActiveMenu={this.handleChangeActiveMenu.bind(this)} personalDataModal={this.state.personalDataModal }  personalDataClose={this.personalDataClose.bind(this)} handleClose={this.handleClose.bind(this)}/>
      ) : (
   <div></div>)}
            {(loginIncorrect == true) ? (
        <ErrorAvtorization notError={this.state.notError} />
      ) : (loginIncorrect == null && orderPriority == true) ? (
   <div></div>
 ) : (loginIncorrect == null && passwordSend == true) ? (  <div className="avtorizationR">
     <div id="avtorizHeader">
         <p>Добро пожаловать!</p> </div> </div>
     ) : (

         <MyOrders   greeting={this.state.greeting} activeMenu={this.state.activeMenu} handleChangeActiveMenu={this.handleChangeActiveMenu.bind(this)} modalOrdersOpen={this.state.modalOrdersOpen} ModalClose={this.onModalClose.bind(this)} handleClose={this.handleClose.bind(this)}/>

       )}
       { (this.state.messageMail == true && this.state.registration == false)  ? (
         <div className="registrationR">
           <div id="avtorizHeader">
               <p>Пароль был выслан Вам на почту</p> </div></div>) : (<div></div>)
              }



</div>
          </div>


        </Modal.Content>
        <Modal.Actions>
        </Modal.Actions>
      </Modal>



    )
  }
    else {
      if (this.state.registration == true) {

        return (

          <Modal
            trigger={<ButtonMyOrders handleOpen={this.handleOpen.bind(this)}  authorization={this.state.authorization} />}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            basic
            size='small'
          >
            <Header  />
            <Modal.Content>
          <div className="fullLogin">

            <div id="modalLoginRegistration">
                      <span id="modalLoginClose" onClick={this.handleClose}>&#10006;</span>
              <h3> </h3>

              <span id="entranceSpan" onClick={this.entranceRegistrationChange.bind(this)}>Вход</span><span id="regActive" onClick={this.registrationEntranceChange.bind(this)}>Регистрация</span>
                <input id="email" type="text" value={this.state.login} onChange={this.handleLoginChange} className="inputText" placeholder="Эл. почта" required/>

                <label></label>

                <span id="floating-label2"></span>

              {/* <input type="password" className="password" placeholder="Пароль"/> */}
              <button id="sign-in-modal" onClick={this.messageMail.bind(this)} >Зарегистрироваться</button>

              <div className="checkbox">
              <input type="checkbox" id="check"  checked={this.state.isChecked} onChange={this.toggleChange}/><label htmlFor="check">  Даю согласие на обработку моих персональных данных</label>
              </div>
                          <span id="floating-label2"></span>

                <span id="regQ"></span>
                  <span id="rg">Пароль отправим на почту</span>

            </div>
          </div>
          </Modal.Content>
          <Modal.Actions>
          </Modal.Actions>
        </Modal>

        )
      }
}

              return   (
            <Modal
              trigger={<ButtonMyOrders2  modalMyMenu={this.state.modalMyMenu} handleOrdersOpen={this.handleOrdersOpen.bind(this)} />}
              open={this.state.modalMyMenu}
              onClose={this.handleOrdersClose}
              basic
              size='small'
            >
              <Header  />
              <Modal.Content>

              <div className="fullLogin" >





              { (this.state.messageMail == true && this.state.registration == false)  ? (
                <div className="registrationR">
                  <div id="avtorizHeader">
                      <p>Пароль был выслан Вам на почту</p> </div></div>) : (<div></div>)
                     }



                <div id="modalLoginMenu" onMouseLeave={this.handleOrdersClose}>
                 <ul>
                     <li onClick={this.myOrders.bind(this)}>Мои заказы</li>
                     <li onClick={this.personalData.bind(this)}>Личные данные</li>
                     <li>Изменить пароль</li>
                     <li onClick={this.logout.bind(this)} >Выйти</li>

                 </ul>




                 </div>
              </div>
              </Modal.Content>
              <Modal.Actions>
              </Modal.Actions>
            </Modal>

          );



}
}
