import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
//import * as reducers from './store/reducers';
//const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
class App extends React.Component{
  state = {gorod: "Казань"}
  render(){
    return(
      <div class="wrapper">

        <div class="content">

          <div id="something">
            <Rotute />
          </div>
        </div>
        <div class="footer"><Vniz /></div>
      </div>
    )
  }
}
class Onas extends React.Component{
  render(){
    return(
      <div>
        <div id="poiskverh"><Poisk/></div>
        <div id = "onasru">О нас</div>
          <div id = "onasopis">Idetta.ru — это интерент платформа объединяющая магазины автозапчастей, присутствующая в более чем 40 городах европейской части России. Магазины предлагают широкий выбор автозапчастей, аксессуаров и других, необходимых для автовладельцев товаров.<br/>
        Во всех магазинах сети представлено более 12 000 наименований товаров высокого качества.<br/>
        В более чем 80 магазинах сети работают отделы по продаже запчастей для иномарок. Всегда в наличии наиболее востребованный ассортимент, а также есть возможность заказать любые запчасти.<br/>
        Магазины осуществляют реализацию товаров за наличный и безналичный расчет физическим и юридическим лицам.</div>
        </div>
    )
  }
}
class Dostavka extends React.Component{
  render(){
    return(
      <div>
        <div id="poiskverh"><Poisk/></div>
          <div id="dostavkaru">Доставка</div>
          <div id="dostavkaopis">В настоящий момент для Вашего региона доступна только услуга самовывоза.<br/>
            Самовывоз заказов, оформленных через интернет магазин, в Вашем регионе осуществляется в следующих магазинах.<br/>
            Услуга самовывоза доступна только в рабочее время магазинов. Самовывоз из магазинов является полностью бесплатным.<br/>
            Оформление некоторых заказов может требовать внесения предоплаты.<br/>
            Выдаче подлежат только оплаченные заказы.<br/>
            Если Вы оформляете заказ из наличия магазина, то мы Вам рекомендуем дождаться подтверждения наличия товара: СМС или звонка из нашего контакт-центра.<br/>
            Сроки поставки товара не из наличия магазина, указанные при оформлении заказа, могут измениться. О готовности Вашего заказа к Выдаче мы дополнительно сообщим Вам по телефону или СМС.<br/>
            Для получения своего заказа самовывозом Вам необходимо обратиться к любому сотруднику магазина, назвать номер своего заказа (будет отправлен по СМС или доступен в личном кабинете - для зарегистрированных пользователей), провести оплату или подтвердить факт ранее проведенной оплаты заказа.<br/>
            При выкупе заказов самовывозом Вы можете воспользоваться всеми преимуществами программы лояльности (получить бонусную карту, потратить накопленные бонусные баллы, или получить их).<br/>
            По всем вопросам, связанным с самовывозом, Вы можете обращаться в наш контакт-центр.
</div>
        </div>
    )
  }
}
class Oplata extends React.Component{
  render(){
    return(
      <div>
      <div id="poiskverh"><Poisk/></div>
      <div id ="oplataru">Оплата</div>
      <div id="oplataru1">Правила оплаты</div>
      <div id="oplataopis">Уважаемые клиенты, по некоторым заказам, требуется внесение предоплаты 50 или 100% от стоимости заказа.<br/>
Внесение предоплаты, как правило, необходимо в ситуации, когда Ваш заказ требует индивидуального заказа товара специально для Вас у поставщиков.<br/>
В случае Вашего отказа от заказа, предоплата возвращается в течении 10 дней после получения Вашего обращения о возврате.<br/>
Предоплата, а также оплата заказа могут быть произведены следующими способами:<br />— банковской картой на Сайте при оформлении заказа;<br />— наличными или банковской картой в магазине «Би-Би».<br/>
Предоплата и последующая оплата могут быть проведены различными способами.<br/>
Цены в Интернет-магазине могут отличаться от цен розничных магазинов «Би-Би».<br/><br/><br/>                 Правила оплаты банковской картой<br/><br/>
К оплате принимаются платежные карты: VISA Inc, MasterCard WorldWide.<br/>
Оплата производится в соответствии с договором оферты.<br/>
Для оплаты товара банковской картой при оформлении заказа в интернет-магазине выберите Способ оплаты: банковской картой.<br/>
При оплате заказа банковской картой, обработка платежа происходит на авторизационной странице ПАО «МОСКОВСКИЙ КРЕДИТНЫЙ БАНК», где Вам необходимо вести данные Вашей банковской карты:<br />тип карты<br />номер карты<br />срок действия карты (указан на лицевой стороне карты)<br />Имя держателя карты (латинскими буквами, точно также как указано на карте)<br />CVC2/CVV2 код<br/>
Далее нажать на кнопку «ОПЛАТИТЬ».<br/>
Для дополнительной аутентификации держателя карты используется протокол 3D Secure. Если Ваш Банк поддерживает данную технологию, Вы будете перенаправлены на сервер Вашего Банка для дополнительной идентификации. Информацию о правилах и методах дополнительной идентификации уточняйте в Банке, выдавшем Вам банковскую карту.<br/>
Безопасность обработки интернет-платежей через ПАО «МОСКОВСКИЙ КРЕДИТНЫЙ БАНК» гарантирована международным сертификатом безопасности PCI DSS.<br/>
Передача информации происходит с применением технологии шифрования SSL.<br/><br /><br />Мерам безопасности проведения платежей с использованием банковской карты: <br /><br />
Берегите свои пластиковые карты так же, как бережете наличные деньги. Не забывайте их в машине, ресторане, магазине и т.д.<br />
Никогда не передавайте номер своей кредитной карты по телефону каким-либо лицам или компаниям.<br />
Всегда имейте под рукой номер телефона для экстренной связи с банком, выпустившим вашу карту, и в случае ее утраты немедленно свяжитесь с банком.<br />
Вводите реквизиты карты только при совершении покупки. Никогда не указывайте их по каким-то другим причинам.<br />
Проверьте, установлено ли защищенное SSL-соединение: адрес в адресной строке должен начинаться с https:// и в правом нижнем углу браузера должно появиться изображение замка.

      </div>

      </div>
    )
  }
}
class Vozvrat extends React.Component{
  render(){
    return(
      <div>
        <div id="poiskverh"><Poisk/></div>
        <div id="vozvratru">Возврат и гарантия</div>
        <div id="vozvratopis">
          Уважаемые Покупатели, Вы вправе отказаться от заказанного товара в любое время до его получения, <br />а после его получения — в течение 7-ми дней, при условии сохранения качества.<br/>
          Возврат товара надлежащего качества <br/>
          Возможен в случае, если указанный товар не был в употреблении, сохранены его товарный вид, потребительские свойства, пломбы, фабричные ярлыки, а также имеется товарный чек или кассовый чек либо иной подтверждающий оплату указанного товара документ.<br/>
          Покупатель проверяет Товар при получении с целью выявления возможных механических повреждений, полноты комплектности и ассортимента. Продавец не принимает претензии по внешним недостаткам Товара, его количественного и ассортиментного несоответствия после приемки Товара Покупателем.<br/>
          В случае получения товара ненадлежащего качества Вы вправе отказаться от товара и/или возвратить его, а также потребовать возврата уплаченной за товар денежной суммы.<br/>
          Право на возврат распространяется только на те товарные группы, которые предусмотрены действующим законодательством РФ. Изделия, поставляемые в комплекте, принимаются только в комплекте.<br/>
          Вы не вправе отказаться от товара надлежащего качества, имеющего индивидуально-определенные свойства, если указанный товар может быть использован исключительно Вами.<br/>
          <p/>Возврат товара ненадлежащего качества<p/> <br/>
          Возврат товара ненадлежащего качества возможен в течение гарантийного срока. Сроки гарантии на товар составляют от 2 недель до 36 месяцев. Гарантия распространяется не на весь товар. Гарантийный срок исчисляется с момента получения Товара Покупателем.
          С требованием о возврате товара Вы можете обратиться в любой из наших магазинов, указанных в разделе магазины или по телефону, указанному на сайте.<br/>
          Возврат денежных средств <br/>
          Возврат денежных средств при возврате Покупателем товара производится на основании письменного заявления Покупателя. К заявлению прикладывается копия документа, удостоверяющего личность Покупателя. При оплате покупки наличными, сотрудник магазина вернет Вам деньги сразу. При получении денежных средств наличными Вас также могут попросить предъявить документ, удостоверяющий личность.
          В случае оплаты товара банковской картой, возврат денежных средств возможен только на банковскую карту, с которой проводился платеж.
          Возврат аванса по предоплаченным заказам до их получения осуществляется автоматически по факту отмены заказа.
          Доп.информация:<a href="/oferta">«Возврат товара и гарантия» договора оферты</a><br/>
        </div>
      </div>
    )
  }
}
class Oferta extends React.Component{
  render(){
    return(
      <div>
      <div id="poiskverh"><Poisk/></div>
      <div id="ofertaru">Договор оферты</div>

      </div>
    )
  }
}
const Rotute = () => (
  <div>
    <Switch>

      <Route path='/about' component={Onas}/>
      <Route path='/dostavka' component={Dostavka}/>
      <Route path='/oplata' component={Oplata}/>
      <Route path='/vozvrat' component={Vozvrat}/>
      <Route path='/oferta' component={Oferta}/>
    </Switch>
  </div>
)


