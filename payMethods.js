import React from 'react';
/*import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';

import HeaderIdetta from './HeaderIdetta.js';*/
import PayReceipt from './payReceipt.js';
import './index.css';

 export class PayMethods extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       faceSelected: true,
       buttonInd: "individual2",
       buttonEnt: "entity2",
       selectedOption: "option1"
     }
   }

saveOrder = (e) => {
  this.props.saveOrder(e);
}
mainPage = (e) => {
  this.props.mainPage(e);
}
myOrderDelivery = (e)=> {
  this.props.myOrderDelivery(e);
}
selectPay = (e) => {
  if(this.state.selectedOption != "option1") e = "option1";
  else if (this.state.selectedOption != "option2") e = "option2";
  this.setState ({
    selectedOption: e
  })
}
showDelivery = (e) => {
  if(this.state.faceSelected == true) {
    if (this.state.selectedOption == "option3") this.setState ({
        selectedOption: "option1"
    })
     return(
      <div className="deliveryWindow">
       <table className="deliveryTable">
         <tbody>
           <tr><td><label><input type="radio"  name="radio" hidden checked={this.state.selectedOption == "option1"} onChange={this.selectPay}/><span></span> На сайте банковскими картами</label></td><td><svg xmlns="http://www.w3.org/2000/svg" width="163" height="30" viewBox="0 0 163 30">
               <defs>
                   <linearGradient id="a" x1="100%" x2="0%" y1="100%" y2="1.197%">
                       <stop offset="0%" stopColor="#0F62A9"/>
                       <stop offset="100%" stopColor="#319EC7"/>
                   </linearGradient>
               </defs>
               <g fill="none" fillRule="evenodd">
                   <path fill="#1A9E4E" d="M141.161 8.666l-3.081 6.647h-.313V7.22h-4.378v13.698h3.715c.976 0 1.863-.565 2.272-1.447l3.082-6.647h.312v8.094h4.378V7.219h-3.715c-.976 0-1.863.565-2.272 1.447M124.736 9.019l-1.823 6.294h-.313l-1.824-6.294a2.5 2.5 0 0 0-2.404-1.8H114v13.698h4.378v-8.094h.313l2.502 8.094h3.127l2.502-8.094h.312v8.094h4.378V7.22h-4.372a2.5 2.5 0 0 0-2.404 1.8M149.025 20.917h4.37v-4.359h4.699c2.041 0 3.773-1.3 4.418-3.113h-13.487v7.472z"/>
                   <path fill="url(#a)" d="M44.094.219h-9.695a6.87 6.87 0 0 0 6.763 5.603h7.528c.062-.301.095-.614.095-.933 0-2.58-2.1-4.67-4.691-4.67" transform="translate(114 7)"/>
                   <g>
                       <path fill="#005C9C" d="M69.901 6.649L67.51 21.188h3.828l2.393-14.54zM64.288 6.65l-3.649 9.999-.432-2.154v.001L58.92 7.958s-.156-1.309-1.817-1.309h-6.032L51 6.895s1.845.38 4.004 1.662l3.326 12.63h3.988l6.09-14.538h-4.12zM90.185 16.045l2.012-5.44 1.131 5.44h-3.143zm4.213 5.143h3.514L94.848 6.649H91.77c-1.42 0-1.767 1.084-1.767 1.084l-5.709 13.455h3.99l.798-2.16h4.867l.449 2.16zM84.594 10.145l.546-3.122s-1.686-.634-3.443-.634c-1.9 0-6.41.821-6.41 4.813 0 3.756 5.294 3.803 5.294 5.775 0 1.972-4.749 1.62-6.316.376l-.57 3.263s1.71.822 4.321.822c2.612 0 6.554-1.338 6.554-4.978 0-3.78-5.343-4.132-5.343-5.775 0-1.643 3.729-1.432 5.367-.54"/>
                       <path fill="#EE9F3F" d="M60.208 14.496L58.92 7.958s-.156-1.31-1.817-1.31h-6.032L51 6.896s2.9.594 5.682 2.82c2.658 2.129 3.526 4.78 3.526 4.78"/>
                   </g>
                   <g fillRule="nonzero">
                       <path fill="#231F20" d="M7.117 29.756v-1.978c.023-.337-.1-.667-.34-.907a1.194 1.194 0 0 0-.914-.346 1.238 1.238 0 0 0-1.12.56 1.173 1.173 0 0 0-1.053-.56 1.057 1.057 0 0 0-.933.468v-.389h-.694v3.152h.7v-1.734a.733.733 0 0 1 .191-.6.75.75 0 0 1 .59-.237c.46 0 .693.296.693.83v1.754h.7v-1.747a.736.736 0 0 1 .192-.6.754.754 0 0 1 .588-.237c.473 0 .7.296.7.83v1.754l.7-.013zm10.356-3.152h-1.14v-.956h-.7v.956H15v.627h.647v1.45c0 .732.286 1.167 1.106 1.167a1.64 1.64 0 0 0 .867-.244l-.2-.586a1.29 1.29 0 0 1-.613.178c-.334 0-.46-.211-.46-.528v-1.437h1.133l-.007-.627zm5.914-.079a.942.942 0 0 0-.84.462v-.383h-.687v3.152h.693v-1.767c0-.52.227-.811.667-.811.148-.002.296.025.433.08l.214-.66a1.498 1.498 0 0 0-.494-.086l.014.013zm-8.94.33a2.404 2.404 0 0 0-1.3-.33c-.807 0-1.334.383-1.334 1.01 0 .513.387.83 1.1.929l.334.046c.38.053.56.152.56.33 0 .244-.254.382-.727.382a1.71 1.71 0 0 1-1.06-.33l-.333.534c.404.28.887.423 1.38.41.92 0 1.453-.43 1.453-1.03 0-.6-.42-.843-1.113-.942l-.334-.046c-.3-.04-.54-.1-.54-.31 0-.211.227-.37.607-.37a2.07 2.07 0 0 1 1 .27l.307-.553zm18.57-.33a.942.942 0 0 0-.84.462v-.383h-.687v3.152h.693v-1.767c0-.52.227-.811.667-.811.148-.002.296.025.433.08l.214-.66a1.498 1.498 0 0 0-.494-.086l.014.013zm-8.934 1.649c-.016.447.159.882.482 1.195a1.62 1.62 0 0 0 1.218.453c.417.02.826-.113 1.147-.376l-.333-.554c-.24.181-.532.28-.834.284a1.017 1.017 0 0 1-.94-1.009c0-.527.409-.966.94-1.009.302.004.594.103.834.284l.333-.554a1.679 1.679 0 0 0-1.147-.376 1.62 1.62 0 0 0-1.218.453 1.583 1.583 0 0 0-.482 1.195v.014zm6.494 0v-1.57h-.694v.383a1.215 1.215 0 0 0-1-.462c-.92 0-1.666.738-1.666 1.649 0 .91.746 1.648 1.666 1.648.39.014.761-.158 1-.462v.383h.694v-1.57zm-2.58 0a.96.96 0 0 1 .997-.896c.524.019.936.449.928.967a.958.958 0 0 1-.959.937.962.962 0 0 1-.706-.295.94.94 0 0 1-.26-.713zm-8.367-1.649a1.657 1.657 0 0 0-1.643 1.672c.013.91.77 1.638 1.69 1.625A1.95 1.95 0 0 0 21 29.393l-.333-.507c-.264.208-.59.324-.927.33a.88.88 0 0 1-.953-.772h2.366v-.264c0-.989-.62-1.648-1.513-1.648l-.01-.007zm0 .613a.795.795 0 0 1 .564.218c.15.143.238.34.243.547H18.77a.817.817 0 0 1 .847-.765h.013zM37 28.18v-2.842h-.667v1.649a1.215 1.215 0 0 0-1-.462c-.92 0-1.666.738-1.666 1.649 0 .91.746 1.648 1.666 1.648.39.014.761-.158 1-.462v.383H37V28.18zm1.157 1.118a.337.337 0 0 1 .23.089.304.304 0 0 1 0 .442.334.334 0 0 1-.104.066.316.316 0 0 1-.126.026.334.334 0 0 1-.3-.191.307.307 0 0 1 .173-.41.337.337 0 0 1 .137-.022h-.01zm0 .557a.239.239 0 0 0 .173-.073.242.242 0 0 0 0-.33.247.247 0 0 0-.173-.072.252.252 0 0 0-.177.073.242.242 0 0 0 0 .33c.023.022.05.04.08.052a.25.25 0 0 0 .107.02h-.01zm.02-.392a.134.134 0 0 1 .086.026c.021.017.032.043.03.07a.079.079 0 0 1-.023.059.117.117 0 0 1-.07.03l.097.108h-.077l-.09-.109h-.03v.109h-.063v-.29l.14-.003zm-.074.056v.079h.074a.07.07 0 0 0 .04 0 .033.033 0 0 0 0-.03.033.033 0 0 0 0-.03.07.07 0 0 0-.04 0l-.074-.02zm-3.666-1.339a.96.96 0 0 1 .997-.896c.524.02.936.45.928.968a.958.958 0 0 1-.959.937.962.962 0 0 1-.706-.295.94.94 0 0 1-.26-.714zm-23.41 0v-1.576h-.694v.383a1.215 1.215 0 0 0-1-.462c-.92 0-1.666.738-1.666 1.649 0 .91.746 1.648 1.666 1.648.39.014.761-.158 1-.462v.383h.694V28.18zm-2.58 0a.96.96 0 0 1 .997-.896c.524.02.936.45.928.968a.958.958 0 0 1-.959.937.962.962 0 0 1-.71-.293.94.94 0 0 1-.263-.716h.007z"/>
                       <path fill="#FF5F00" d="M14.217 2.588h10.5V21.25h-10.5z"/>
                       <path fill="#EB001B" d="M14.883 11.92a11.801 11.801 0 0 1 4.584-9.332C14.547-1.236 7.48-.68 3.236 3.868a11.773 11.773 0 0 0 0 16.103c4.245 4.547 11.31 5.104 16.23 1.28a11.801 11.801 0 0 1-4.583-9.33z"/>
                       <path fill="#F79E1B" d="M38.883 11.92c0 4.545-2.623 8.69-6.756 10.676a12.109 12.109 0 0 1-12.66-1.345 11.821 11.821 0 0 0 4.585-9.332c0-3.641-1.69-7.081-4.585-9.331a12.109 12.109 0 0 1 12.66-1.345c4.133 1.986 6.756 6.13 6.756 10.675v.003zM37.737 19.273v-.383h.156v-.079h-.396v.08h.17v.382h.07zm.77 0v-.462h-.12l-.14.33-.14-.33H38v.462h.087v-.347l.13.3h.09l.13-.3v.35l.07-.003z"/>
                   </g>
               </g></svg></td></tr>
           <tr><td><label><input type="radio"  name="radio" hidden checked={this.state.selectedOption == "option2"} onClick={this.selectPay}/><span></span> При получении заказа (картой или наличными)</label></td></tr>
         </tbody>
       </table>
     </div>)
  }
  else {
    if (this.state.selectedOption != "option3") this.setState ({
        selectedOption: "option3"
    })
    return (
    <div className="deliveryWindow">
    <p className="beznal"><label><input type="radio" name="radio" value="beznal" hidden checked={this.state.selectedOption == "option3"} /><span></span> Безналичный расчет юр. лицам</label></p>
    <table id="requisites">
    <tbody>
    <tr><td>ООО / ИП</td><td>Наименование</td></tr>
    <tr><td>Адрес юр. лица</td><td>Банк</td></tr>
    <tr><td>ИНН</td><td>БИК</td></tr>
    <tr><td>КПП</td><td>Расчетный счет</td></tr>
    <tr><td>ОГРН / ОГРНИП</td><td>Корс. счет</td></tr>
  </tbody>
    </table>
    <div className="checkbox">
      <input type="checkbox" id="check"  checked={this.state.isChecked} /><label htmlFor="check">  Даю согласие на обработку моих персональных данных</label>
    </div>
    </div>)
  }
}
selectFace = (e) => {
  if(e == false) {this.ind = "individual"; this.ent = "entity"}
  else {this.ind = "individual2"; this.ent = "entity2"}
  this.setState({
    faceSelected: e,
    buttonInd: this.ind,
    buttonEnt: this.ent
  })
}


render(){
  if (this.props.payReceipt == false){
    return (
      <div className="makeOrder">
        <h3>Способы оплаты</h3>
        <div className="buttonsFace">
        <button id = {this.state.buttonInd} onClick={(e)=>{this.selectFace(true);}}>ФИЗ. ЛИЦО</button>
        <button id = {this.state.buttonEnt} onClick={(e)=>{this.selectFace(false);}}>ЮР. ЛИЦО</button>
        </div>
        {this.showDelivery()}
        <div className="orderButton">
          <h3>Итого: {this.props.lastPrice} <span className="rub">Р</span></h3>
          <button id="sign-in-modal" onClick={(e)=>{this.props.payReceiptChange(e);}}>Оформить заказ</button>
        </div>
          </div>
        );
  }
  else return (<PayReceipt saveOrder={this.saveOrder} myOrderDelivery={this.myOrderDelivery} mainPage={this.mainPage} orderGet={this.props.orderGet} priceDelivery={this.props.priceDelivery} saveArrayBasket = {this.props.saveArrayBasket} lastPrice = {this.props.lastPrice} selectedOption = {this.state.selectedOption}/>)
    }
}
  /*  <button id="order">Перейти в "Мои заказы"</button> */

export default PayMethods;
