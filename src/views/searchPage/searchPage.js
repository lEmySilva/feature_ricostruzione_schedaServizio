import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';

import RelatedComponent from '../../components/relatedComponent/related';

import '../../BaseLayoutItems/css/personalizedPage.css';

import logo_it from '../../BaseLayoutItems/images/logo-it.svg';
import agid_logo_bb from '../../BaseLayoutItems/images/agid-logo-bb.svg';

import icoPagoPA from '../../BaseLayoutItems/images/icoPagoPA.png';
import icoPagoPA_off from '../../BaseLayoutItems/images/icoPagoPA_off.png';

import icoSpid from '../../BaseLayoutItems/images/icoSpid.png';
import icoSpid_off from '../../BaseLayoutItems/images/icoSpid_off.png';

var numberOfToolTipID = 0,
  offsetUrl = 0,
  limitUrl = 10;
var valueSearch,businessOrLifeEvents;
var businessEvents,lifeEvents;
var self;
var FareLaChiamareAjax = true;
var clickCaricaAltriRisultati = -1;


export default class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valueSearched: null,
      countOfServiceSearch: 0
    };
  }

  ReloadPage() {
    window
      .location
      .reload(true);
  }

  disabilitaBottoneCaricaAltriElelementi()
  {
    document
      .getElementById('caricaAltriElementi')
      .innerHTML = "Non ci sono altri risultati";
    document
      .getElementById('caricaAltriElementi')
      .classList
      .remove('Button');
  }
  abilitaBottoneCaricaAltriElelementi()
  {
    document
      .getElementById('caricaAltriElementi')
      .innerHTML = "Carica altri risultati";
    document
      .getElementById('caricaAltriElementi')
      .classList
      .add('Button');
  }

  ChiamataAjax() {

    var input = valueSearch;
    clickCaricaAltriRisultati++;
    self = this;
    /* console.log('log'+this.props);
      var URL = this.props.url + input; */
    // var URL =
    // 'http://52.174.123.110:8000/services/search/'+input+'*?offset=0&limit=10';
    var URL = 'http://servicesearchfacade.azurewebsites.net/services/search/' + input + '*?offset=' + offsetUrl + '&limit=' + limitUrl + '&businessEvents=' + businessEvents + '&lifeEvents=' + lifeEvents ;

    if (FareLaChiamareAjax == true) {

      axios
        .get(URL, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            crossdomain: true
          }
        })
        .then(function (response) {

          // console.log("length:"+response.data.length); console.log("eseguo chiamata
          // ajax");  console.log("response: ");  console.log("response:
          // "+response.data['@odata.count']);
          self.setState({countOfServiceSearch: response.data['@odata.count']})

          for (var i = 0; i < response.data.value.length; i++) {
            numberOfToolTipID++;
            self.creaComponentSchedaServizio(response.data.value[i]);
          };
          var quanteVoltePuoiPremereTasto = Math.ceil(response.data['@odata.count'] / 10);

          if (response.data['@odata.count'] <= 10 || clickCaricaAltriRisultati > 1) {
            if (clickCaricaAltriRisultati <= quanteVoltePuoiPremereTasto) {
              self.disabilitaBottoneCaricaAltriElelementi();
              FareLaChiamareAjax = false;
            }

          } else {
            self.abilitaBottoneCaricaAltriElelementi();
            FareLaChiamareAjax = true;
          }
          //aumento offset
          offsetUrl += 10;
          self.hideCubeLoaderSpin();
          self.YesDispayServizi();

        })
        .catch(function (error) {
          console.log(error);
        });

    }
  } //end chiamata ajax

  creaComponentSchedaServizio(arrayInput)
  {

    var div1 = document.createElement('DIV');
    div1.setAttribute('class', 'u-background-grey-10 u-color-grey-50  u-padding-all-l u-margin-bottom-l');

    var div2 = document.createElement('DIV');
    div2.setAttribute('class', 'Grid');

    var div3 = document.createElement('DIV');
    div3.setAttribute('class', 'Grid-cell u-md-size5of6 u-lg-size5of6 u-padding-right-xl');

    var h3_1 = document.createElement('H3');
    h3_1.setAttribute('class', 'u-padding-r-bottom');

    if (arrayInput.alternativeName != null) {
      var h3_1_textNode = document.createTextNode(arrayInput.alternativeName);
    } else {
      var h3_1_textNode = document.createTextNode(arrayInput.name);
    }
    h3_1.appendChild(h3_1_textNode);

    //mettiamo h3_1 all'interno del div3
    div3.appendChild(h3_1);

    var div4 = document.createElement('DIV');
    div4.setAttribute('class', 'Grid-cell u-md-size1of6 u-lg-size1of6 u-textRight');

    var img_PagoPA = document.createElement('IMG');

    if (arrayInput.pagoPA == true) {
      img_PagoPA.setAttribute('src', icoPagoPA);
      img_PagoPA.setAttribute('class', 'm-r-5');
      img_PagoPA.setAttribute('alt', 'Prevista autenticazione con PagoPA');
      img_PagoPA.setAttribute('title', 'Prevista autenticazione con PagoPA');
    } else {
      img_PagoPA.setAttribute('src', icoPagoPA_off);
      img_PagoPA.setAttribute('class', 'm-r-5');
      img_PagoPA.setAttribute('alt', 'Non prevista autenticazione con PagoPA');
      img_PagoPA.setAttribute('title', 'Non Prevista autenticazione con PagoPA');
    }

    var img_SPID = document.createElement('IMG');

    if (arrayInput.spid == true) {
      img_SPID.setAttribute('src', icoSpid);
      img_SPID.setAttribute('alt', 'Prevista autenticazione con SPID');
      img_SPID.setAttribute('title', 'Prevista autenticazione con SPID');
    } else {
      img_SPID.setAttribute('src', icoSpid_off);
      img_SPID.setAttribute('alt', 'Non prevista autenticazione con SPID');
      img_SPID.setAttribute('title', 'Non Prevista autenticazione con SPID');
    }
    //Appendo i figli(img_PagoPA,SPID) al div 4
    div4.appendChild(img_PagoPA);
    div4.appendChild(img_SPID);

    var p1 = document.createElement('P');
    //Descrizione aggiunta nel p1TextNode
    var p1TextNode = document.createTextNode(arrayInput.description);
    p1.setAttribute('class', 'u-lineHeight-l u-text-r-xs u-textSecondary u-padding-r-right  u-padding-r-bottom');
    p1.appendChild(p1TextNode);

    var div5 = document.createElement('DIV');
    div5.setAttribute('class', 'Grid');

    var div6 = document.createElement('DIV');
    div6.setAttribute('class', 'Grid-cell u-md-size1of2 u-lg-size1of2 u-padding-right-xl');

    var ul_1 = document.createElement('class', 'u-layout-prose u-text-r-x');
    ul_1.setAttribute('class', 'u-layout-prose u-text-r-x');

    var li_ErogatoreServizio = document.createElement('LI');
    li_ErogatoreServizio.setAttribute('class', 'u-padding-bottom-xs no-ListStyle');
    var p_ErogatoreServizio = document.createElement('P');
    var p_ErogatoreServizio_textNode = document.createTextNode(arrayInput.serviceOwner);
    var strong_ErogatoreServizio = document.createElement('STRONG');
    var strong_ErogatoreServizio_textNode = document.createTextNode('Erogatore servizio: ');
    strong_ErogatoreServizio.appendChild(strong_ErogatoreServizio_textNode);
    //appendo prima lo strong alla p_ErogatoreServizio e poi p_textnode
    p_ErogatoreServizio.appendChild(strong_ErogatoreServizio);
    p_ErogatoreServizio.appendChild(p_ErogatoreServizio_textNode);
    //appendo la p_ErogatoreServizio al li
    li_ErogatoreServizio.appendChild(p_ErogatoreServizio);
    //appendo li al ul
    ul_1.appendChild(li_ErogatoreServizio);

    var li_Tema = document.createElement('LI');
    li_Tema.setAttribute('class', 'u-padding-bottom-xs no-ListStyle');
    var p_Tema = document.createElement('P');
    var p_Tema_textNode = document.createTextNode(arrayInput.themes);
    var strong_Tema = document.createElement('STRONG');
    var strong_Tema_textNode = document.createTextNode('Tema: ');
    strong_Tema.appendChild(strong_Tema_textNode);
    //appendo prima lo strong alla p_ErogatoreServizio e poi p_textnode
    p_Tema.appendChild(strong_Tema);
    p_Tema.appendChild(p_Tema_textNode);
    //appendo la p_ErogatoreServizio al li
    li_Tema.appendChild(p_Tema);
    //appendo li al ul
    ul_1.appendChild(li_Tema);

    var li_LivelloInterazione = document.createElement('LI');
    li_LivelloInterazione.setAttribute('class', 'u-padding-bottom-xs no-ListStyle');
    var p_LivelloInterazione = document.createElement('P');
    var p_LivelloInterazione_textNode = document.createTextNode(arrayInput.interactivityLevel + " ");
    var strong_LivelloInterazione = document.createElement('STRONG');
    var strong_LivelloInterazione_textNode = document.createTextNode('Livello interazione: ');
    strong_LivelloInterazione.appendChild(strong_LivelloInterazione_textNode);
    var a_1_LivelloInterazione = document.createElement('A');
    a_1_LivelloInterazione.setAttribute('href', '#tooltip' + numberOfToolTipID);
    a_1_LivelloInterazione.setAttribute('class', 'Tooltip-toggle u-textClean u-color-black');
    a_1_LivelloInterazione.setAttribute('data-menu-trigger', 'tooltip' + numberOfToolTipID);
    var span_1_LivelloInterazione = document.createElement('SPAN');
    span_1_LivelloInterazione.setAttribute('class', 'u-text-r-xs Icon Icon-info');
    span_1_LivelloInterazione.setAttribute('text', 'tootip');
    // appendo lo span al a_1_LivelloInterazione a_1_LivelloInterazione (il
    // bottoncino della i vicino al livello di interazione) connesso al tooltip
    // commentato a_1_LivelloInterazione.appendChild(span_1_LivelloInterazione);
    // appendo prima lo strong alla p_ErogatoreServizio e poi p_textnode
    p_LivelloInterazione.appendChild(strong_LivelloInterazione);
    p_LivelloInterazione.appendChild(p_LivelloInterazione_textNode);
    p_LivelloInterazione.appendChild(a_1_LivelloInterazione);
    //appendo la p_ErogatoreServizio al li
    li_LivelloInterazione.appendChild(p_LivelloInterazione);

    // TOOLTIP   var span_2_LivelloInterazione = document.createElement('SPAN');
    // span_2_LivelloInterazione.setAttribute('id','tooltip'+numberOfToolTipID);
    // span_2_LivelloInterazione.setAttribute('data-menu','');
    // span_2_LivelloInterazione.setAttribute('class','Dropdown-menu u-borderShadow-m
    // u-background-teal-70 u-color-white u-layout-prose u-padding-r-all
    // u-borderRadius-l');       var span_3_LivelloInterazione =
    // document.createElement('SPAN');
    // span_3_LivelloInterazione.setAttribute('class','Icon-drop-down Dropdown-arrow
    // u-color-teal-70');       var span_4_LivelloInterazione =
    // document.createElement('SPAN');
    // span_4_LivelloInterazione.setAttribute('class','u-layout-prose
    // u-text-r-xxs');         var span_4_LivelloInterazione_textNode =
    // document.createTextNode(arrayInput.interactivityLevelDescription);
    // span_4_LivelloInterazione.appendChild(span_4_LivelloInterazione_textNode);
    // //appendo lo span 3 e 4 allo span 2
    // span_2_LivelloInterazione.appendChild(span_3_LivelloInterazione);
    // span_2_LivelloInterazione.appendChild(span_4_LivelloInterazione); //appendo
    // span al li_LivelloInterazione
    // li_LivelloInterazione.appendChild(span_2_LivelloInterazione); appendo li al
    // ul
    ul_1.appendChild(li_LivelloInterazione);

    //appendo la ul_1 al div 6
    div6.appendChild(ul_1);

    //appendo la div6 alla div5
    div5.appendChild(div6);

    var div7 = document.createElement('DIV');
    div7.setAttribute('class', 'Form-field Grid-cell u-md-size1of2 u-lg-size1of2 u-textRight u-padding-top-xxl u' +
        '-padding-bottom-s');
    div7.setAttribute('id', arrayInput.id)
    var a_div7 = document.createElement('A');
    a_div7.setAttribute('href', '/servicePage');
    /*  a_div7.setAttribute('href','#'); */
    a_div7.setAttribute('onClick', "ServiceSelected(event)");
    a_div7.setAttribute('class', 'Button Button--default u-textNoWrap u-background-60 u-color-white u-textWeight-6' +
        '00 u-padding-left-s  u-padding-right-xs  u-padding-top-xs u-padding-bottom-xs u-' +
        'margin-bottom-xs u-textUppercase u-borderRadius-s u-linkClean u-margin-left-m');
    var a_div7_textNode = document.createTextNode('Dettagli Servizio');
    var span_a_div7 = document.createElement('SPAN')
    span_a_div7.setAttribute('class', 'u-text-r-xs u-margin-left-xxs Icon Icon-file');

    //appendiamo textNode al anchor e span all'anchjor
    a_div7.appendChild(a_div7_textNode);
    a_div7.appendChild(span_a_div7);

    if (arrayInput.status.toLowerCase() == "Attivo".toLowerCase()) {

      var a_8 = document.createElement('A');
      var span_a_8 = document.createElement('SPAN');
      span_a_8.setAttribute('class', 'agg u-text-r-xs u-margin-left-xxs Icon Icon-chevron-right');
      a_8.setAttribute('class', '  Button Button--default u-textNoWrap u-background-60 u-color-white u-textWeight' +
          '-600 u-padding-left-s  u-padding-right-xs  u-padding-top-xs u-padding-bottom-xs ' +
          'u-margin-bottom-xs u-textUppercase u-borderRadius-s u-linkClean u-margin-left-m');
      a_8.setAttribute('href', arrayInput.serviceUrl);
      a_8.setAttribute('target', '_blank');
      var a_8_textNode = document.createTextNode('Vai al Servizio');

      a_8.appendChild(a_8_textNode);
      a_8.appendChild(span_a_8);
    } else {
      var div8 = document.createElement('DIV');
      var span_div8 = document.createElement('SPAN');
      span_div8.setAttribute('class', 'u-text-r-xs u-margin-left-xxs Icon Icon-close');
      div8.setAttribute('class', 'Button Button--default is-disabled u-textNoWrap u-background-grey-40 u-color-whi' +
          'te u-textWeight-600 u-padding-left-s  u-padding-right-xs  u-padding-top-xs u-pad' +
          'ding-bottom-xs u-margin-bottom-xs u-textUppercase u-borderRadius-s u-linkClean u' +
          '-margin-left-m');
      var div8_textNode = document.createTextNode('Servizio Non Attivo');

      div8.appendChild(div8_textNode);
      div8.appendChild(span_div8);

    }

    //append div 3 e 4 al div2
    div2.appendChild(div3);
    div2.appendChild(div4);

    //append div8 al div7
    div7.appendChild(a_div7);

    //il tasto vai al servizio non viene visualizzato
    if (arrayInput.status.toLowerCase() == "Attivo".toLowerCase()) {
      div7.appendChild(a_8);
    } else {/* div7.appendChild(div8); */
    }

    //div7 =>div5
    div5.appendChild(div7);

    //FINAL APPEND
    div1.appendChild(div2);
    div1.appendChild(p1);
    div1.appendChild(div5);

    document
      .getElementById('ContainerServizi')
      .appendChild(div1);

    //ricarico lo script di agid
    /*       var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.type= 'text/javascript';
      script.src= './BaseLayoutItems/script/jquery.min.js';
      head.appendChild(script);

               //ricarico lo script di agid
      var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.type= 'text/javascript';
      script.src= './BaseLayoutItems/script/IWT.min.js';
      head.appendChild(script);  */

  }

  YesDispayServizi()
  {
    document
      .getElementById('containerSearchBarAndServizi')
      .style
      .display = "inline";
    document
      .getElementById('ContentBody')
      .style
      .height = "initial";
  }

  NoneDisplayServizi()
  {
    document
      .getElementById('containerSearchBarAndServizi')
      .style
      .display = "none";
    document
      .getElementById('ContentBody')
      .style
      .height = "fit-content";
  }

  hideCubeLoaderSpin()
  {
    document
      .getElementById('skFoldingCube')
      .style
      .display = "none";
  }

  showCubeLoaderSpin()
  {
    //l'elemento che contiene le parti dello spinner
    document
      .getElementById('skFoldingCube')
      .style
      .display = "inherit";

  }

  componentDidMount() {

    this.showCubeLoaderSpin();
    this.NoneDisplayServizi();

    /*       var url_string = window.location.href; //window.location.href

      var valueSearch = this.getParameterByName('searchedTag',url_string); */
    valueSearch = window
      .sessionStorage
      .getItem('searchedValue')
      .trim();

      businessOrLifeEvents= window.sessionStorage.getItem('businessOrLifeEvents').trim();

      if(businessOrLifeEvents==='cittadino'){
        businessEvents=false;
        lifeEvents=true;
      }
      else{
        businessEvents=true;
        lifeEvents=false;
      }
    //this.setState({valueSearched:valueSearch});

    self = this;

    this.ChiamataAjax(valueSearch);

    this.setState({valueSearched: valueSearch});

  }

  render() {
    return (

      <div>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/> {/* include HTML5shim per Explorer 8 */}
        <link media="all" rel="stylesheet" href="../BaseLayoutITEMS/css/build.css"/>
        <link media="all" rel="stylesheet" href="../BaseLayoutITEMS/css/font.css"/>
        <link media="all" rel="stylesheet" href="../BaseLayoutITEMS/css/main.css"/>

        <title>Risultati ricerca</title>
        <div
          id="cookie-bar"
          className="CookieBar js-CookieBar u-background-95 u-padding-r-all"
          aria-hidden="true">
          <p className="u-color-white u-text-r-xs u-lineHeight-m u-padding-r-bottom">Questo sito utilizza cookie tecnici, analytics e di terze parti.
            <br/>Proseguendo nella navigazione accetti l’utilizzo dei cookie.<br/>
          </p>
          <p>
            <button
              className="Button Button--default u-text-r-xxs js-cookieBarAccept u-inlineBlock u-margin-r-all">Accetto</button>
            <a href="" className="u-text-r-xs u-color-teal-50">Privacy policy</a>
          </p>
        </div>
        <div className="u-background-95">
          <div className="u-layout-wide u-layoutCenter">
            <ul className="Skiplinks js-fr-bypasslinks u-hiddenPrint">
              <li>
                <a href="#main">Vai al Contenuto</a>
              </li>
              <li>
                <a
                  className="js-fr-offcanvas-open"
                  href="#menu"
                  aria-controls="menu"
                  aria-label="accedi al menu"
                  title="accedi al menu">Vai alla navigazione del sito</a>
              </li>
            </ul>
            <header className="Header  u-hiddenPrint">
              <div className="Header-banner u-background-50">
                <div className="Header-owner Headroom-hideme u-border-bottom-xxs">
                  <a href="#">
                    <span>AgID
                      <span className="u-hidden u-md-inline u-lg-inline u-sm-inline">- Agenzia per l'Italia Digitale</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="Header-navbar u-background-50">
                <div className="u-layout-wide Grid Grid--alignMiddle u-layoutCenter">
                  <div className="Header-logo Grid-cell" aria-hidden="true">
                    <a href="" tabIndex={-1}>
                      <img src={logo_it}/>
                    </a>
                  </div>
                  <div className="Header-title Grid-cell">
                    <h1 className="Header-titleLink">
                      <a href="/">
                        Servizi.gov.it
                        <span
                          className="u-lg-hidden u-md-hidden u-sm-hidden u-cf u-padding-top-xxs u-block"/><br/>
                        <small>Tutti i servizi della PA</small>
                      </a>
                    </h1>
                  </div>
                </div>
              </div>
              {/* Header-navbar */}
              <div
                className="Headroom-hideme u-textCenter u-hidden u-sm-hidden u-md-block u-lg-block">
                <nav
                  className="Megamenu Megamenu--default js-megamenu u-background-50"
                  data-rel=".Offcanvas .Treeview"/>
              </div>
            </header>
            <div className="u-padding-top-xxl u-background-50"/>
            <hr className="Separator Separator--up u-background-white"/>
            <div
              className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30"
              id="ContentBody">

              {/* Cubo di caricamento pagina */}
              <div class="sk-folding-cube" id="skFoldingCube">
                <div class="sk-cube1 sk-cube"></div>
                <div class="sk-cube2 sk-cube"></div>
                <div class="sk-cube4 sk-cube"></div>
                <div class="sk-cube3 sk-cube"></div>
              </div>

              <div
                className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl"
                id="containerSearchBarAndServizi">
                <h2 className=" u-padding-bottom-l  u-text-h3">Trovati circa {this.state.countOfServiceSearch} risultati per la ricerca "{this.state.valueSearched}"</h2>
                <div className="Grid-cell u-md-size8of12 u-lg-size8of12 u-padding-right-xl">
                  {/* onSubmit="return checkSearch()" */}
                  <form className="Form u-text-r-xs u-margin-bottom-l" id="FormSearch">

                    <fieldset className="Form-fieldset">

                      <div id="SearchBar"></div>

                    </fieldset>
                  </form>
                </div>

                <div id="ContainerServizi"></div>

                <div className="u-textCenter">

                  <div id="caricaAltriElementi" onClick={this.ChiamataAjax.bind(this)} className=" Button Button--primary u-textNoWrap u-background-0 u-color-60 u-textWeight-600  u-padding-right-s  u-padding-top-xs u-padding-bottom-xs u-margin-bottom-xs u-textUppercase u-borderRadius-s u-linkClean bottoneCaricaAltriElementi">Carica altri Risultati</div>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div className="u-background-95">
          <div
            className="u-layout-wide u-layoutCenter u-layout-r-withGutter u-hiddenPrint">
            <footer className="Footer u-background-95">
              <div className="Grid Grid--withGutter u-padding-top-xl">
                <div className="Grid-cell u-layout-centerLeft u-padding-r-bottom">
                  <img className="Footer-logo u-xs-padding-right-none" src={agid_logo_bb} style={{height: 80}}/>
                  <p className="Footer-siteName"></p>
                </div>
                <div
                  className="Grid-cell u-layout-centerRight u-padding-r-bottom u-flexAlignSelfEnd">
                  <h3
                    className="u-md-flexInline u-lg-flexInline u-text-p u-color-white u-textWeight-400 u-hidden u-margin-r-right u-flexAlignSelfCenter">Seguici su</h3>
                  <ul className="Footer-socialIcons">
                    <li>
                      <a href=""><span className="Icon Icon-facebook u-background-white"/>
                        <span className="u-hiddenVisually">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href=""><span className="Icon Icon-twitter u-background-white"/>
                        <span className="u-hiddenVisually">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href=""><span className="Icon Icon-youtube u-background-white"/>
                        <span className="u-hiddenVisually">Youtube</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="Footer-links u-cf u-color-80">
                <li>
                  <a href="" title="Privacy policy">Privacy</a>
                </li>
                <li>
                  <a href="" title="Note legali">Note legali</a>
                </li>
                <li>
                  <a href="" title="Dati monitoraggio sito">Contatti</a>
                </li>
              </ul>
            </footer>
          </div>
        </div>
        <a
          href="#"
          title="torna all'inizio del contenuto"
          className="ScrollTop js-scrollTop js-scrollTo">
          <i className="ScrollTop-icon Icon-collapse" aria-hidden="true"/>
          <span className="u-hiddenVisually">torna all'inizio del contenuto</span>
        </a>
      </div>

    );
  }
}