class Poisk extends React.Component{
  searcher(event){
    console.log(event.target.value);
  }
  render(){
    return(
      <div>
      <input id="poisk1" type="search" name="q" placeholder="    Артикул, VIN или марка автомобиля" onChange={this.searcher}></input>
      <button id="nayti1"><div id="texty1">Найти</div></button>
      </div>
    )
  }
}

class Vniz extends React.Component{
  render(){
    return(
      <div id="foot" class="footer">
        <div id="logo2"><div class="tekstt">© 2019 idetta.ru</div></div>
        <a id="onas" class="a" href="/about"><div class="tekstt">О нас</div></a>
        <a id="dostavka" class="a" href="/dostavka"><div class="tekstt">Доставка</div></a>
        <a id="oplata" class="a" href="/oplata"><div class="tekstt">Оплата</div></a>
        <a id="vozvrat" class="a" href="/vozvrat"><div class="tekstt">Возврат и гарантия</div></a>
        <a id="oferta" class="a" href="/oferta"><div class="tekstt">Оферта</div></a>
        <div id="telefon"><div class="tekstt">8 800 200 90 70</div></div>
        <div class="tekstt"><button id="zvonok" >Заказать звонок</button></div>
      </div>
    )
  }
}


const doc = document.getElementById("root");
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>),
  doc
);
