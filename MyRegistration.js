import React from 'react'
/*import { render } from 'react-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';*/
import './index.css';

export class MyRegistration extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
          individual: true,
          dataUser: true,
          saveChangeButton: false,
          saveSuccessful: false,
          myCompany: '',
          okopf: "",
          okpo: "",
          typeOfCompany: "",
          okved: "",
          systemNalog: "",
          nameUser: this.props.fioreg,
          namePhone: this.props.phonereg,
          nameEmail: this.props.emailreg,
          nameOrg: "",
          leaderType: "",
          inn: "",
          buhgalter: "",
          kpp: "",
          buhgalterType: "",
          urAdress: "",
          telephon: "",
          ogrn: "",
          email: "",
          btype1: '',
          btype2: '',
          btype3: '',
          btype4: '',
          btype5: '',
          type1: '',
          type2: '',
          type3: '',
          type4: '',

          typeOkopf1: '',
          typeOkopf2: 'selected',
          typeOkopf3: ''


        }
      }


individualEntityChange () {
    this.setState({
        individual: true
    });
}
clickSaveChanges = (e) => {
   this.setState({
     saveSuccessful: true,
     saveChangeButton: false});
    // this.props.clickUserDataSave(e);
}
userDataChangeOKOPF= (e) => {
 this.setState({okopf: e.target.value, saveChangeButton: true, saveSuccessful: false});
}
userDataChangeOKPO= (e) => {
 this.setState({okpo: e.target.value, saveChangeButton: true, saveSuccessful: false});
}
userDataChangetypeOfCompany= (e) => {
 this.setState({typeOfCompany: e.target.value, saveChangeButton: true, saveSuccessful: false});
}
userDataChangeOKVED= (e) => {
 this.setState({okved: e.target.value, saveChangeButton: true, saveSuccessful: false});
}
userDataChangesystemNalog= (e) => {
 this.setState({systemNalog: e.target.value, saveChangeButton: true, saveSuccessful: false});
}
userDataChangeNameUser= (e) => {
 this.setState({nameUser: e.target.value, saveChangeButton: true, saveSuccessful: false});
}
userDataChangenameOrg= (e) => {
 this.setState({nameOrg: e.target.value, saveChangeButton: true, saveSuccessful: false});
}
userDataChangeNamePhone= (e) => {
 this.setState({namePhone: e.target.value, saveChangeButton: true, saveSuccessful: false});
}
userDataChangeINN= (e) => {
 this.setState({inn: e.target.value, saveChangeButton: true, saveSuccessful: false});
}
userDataChangeNameEmail= (e) => {
 this.setState({nameEmail: e.target.value, saveChangeButton: true, saveSuccessful: false});
}
userDataChangeKPP= (e) => {
 this.setState({kpp: e.target.value, saveChangeButton: true, saveSuccessful: false});
}
userDataChangebuhgalterType= (e) => {
 this.setState({buhgalterType: e.target.value, saveChangeButton: true, saveSuccessful: false});
}
userDataChangeurAdress= (e) => {
 this.setState({urAdress: e.target.value, saveChangeButton: true, saveSuccessful: false});
}
userDataChangetelephon= (e) => {
 this.setState({telephon: e.target.value, saveChangeButton: true, saveSuccessful: false});
}
userDataChangeOGRN= (e) => {
 this.setState({ogrn: e.target.value, saveChangeButton: true, saveSuccessful: false});
}
userDataChangeemail= (e) => {
 this.setState({email: e.target.value, saveChangeButton: true, saveSuccessful: false});
}

  render() {


    //    if(this.props.greeting) {
      return (
        <div>


        <div className="dark_full">
            <div id="closeModalOrders" onClick={this.props.newCompanyRegistrationClose} >&#10006;</div>
            <div id="RightAvtorization">
            <h4>Регистрация юридического лица</h4>
            <div className="regTable">
            <div className="tableR4">
            <form>

                      <table id="requisitesCompany">
                      <tbody>

                      <tr><td>{(this.state.nameUser.length!= 0)?(<span id="comment">Имя и фамилия</span>):(null)}<input type="text" onChange={this.userDataChangeNameUser} placeholder="Имя и фамилия" value={this.state.nameUser}/></td></tr>
                      <tr><td>{(this.state.namePhone.length!= 0)?(<span id="comment">Номер телефона</span>):(null)}<input type="text" onChange={this.userDataChangeNamePhone} placeholder="Номер телефона" value={this.state.namePhone}/></td></tr>
                    <tr><td>{(this.state.nameEmail.length!= 0)?(<span id="comment">Электронная почта</span>):(null)}<input type="text" onChange={this.userDataChangeNameEmail} placeholder="Электронная почта" value={this.state.nameEmail}/></td></tr>

                    </tbody>
                      </table>

                      <div id='otstup'></div>
                      <table id="requisitesCompany">
                      <tbody>
                      <tr><td><span id="comment">ОКОПФ</span>

                      <select id="listOKOPF">
                      <option value="A" selected={this.state.typeOkopf1}>ИП</option>
                      <option value="B" selected={this.state.typeOkopf2}>Общества с ограниченной ответственностью</option>

                      </select></td></tr>

                      <tr><td>{(this.state.nameOrg.length!= 0)?(<span id="comment">Наименование организации</span>):(null)}<input type="text" onChange={this.userDataChangenameOrg} placeholder="Наименование организации" value={this.state.nameOrg}/></td></tr>
                      <tr><td>{(this.state.inn.length!= 0)?(<span id="comment">ИНН</span>):(null)}<input type="text" onChange={this.userDataChangeINN} placeholder="ИНН" value={this.state.inn}/></td></tr>
                      <tr><td>{(this.state.kpp.length!= 0)?(<span id="comment">КПП</span>):(null)}<input type="text" onChange={this.userDataChangeKPP} placeholder="КПП" value={this.state.kpp}/></td></tr>
                      <tr><td>{(this.state.urAdress.length!= 0)?(<span id="comment">Юридический адрес</span>):(null)}<input type="text" onChange={this.userDataChangeurAdress} placeholder="Юридический адрес" value={this.state.urAdress}/></td></tr><tr><td>{(this.state.telephon.length!= 0)?(<span id="comment">Адрес доставки</span>):(null)}<input type="text" onChange={this.userDataChangetelephon} placeholder="Адрес доставки" value={this.state.telephon}/></td></tr>

                      </tbody>
                      </table>



                  <button id="sign-in-modal" onClick={this.props.companyRegistration} >Зарегистрироваться</button>

              </form>
            </div>
            </div>
            </div>
            </div>
            </div>
)
}
  }


export default MyRegistration;
