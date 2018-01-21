import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import '../../BaseLayoutItems/css/build.css';
import '../../BaseLayoutItems/css/font.css';
import '../../BaseLayoutItems/css/main.css';
import '../../BaseLayoutItems/css/spinnersCaricamento.css';

import logoServGovIt from '../../BaseLayoutItems/images/logo-it.svg';
import logoAgenziaitaliaDigitale from '../../BaseLayoutItems/images/agid-logo-bb.svg';


import styles from '../../App.css';




var sugg = [];

export default class IndexPage extends Component {

  constructor() {
    super();

    this.state = {
    };    
  }


  hideCubeSearchBarLoader()
  {
    document.getElementById('SpinnerCubeLoaderContainer').style.display="none";
  }

  showCubeSearchBarLoader()
  {
    document.getElementById('SpinnerCubeLoaderContainer').style.display="inline";
  }


  componentDidMount()
  {
    //this.showCubeSearchBarLoader();
  }
  
  

    render() {
        return (
            <div>
                
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* include HTML5shim per Explorer 8 */}
            
            <link media="all" rel="stylesheet" href="css/build.css" />
            <link media="all" rel="stylesheet" href="css/font.css" />
            <link media="all" rel="stylesheet" href="css/main.css" /> 

            <title>Home - Dati Pubblici</title>
            <div id="cookie-bar" className="CookieBar js-CookieBar u-background-95 u-padding-r-all" aria-hidden="true">
              <p className="u-color-white u-text-r-xs u-lineHeight-m u-padding-r-bottom">Questo sito utilizza cookie tecnici, analytics e di terze parti.
                <br />Proseguendo nella navigazione accetti l’utilizzo dei cookie.<br />
              </p>
              <p>
                <button className="Button Button--default u-text-r-xxs js-cookieBarAccept u-inlineBlock u-margin-r-all">Accetto</button>
                <a href="" className="u-text-r-xs u-color-teal-50">Privacy policy</a>
              </p>
            </div>
            <div className="u-background-95">
              <div className="u-layout-wide u-layoutCenter">
                <ul className="Skiplinks js-fr-bypasslinks u-hiddenPrint">
                  <li><a href="#main">Vai al Contenuto</a></li>
                  <li><a className="js-fr-offcanvas-open" href="#menu" aria-controls="menu" aria-label="accedi al menu" title="accedi al menu">Vai alla navigazione del sito</a></li>
                </ul>
                <header className="Header  u-hiddenPrint">
                  <div className="Header-banner u-background-50">
                    <div className="Header-owner Headroom-hideme u-border-bottom-xxs">
                      <a href=""><span>AgID <span className="u-hidden u-md-inline u-lg-inline u-sm-inline">- Agenzia per l'Italia Digitale</span></span></a>
                    </div>
                  </div>
                  <div className="Header-navbar u-background-50">
                    <div className="u-layout-wide Grid Grid--alignMiddle u-layoutCenter">
                      <div className="Header-logo Grid-cell" aria-hidden="true">
                        <a href="" tabIndex={-1}>
                          <img src={logoServGovIt} alt={"testo"} tooltip={"tooltip"}/>
                        </a>
                      </div>
                      <div className="Header-title Grid-cell">
                        <h1 className="Header-titleLink">
                          <a href="/">
                            Servizi.gov.it <span className="u-lg-hidden u-md-hidden u-sm-hidden u-cf u-padding-top-xxs u-block" /><br />
                            <small>Tutti i servizi della PA</small>
                          </a>
                        </h1>
                      </div>
                    </div>
                  </div>
                  {/* Header-navbar */}
                  <div className="Headroom-hideme u-textCenter u-hidden u-sm-hidden u-md-block u-lg-block">
                    <nav className="Megamenu Megamenu--default js-megamenu u-background-50" data-rel=".Offcanvas .Treeview" />
                  </div>
                </header>
                <div className="u-background-50 u-textCenter u-padding-top-l">
                  <h2 className="u-layoutCenter u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l" style={{maxWidth: '20em'}}>
                    Lorem Ipsum dolor sit amet</h2>
                  <p className="u-text-r-xs  u-color-10 u-layout-prose u-layoutCenter u-padding-r-left u-padding-r-right">
                    Assumenda consequatur cupiditate mollitia ullam cupiditate similique.
                    Quis excepturi fuga assumenda animi officiis eum delectus illo.
                  </p>
                </div>
                <div className="u-background-50 newsletter-wrapper">
                  <div className="Grid newsletter-background blue">
                    <div className="Grid-cell u-size1of2 left u-background-60" />
                    <div className="Grid-cell u-size1of2 right u-background-60" />
                  </div>
                  <div className="Grid newsletter-background grey">
                    <div className="Grid-cell u-size9of12 left u-background-grey-15" />
                    <div className="Grid-cell u-size3of12 right u-background-grey-15" />
                  </div>
                  <div className="u-textCenter u-padding-top-L u-textCenter">

                    <form className="Form u-padding-r-top u-md-size7of12 u-lg-size5of12 u-layoutCenter" method="get" action="/ricerca" target="_self" id="FORM_ActionCerca" >

                      {/* <SearchBar/>  */}
                         <div id="SearchBar">
                        
                            <div class="sk-folding-cube_ContainerCubeSearchBar" id="SpinnerCubeLoaderContainer">
                              <div class="pieceIndexSearchBar_sk-cube1 sk-cube_IndexSearchBar"></div>
                              <div class="pieceIndexSearchBar_sk-cube2 sk-cube_IndexSearchBar"></div>
                              <div class="pieceIndexSearchBar_sk-cube4 sk-cube_IndexSearchBar"></div>
                              <div class="pieceIndexSearchBar_sk-cube3 sk-cube_IndexSearchBar"></div>
                            </div>
                          
                        </div>
                         {/* caricamento del quadrato di caricamento */}

                    </form>
                  </div>
                </div>
                <section className="u-nbfc u-background-grey-15  u-textCenter u-layout-r-withGutter u-padding-r-top u-padding-r-bottom ">
                  <div className="u-layout-wide u-layoutCenter">
                    <br /><br /> <br /><br /> <br />
                  </div>
                </section>
              </div>
            </div>
            <div className="u-background-95">
              <div className="u-layout-wide u-layoutCenter u-layout-r-withGutter u-hiddenPrint">
                <footer className="Footer u-background-95">
                  <div className="Grid Grid--withGutter u-padding-top-xl">
                    <div className="Grid-cell u-layout-centerLeft u-padding-r-bottom">
                      <img className="Footer-logo u-xs-padding-right-none" src={logoAgenziaitaliaDigitale} style={{height: 80}} />
                      <p className="Footer-siteName">
                      </p>
                    </div>
                    <div className="Grid-cell u-layout-centerRight u-padding-r-bottom u-flexAlignSelfEnd">
                      <h3 className="u-md-flexInline u-lg-flexInline u-text-p u-color-white u-textWeight-400 u-hidden u-margin-r-right u-flexAlignSelfCenter">Seguici su</h3>
                      <ul className="Footer-socialIcons">
                        <li><a href=""><span className="Icon Icon-facebook u-background-white" /><span className="u-hiddenVisually">Facebook</span></a></li>
                        <li><a href=""><span className="Icon Icon-twitter u-background-white" /><span className="u-hiddenVisually">Twitter</span></a></li>
                        <li><a href=""><span className="Icon Icon-youtube u-background-white" /><span className="u-hiddenVisually">Youtube</span></a></li>
                      </ul>
                    </div>
                  </div>
                  <ul className="Footer-links u-cf u-color-80">
                    <li><a href="" title="Privacy policy">Privacy</a></li>
                    <li><a href="" title="Note legali">Note legali</a></li>
                    <li><a href="" title="Dati monitoraggio sito">Contatti</a></li>
                  </ul>
                </footer>
              </div>
            </div>
            <a href="#" title="torna all'inizio del contenuto" className="ScrollTop js-scrollTop js-scrollTo">
              <i className="ScrollTop-icon Icon-collapse" aria-hidden="true" />
              <span className="u-hiddenVisually">torna all'inizio del contenuto</span>
            </a>




            

          </div>
          
        );
    }
}
