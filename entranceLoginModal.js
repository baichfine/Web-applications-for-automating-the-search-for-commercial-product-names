import React, { Component } from 'react'
import { Header, Modal } from 'semantic-ui-react'
/*import MyMenu from './myMenu.js';*/
import './index.css';
import Login from './Login.js';
import Cookies from 'universal-cookie';
import ErrorAvtorization from './ErrorAvtorization.js';
import ButtonMyOrders from './buttonMyOrders.js';
import ButtonMyOrders2 from './buttonMyOrders2.js';
import MyRegistration from './MyRegistration.js';



export default class EntranceLoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'password',
      score: 'null',
      error: null,
      isLoaded: false,
      isClickedLogin: false,
      isClickedRegistration: false,
      items: [],
      login: '',
      password: '',
      email: '',
      phone: '',
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
      myOrdersActive: false,
      value: '',
      actionClick: '',
      modalOpen: false,
      clickErrStop: false,
      listFull: false
    };

    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handlePasswordChange= this.handlePasswordChange.bind(this);
    this.clearLoginChange = this.clearLoginChange.bind(this);
    this.clearEmailChange = this.clearEmailChange.bind(this);
    this.clearPhoneChange = this.clearPhoneChange.bind(this);
    this.clearPasswordChange = this.clearPasswordChange.bind(this);
    this.showHide = this.showHide.bind(this);
    this.passwordStrength = this.passwordStrength.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleOpenCloseMyOrders = this.handleOpenCloseMyOrders.bind(this);
    }

  componentDidMount() {
  if(this.state.isClickedLogin && this.state.actionClick ==='user_login'){
      fetch(this.props.api,{
         method: 'POST',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify({
           "action":this.state.actionClick,
           "login":this.state.login,
           "password":this.state.password})
      })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result,
              sesskey: result.sesskey,
            });
            if (typeof(this.state.sesskey) === 'undefined') {
              this.setState({
                loginIncorrect: true,
                notError: false,
                clickErrStop: false,
              })
            }
            else {
              this.props.updateSession(result.sesskey);
              this.setState({
                loginIncorrect: false,
                authorization: true,
                modalOrdersOpen: true,
                modalOpen: false,
                modalMyMenu: false,
                activeMenu: true,
                notError: false,
                personalDataModal: true,
                });
                this.props.logautOrders();
                this.props.clickEntrance();
            }
            const cookies = new Cookies();
            cookies.set('PHPSESSID', result.sesskey, { path: '/', host: '192.168.35.148' });
            console.log(cookies.get('PHPSESSID'));
            this.setState({
              sesskey: result.sesskey
            }, this.props.updateSession(result.sesskey) );
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
  else {if(this.state.isClickedRegistration && this.state.actionClick === 'register_user') {
        fetch(this.props.api,{
           method: 'POST',
           headers: {'Content-Type':'application/json'},
           body: JSON.stringify({
             "action":this.state.actionClick,
             "email": this.state.login,
             "mphone": this.state.phone,
             "name": this.state.email

           })
        })
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result

              });
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
  }}
  }
  clearLoginChange(e) {
      this.setState({login: ''});
  }
  clearEmailChange(e) {
      this.setState({email: ''});
  }
  clearPhoneChange(e) {
      this.setState({phone: ''});
  }
  clearPasswordChange(e) {
      this.setState({password: ''});
  }
  handleLoginChange(e) {
      this.setState({login: e.target.value});
      this.props.updateemailreg(e.target.value);
  }
  handleEmailChange(e) {
      this.setState({email: e.target.value});
      this.props.updatefioreg(e.target.value);
  }
  handlePhoneChange(e) {
      this.setState({phone: e.target.value});
      this.props.updatephonereg(e.target.value);
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
    this.setState({
      actionClick: 'user_login',
      isClickedLogin: true},()=>{this.componentDidMount();}
    );
  }
  clickRegistration(e){
    this.setState({
      actionClick: 'register_user',
      isClickedRegistration: true},()=>{this.componentDidMount();}
    );
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
  createTable = (e) => {
   let list = [];

   list = Object.values(this.props.arrayMyCompanies['clients']).map((obj, e) => {
  //   alert(this.props.companySelected);
     if(obj.id !== this.props.companySelected) {
   return(

       <li  id='arrayCompany' key={e} onClick={(id, name)=>{this.props.changeCompany(obj.id, obj.name, obj.address);}}>
         {obj.name}
       </li>)
   }});
   return list;
   }
  onModalClose() {

      this.setState({
          modalOrdersOpen: false,
          activeMenu: true
      });
  }
  handleOpen = () => this.setState({ modalOpen: !this.state.modalOpen })
  handleOrdersOpen = () => this.setState({ modalMyMenu: !this.state.modalMyMenu })
  logout(e) {
        this.setState({
            clickErrStop: true,
            sesskey: '',
            authorization: false,
            loginIncorrect: true,
            modalMyMenu: false,
            activeMenu: false,
            notError: true,
            registration:  false,
            personalDataModal: false,
            modalOpen: true}, (e) =>  {this.props.logoutClick(e);});
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
  registrationEntranceChange = (e) => {
    this.setState({
      registration: !this.state.registration
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
  messageMail(e) {
  this.setState({
    registration: false,
    messageMail: true,
    notError: true
    });
this.props.clickRegistration(e);
  this.setState({
    actionClick: 'register_user',
    isClickedRegistration: true},()=>{this.componentDidMount();});
}
  handleChangeActiveMenu = () => this.setState({ activeMenu: true })
  registrationUr = (e) => {
  this.setState({
    registration: false
  })
  this.props.newCompanyRegistration(e);
}
  clickErr2 = (e) => {
  this.setState({
    clickErrStop: true
  })
  this.props.clickError(e);
}
  fullList = (e) => {
  this.setState({
    listFull: !this.state.listFull
  })
}
  componentWillUnmount() {
  document.removeEventListener('click', this.handleClickOutside, false);
  }
  UNSAFE_componentWillMount() {
  document.addEventListener('click', this.handleClickOutside, false);
  }
  handleClickOutside = (e) => {
  const myOrders = document.getElementById('modalLoginMenu');
  const myOrdersButton = document.getElementById('myOrdersClick');
  const myList =  document.getElementById('listCompany');


/*  const modalLogin = document.getElementById('modalLoginEntranсe');*/
  const reg = document.getElementById('reg');
  const modalLoginRegistration = document.getElementById('modalLoginRegistration');
  const entranceSpan = document.getElementById('entranceSpan');
//alert(e.path.includes(myList));
//alert(e.path.includes(myOrders) + " " + e.path.includes(myOrdersButton) + e.path.includes(myListCompanies));
if (myOrders !== undefined &&  myOrdersButton !== undefined && myList !== undefined)
  if (!e.path.includes(myList) && !e.path.includes(myOrders) && !e.path.includes(myOrdersButton))
  this.setState({
     modalMyMenu: false
  })
    //alert(!e.path.includes(myOrdersButton) + " " + !e.path.includes(modalLogin) + " " +!e.path.includes(modalLoginRegistration));
  /*  if (this.state.registration === false){
        if (e.path.includes(modalLogin) === true && e.path.includes(reg) === true)
        this.setState({ registration: true });
    }
    else if (this.state.registration === true){
        if (e.path.includes(modalLoginRegistration) === true && e.path.includes(entranceSpan) === true)
          this.setState({ registration: false });

    }
 if (!e.path.includes(myOrdersButton) && !e.path.includes(modalLogin) && !e.path.includes(modalLoginRegistration) && ( !e.path.includes(reg) && !e.path.includes(entranceSpan)))
  this.setState({
     modalOpen: false
  })*/
}

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

    if (((this.props.logoutEntrance === false || typeof(this.props.logoutEntrance) === 'undefined')  && this.state.authorization === false && this.state.activeMenu === false && this.state.registration === false) || (this.state.authorization === true && this.state.activeMenu === false && this.state.registration === false  && this.props.logoutEntrance === false  ) ){

    return (

      <Modal
        trigger={<ButtonMyOrders handleOpen={this.handleOpen.bind(this)}  authorization={this.state.authorization} />}
        open={this.state.modalOpen}
        onClose={this.handleOpen}
        basic
        size='small'>
        <Header  />
        <Modal.Content>
        <div>
          <div className="fullLogin">

            <div id="modalLoginEntranсe">
                      <span id="modalLoginClose" onClick={this.handleOpen}>&#10006;</span>
              <span id="entranceSpanActive">Вход</span><span id="reg" onClick={this.registrationEntranceChange}>Регистрация</span>
                <input id="email" type="text" value={this.state.login} onChange={this.handleLoginChange} className="inputText" placeholder="Эл. почта" required/>
                  {(this.state.login.length !== 0)?(<span id='krestikReg'  onClick={(e)=>{this.clearLoginChange(e); this.clearPasswordChange(e);}}>&#10006;</span>):(null)}
                <span id="floating-label"></span>
                <label>
                <input type={this.state.type} className="password" placeholder="Пароль" value={this.state.password} onKeyPress={this.handleKeyPress} onChange={this.handlePasswordChange} onClick={this.passwordStrength} />

                <span id="passwordShow" onClick={this.showHide}>{this.state.type === 'input' ? <svg className="eye" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 25">
                    <g fill="none" fillRule="evenodd">
                        <path d="M0 0h24v24H0z"/>
                        <path fill="#000" d="M12 15c5.523 0 7.5-4 9-4 0 .954-2.477 6-9 6s-9-5.046-9-6c1.5 0 3.477 4 9 4z"/>
                    </g>
                </svg>

 : <svg className="eye" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 25">
     <g fill="none" fillRule="evenodd">
         <path d="M0 0h24v24H0z"/>
         <path stroke="#000" d="M20.386 12C18.19 8.989 15.407 7.5 12 7.5c-3.407 0-6.19 1.489-8.386 4.5C5.81 15.011 8.593 16.5 12 16.5c3.407 0 6.19-1.489 8.386-4.5z"/>
         <path fill="#000" d="M12 10c5.523 0 5.5 2 9 2 0-.954-2.477-6-9-6s-9 5.046-9 6c3.5 0 3.477-2 9-2z"/>
         <circle cx="12" cy="12" r="3" fill="#000"/>
     </g>
 </svg>

}</span>
                </label>
                <span id="floating-label2"></span>
              <button id="sign-in-modal" onClick={(e)=>{this.clickLogin(e);}} >Войти</button>
              <div className="checkbox">
              <input type="checkbox" id="check"  checked={this.state.isChecked} onChange={this.toggleChange}/><label id="activeCheck" htmlFor="check">  Даю согласие на обработку моих персональных данных</label>
              </div>
              {(loginIncorrect === true && this.state.clickErrStop === false) ? (<ErrorAvtorization notError={this.state.notError} />) :  (null) }
            </div>



</div>
</div>
        </Modal.Content>
        <Modal.Actions>
        </Modal.Actions>
      </Modal>
    )
  }
    else {
      if (this.state.registration === true) {
        return (
          <Modal
            trigger={<ButtonMyOrders handleOpen={this.handleOpen.bind(this)}  authorization={this.state.authorization} />}
            open={this.state.modalOpen}
            onClose={this.handleOpen}
            basic
            size='small'>
            <Header  />
            <Modal.Content>
          <div className="fullLogin">


            <div id="modalLoginRegistration">
                      <span id="modalLoginClose" onClick={this.handleOpen}>&#10006;</span>
              <span id="entranceSpan" onClick={this.registrationEntranceChange}>Вход</span><span id="regActive">Регистрация</span>
                <input id="email" type="text"  value={this.state.email} onChange={this.handleEmailChange} className="inputText" placeholder="Имя и фамилия" required/>
              {(this.state.email.length !== 0)?(<span id='krestikReg'  onClick={(e)=>{this.clearEmailChange(e);}}>&#10006;</span>):(null)}
                <input id="nameLog" type="text"  value={this.state.phone} onChange={this.handlePhoneChange} className="inputText" placeholder="Номер телефона" required/>
              {(this.state.phone.length !== 0)?(<span id='krestikReg'  onClick={(e)=>{this.clearPhoneChange(e);}}>&#10006;</span>):(null)}

                <input id="nameLog2" type="text"  value={this.state.login} onChange={this.handleLoginChange}  className="inputText" placeholder="Эл. почта" required/>
              {(this.state.login.length !== 0)?(<span id='krestikReg'  onClick={(e)=>{this.clearLoginChange(e);}}>&#10006;</span>):(null)}

                <span id="floating-label2"></span>
              <button id="sign-in-modal" onClick={(e)=>{this.messageMail(e);}}>Зарегистрироваться</button>


              <div className="checkbox">
              <input type="checkbox" id="check"  checked={this.state.isChecked} onChange={this.toggleChange}/><label htmlFor="check">  Даю согласие на обработку моих персональных данных</label>
              </div>
                          <span id="floating-label2"></span>



                    <p id="urLizo" title='Создать учетную запись юридического лица' onClick={(e)=>{this.registrationUr(e);}}> Зарегистрировать юридическое лицо</p>

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
              trigger={<ButtonMyOrders2 lastname={this.props.lastname} name={this.props.name} modalMyMenu={this.state.modalMyMenu} handleOrdersOpen={this.handleOrdersOpen.bind(this)} />}
              open={this.state.modalMyMenu}
              onClose={this.handleOrdersOpen}
              basic
              size='small'
            >
              <Header  />
              <Modal.Content>

              <div className="fullLogin" >



                <div id="modalLoginMenu" onClick={this.handleOrdersOpen}>
                 <ul id='companyUl'>
                     <li onClick={this.props.myOrdersChange}>Мои заказы</li>
                     <li onClick={this.props.myPersonalDataChange}>Личные данные</li>
                     <li onClick={this.props.myPasswordChange}>Изменить пароль</li>
                     <li onClick={this.logout.bind(this)} >Выйти</li>
                     </ul>
                                   </div>
                                   <div id='menuCompany' > <div id="listCompany" onClick={this.fullList} >Переключиться на  <svg id="listSvg" xmlns="http://www.w3.org/2000/svg" width="15" height="10.5" viewBox="0 0 10 7">
                                               <path fill="#000" fillRule="evenodd" d="M.757 2L2.172.586 5 3.414 7.828.586 9.243 2 5 6.243z"/>
                                           </svg></div>
                                           <ul>
                                             {(this.state.listFull)?(this.createTable()):(null)} </ul></div></div>

              </Modal.Content>
              <Modal.Actions>
              </Modal.Actions>
            </Modal>

          );
}
}
