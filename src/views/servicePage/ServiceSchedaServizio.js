import React, {Component} from 'react';
import axios from 'axios';

/* compontents */
import RelatedComponent from '../../components/relatedComponent/related';
import SchedaInformazioni from '../../components/schedaInformazioniComponent/schedaInformazioni';
import SchedaClassificazioni from '../../components/schedaClassificazioniComponent/schedaClassificazioni';
import SchedaOrganizzazioni from '../../components/schedaOrganizzazioniComponent/schedaOrganizzazioni';
import SchedaContatti from '../../components/schedaContattiComponent/schedaContatti';
import SchedaAccesso from '../../components/schedaAccessoComponent/schedaAccesso';
import SchedaFAQ from '../../components/schedaFAQComponent/schedaFAQ';

import '../../BaseLayoutItems/main.css';
import '../../BaseLayoutItems/css/simpleLine-icons.css';
import '../../BaseLayoutItems/css/HamburgerMenuServices.css';
import '../../BaseLayoutItems/css/spinnersCaricamento.css';

import logoServGovIt from '../../BaseLayoutItems/images/logo-it.svg';
import logoAgenziaitaliaDigitale from '../../BaseLayoutItems/images/agid-logo-bb.svg';

import logo_it from '../../BaseLayoutItems/images/logo-it.svg';
import agid_logo_bb from '../../BaseLayoutItems/images/agid-logo-bb.svg';

import icoPagoPA from '../../BaseLayoutItems/images/icoPagoPA.png';
import icoPagoPA_off from '../../BaseLayoutItems/images/icoPagoPA_off.png';

import icoSpid from '../../BaseLayoutItems/images/icoSpid.png';
import icoSpid_off from '../../BaseLayoutItems/images/icoSpid_off.png';

var numberOfToolTipID = 0;
var self;
var arrayOfResult=[];
export default class SchedaServizio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valueSearched: "",
      idService: "",
      ServiceName: "",
      widthPage:null,
      heightPage:null,

/* valori da passare alle varie schede */
      id:null,
      serviceOwner:null,
      realName:null,
      description:null,
      serviceUrl:null,
      status:null,
      pagoPA:null,
      spid:null,
      themes:null,
      interactivityLevel:null,
      interactivityLevelDescription:null,
/* new valori */
      templateName:null,
      serviceType:null,
      keywords:[],
      sector:null,
      contacts:null,
      temporalCoverage:null,
      inputName:[],
      outputName:[],
      channelPhone:null,
      channelEmail:[],
      channelOffline:null,
      costs:null,
      processingTimes:null,
      spatialCoverage:[],
      organizations:null,
      lifeEvents:null,
      businessEvents:null,

    };
  }


  componentDidMount() {
    
    this.showCubeLoaderSpin();
    this.NoneDisplayServizi();
    this.hideRelative(); 

    var valueSearchID = window.sessionStorage.getItem('idServiceSelected');

    this.setState({idService: valueSearchID});

    this.ChiamataAjax(valueSearchID);

    this.setState({valueSearched: valueSearchID});

    ///* aggiungo onclick al menu principale */

    this.ADDonclickEventMenu(); 


    //aggiungo un listener per capire quando cè il ridimensionamento della pagina
    window.addEventListener("resize", this.updateDimensions);

    this.updateDimensions();

  }
  componentWillMount(){
    self=this;
    window.removeEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount(){
    window.removeEventListener("resize", this.updateDimensions);
  }


hideMenu(){
  document.getElementById('Menu_SchedaServizi').style.display ="none";
}

showMenu(){
  document.getElementById('Menu_SchedaServizi').style.display ="inline-flex";
}

hideHamburgerMenu(){
  document.getElementById('HamburgermenuToggle').style.display = "none";
}

showHamburgerMenu(){
  document.getElementById('HamburgermenuToggle').style.display = "block";
}

  updateDimensions(){
    var innerWidthPage = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var innerHeightPage =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    /* console.log('widthPage: '+innerWidthPage);
    console.log('heigth: '+innerHeightPage); */

    //verifico se lo schermo è piu piccolo del massimo prestabilito, se si faccio vedere il menu rimpicciolito ad Habmburger se no quello normale
    if(innerWidthPage<990) {
                            self.hideMenu();
                            self.showHamburgerMenu();
      }
    else{
      self.showMenu();
      self.hideHamburgerMenu();
    }

    self.setState({widthPage: innerWidthPage})
    self.setState({heightPage: innerHeightPage})
  }

  setId(input){
    this.setState({id:input});
  }
  setServiceOwner(input){
    this.setState({serviceOwner:input});
  }
  setRealName(input){
    this.setState({realName:input});
  }
  setDescription(input){
    this.setState({description:input});
  }
  setServiceUrl(input){
    this.setState({serviceUrl:input});
  }
  setStatus(input){
    this.setState({status:input});
  }
  setPagoPA(input){
    this.setState({pagoPA:input});
  }
  setSpid(input){
    this.setState({spid:input});
  }
  setThemes(input){
    this.setState({themes:input});
  }
  setInteractivityLevel(input){
    this.setState({interactivityLevel:input});
  }
  setInteractivityLevelDescription(input){
    this.setState({interactivityLevelDescription:input});
  }

  /* setto funzioni nuove variabili */
  setTemplateName(input){
    this.setState({templateName:input});
  }
  setServiceType(input){
    this.setState({serviceType:input});
  }
  setKeywords(input){
    this.setState({keywords:input});
  }
  setSector(input){
    this.setState({sector:input});
  }
  setContacts(input){
    this.setState({contacts:input});
  }
  setTemporalCoverage(input){
    this.setState({temporalCoverage:input});
  }
  setInputName(input){
    this.setState({inputName:input});
  }
  setOutputName(input){
    this.setState({outputName:input});
  }
  setChannelPhone(input){
    this.setState({channelPhone:input});
  }
  setChannelEmail(input){
    this.setState({channelEmail:input});
  }
  setChannelOffline(input){
    this.setState({channelOffline:input});
  }
  setCosts(input){
    this.setState({costs:input});
  }
  setProcessingTimes(input){
    this.setState({processingTimes:input});
  }
  setSpatialCoverage(input){
    this.setState({spatialCoverage:input});
  }
  setOrganizations(input){
    this.setState({organizations:input});
  }
  setLifeEvents(input){
    this.setState({lifeEvents:input});
  }
  setBusinessEvents(input){
    this.setState({businessEvents:input});
  }




  setGeneralResponse(ajaxResponse){
/*     console.log('dati arrivati in setGeneralResponse: ');
    console.log(ajaxResponse); 
    console.log('setto lo state di responseAJAX: ') */
    this.setId(ajaxResponse.id);
    this.setServiceOwner(ajaxResponse.serviceOwner);

    if(ajaxResponse.alternativeName === null || ajaxResponse.alternativeName===""){}
    else{this.setState({realName:ajaxResponse.name})}

    this.setDescription(ajaxResponse.description);
    this.setServiceUrl(ajaxResponse.serviceUrl);
    this.setStatus(ajaxResponse.status);
    this.setPagoPA(ajaxResponse.pagoPA);
    this.setSpid(ajaxResponse.spid);
    this.setThemes(ajaxResponse.themes);
    this.setInteractivityLevel(ajaxResponse.interactivityLevel);
    this.setInteractivityLevelDescription(ajaxResponse.interactivityLevelDescription);

  /* setto funzioni nuove variabili */
   this.setTemplateName(ajaxResponse.templateName);
   this.setServiceType(ajaxResponse.serviceType);
   this.setKeywords(ajaxResponse.keywords);
   this.setSector(ajaxResponse.sector);
   this.setContacts(ajaxResponse.contacts);
   this.setTemporalCoverage(ajaxResponse.temporalCoverage);
   this.setInputName(ajaxResponse.inputName);
   this.setOutputName(ajaxResponse.outputName);
   this.setChannelPhone(ajaxResponse.channelPhone);
   this.setChannelEmail(ajaxResponse.channelEmail);
   this.setChannelOffline(ajaxResponse.channelOffline);
   this.setCosts(ajaxResponse.costs);
   this.setProcessingTimes(ajaxResponse.processingTimes);
   this.setSpatialCoverage(ajaxResponse.spatialCoverage);
   this.setOrganizations(ajaxResponse.organizations);
   this.setLifeEvents(ajaxResponse.lifeEvents);
   this.setBusinessEvents(ajaxResponse.businessEvents);

  }



  ChiamataAjax(valueSearchID) {

    /* console.log('log'+this.props);
          var URL = this.props.url + input; */
    // var URL =
    // 'http://52.174.123.110:8000/services/search/'+input+'*?offset=0&limit=10';
    var URL = 'http://servicesearchfacade.azurewebsites.net/services/' + valueSearchID;
    var self = this;

    //sessionStorage.setItem('valueInput', input);
    /*  for(var i=0;i<15;i++){  sugg.push({name:'prova'+i});  }
          self.aggiungiSuggestion(); */
    axios
      .get(URL, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          crossdomain: true
        }
      })
      .then(function (response) {

        // console.log("length:"+response.data.length); console.log("eseguo chiamata
        // ajax"); console.log("response: ");
        console.log(response.data); 

        self.setState({serviceUrl:response.data.serviceUrl});

        console.log('HO AVUTO LA RISPOSTA AJAX')
        self.setGeneralResponse(response.data);

        /*disabilito il caricamento e riabilito i suggestion */
        self.hideCubeLoaderSpin();
        self.YesDispayServizi();
        self.showRelative();  
        
      })
      .catch(function (error) {
        console.log(error);
      });

  } //end chiamata ajax

 

ADDonclickEventMenu(){
  document.getElementById('anchor_SectionAccesso').setAttribute('onclick','SmoothScroll(this)');
  document.getElementById('anchor_SectionContatti').setAttribute('onclick','SmoothScroll(this)');
  document.getElementById('anchor_SectionClassificazioni').setAttribute('onclick','SmoothScroll(this)');
  document.getElementById('anchor_SectionOrganizzazioni').setAttribute('onclick','SmoothScroll(this)');
  document.getElementById('anchor_SectionFAQ').setAttribute('onclick','SmoothScroll(this)'); 
  
  document.getElementById('anchor_SectionCorrelati').setAttribute('onclick','SmoothScroll(this)'); 
}



showRelative(){
  document.getElementById('gridTileContainer').style.visibility="visible"
}
hideRelative(){
  document.getElementById('gridTileContainer').style.visibility="hidden";
}

YesDispayServizi()
{
  document
    .getElementById('containerSearchBarAndServizi').style.display = "inline";
  document.getElementById('ContentBody').style.height = "initial";
}

NoneDisplayServizi()
{
  document.getElementById('containerSearchBarAndServizi').style.display = "none";
  document.getElementById('ContentBody').style.height = "fit-content";
}

hideCubeLoaderSpin()
{
  document.getElementById('skFoldingCube').style.display = "none";
}

showCubeLoaderSpin()
{
  //l'elemento che contiene le parti dello spinner
  document.getElementById('skFoldingCube').style.display = "inline-block";

}

  render() {
    return (
      <div>
        <div>
          {/* preso da https://italia.github.io/ita-web-toolkit/components/preview/developer--default.html */}
          {/*[if IE 8]><html class="no-js ie89 ie8" lang="it"><![endif]*/}
          {/*[if IE 9]><html class="no-js ie89 ie9" lang="it"><![endif]*/}
          {/*[if (gte IE 9)|!(IE)]><!*/}
          {/*<![endif]*/}
          <meta charSet="utf-8"/>
          <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/> {/* <link rel="preload" href="script/IWT.min.js" as="script"> */}
          {/*
    In alternativa a WebFontLoader è possibile caricare il font direttamente da Google
<link href='//fonts.googleapis.com/css?family=Titillium+Web:400,400italic,700,' rel='stylesheet' type='text/css' />
    o dal repository locale (src/fonts)
  */}
          {/* include HTML5shim per Explorer 8 */}
          <link media="all" rel="stylesheet" href="css/build.css"/>
          <link media="all" rel="stylesheet" href="css/font.css"/>
          <link media="all" rel="stylesheet" href="css/main.css"/>
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
                        <img src={logo_it} alt="img"/>
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
                <div className="Headroom-hideme u-textCenter u-hidden u-sm-hidden u-md-block u-lg-block">
                  <nav className="Megamenu Megamenu--default js-megamenu u-background-50" data-rel=".Offcanvas .Treeview"/>
                </div>
              </header>
              <div className="u-padding-top-xxl u-background-50"/>
              <hr className="Separator Separator--up u-background-white"/>






















              <div className=" u-background-white u-layout-r-withGutter u-posRelative u-zindex-30" id="ContentBody">
                
                {/* Cubo di caricamento pagina */}
                  <div className="sk-folding-cubeServicePage" id="skFoldingCube">
                    <div className="sk-cube1ServicePage sk-cubeServicePage"></div>
                    <div className="sk-cube2ServicePage sk-cubeServicePage"></div>
                    <div className="sk-cube4ServicePage sk-cubeServicePage"></div>
                    <div className="sk-cube3ServicePage  sk-cubeServicePage"></div>
                  </div>
          </div>














              <div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">
                <div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl" id="containerSearchBarAndServizi">
                  {/* <h2 className=" u-padding-bottom-l  u-text-h3">Servizio: "{this.state.ServiceName}"</h2> */}

                  <div className="u-padding-all-l u-margin-bottom-l">

                    <ul className="Menu_SchedaServizi" id="Menu_SchedaServizi">
                      {/* <li className="item_Menu_SchedaServizi"><a href="#Section-Informazioni"><i class="iconGrandezza icon-info icons"></i> Information</a></li> */}
                      <li className="item_Menu_SchedaServizi"><a href="#Section-Accesso" id="anchor_SectionAccesso"><i className="iconGrandezza icon-grid icons"></i> Fruizione</a></li>
                      <li className="item_Menu_SchedaServizi"><a href="#Section-Contatti" id="anchor_SectionContatti"><i className="iconGrandezza icon-envelope icons"></i> Contatti</a></li>
                      <li className="item_Menu_SchedaServizi"><a href="#Section-Classificazioni" id="anchor_SectionClassificazioni"><i className="iconGrandezza icon-tag icons"></i> Classificazioni</a></li>
                      <li className="item_Menu_SchedaServizi"><a href="#Section-Organizzazioni" id="anchor_SectionOrganizzazioni"><i className="iconGrandezza icon-organization icons"></i> Organizzazioni</a></li>
                      <li className="item_Menu_SchedaServizi"><a href="#Section-FAQ" id="anchor_SectionFAQ"><i className="iconGrandezza icon-question icons"></i> FAQ</a></li>
                      <li className="item_Menu_SchedaServizi"><a href="#Section-Correlati" id="anchor_SectionCorrelati"><i className="iconGrandezza icon-link icons"></i> Correlati</a></li>
                    </ul>


                  <nav role="HamburgerNavigation">
                    <div id="HamburgermenuToggle">

                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>

                        <ul id="HamburgerMenu">
                        <li className="item_Menu_SchedaServizi"><a href="#Section-Accesso" id="anchor_SectionAccesso">Accesso</a></li>
                        <li className="item_Menu_SchedaServizi"><a href="#Section-Contatti" id="anchor_SectionContatti">Contatti</a></li>
                        <li className="item_Menu_SchedaServizi"><a href="#Section-Classificazioni" id="anchor_SectionClassificazioni">Classificazioni</a></li>
                        <li className="item_Menu_SchedaServizi"><a href="#Section-Organizzazioni" id="anchor_SectionOrganizzazioni">Organizzazioni</a></li>
                        <li className="item_Menu_SchedaServizi"><a href="#Section-FAQ" id="anchor_SectionFAQ">FAQ</a></li>
                        <li className="item_Menu_SchedaServizi"><a href="#Section-Correlati" id="anchor_SectionCorrelati">Correlati</a></li>
                        </ul>
                      </div>
                    </nav>

                  </div>
















              



















                  <div id="ContainerServizi">

                    <SchedaInformazioni id={this.state.id} serviceOwner={this.state.serviceOwner} realName={this.state.realName} description={this.state.description} serviceUrl={this.state.serviceUrl} status={this.state.status} pagoPA={this.state.pagoPA} spid={this.state.spid} inputName={this.state.inputName} outputName={this.state.outputName} temporalCoverage={this.state.temporalCoverage} spatialCoverage={this.state.spatialCoverage} lifeEvents={this.state.lifeEvents} businessEvents={this.state.businessEvents}/>
                    
                    {/* scheda fruizione */}
                    <SchedaAccesso interactivityLevel={this.state.interactivityLevel} interactivityLevelDescription={this.state.interactivityLevelDescription} channelPhone={this.state.channelPhone} channelEmail={this.state.channelEmail} channelOffline={this.state.channelOffline} costs={this.state.costs} processingTimes={this.state.processingTimes}/>

                    <SchedaContatti contacts={this.state.contacts}/* email={this.state.contacts.email} office={this.state.contacts.office} tel={this.state.contacts.tel} web={this.state.contacts.web} *//>

                    <SchedaClassificazioni themes={this.state.themes} sector={this.state.sector} keywords={this.state.keywords}/>

                    <SchedaOrganizzazioni organization={this.state.organizations}/>

                    <SchedaFAQ />
                  
                  </div>



                  {/* Bottoni torna alla pagina precedente e vai al servizio indicato */}
                  <div className="u-background-white u-padding-all-l u-margin-bottom-l">
                    <div className="Grid">
                      <div className="Grid-cell u-md-size1of2 u-lg-size1of2 u-padding-right-xl"></div>
                        <div className="Form-field Grid-cell u-md-size1of2 u-lg-size1of2 u-textRight u-padding-top-xxl u-padding-bottom-s" id="25f2a4ea-f853-4bba-89ba-e46aafee5e35">
                          <a href="/ricerca" onClick="ServiceSelected(event)" className="Button Button--default u-textNoWrap u-background-60 u-color-white u-textWeight-600 u-padding-left-s  u-padding-right-xs  u-padding-top-xs u-padding-bottom-xs u-margin-bottom-xs u-textUppercase u-borderRadius-s u-linkClean u-margin-left-m">Torna alla ricerca<span className="u-text-r-xs u-margin-left-xxs Icon Icon-file"></span></a>
                          <a className="Button Button--default u-textNoWrap u-background-60 u-color-white u-textWeight-600 u-padding-left-s  u-padding-right-xs  u-padding-top-xs u-padding-bottom-xs u-margin-bottom-xs u-textUppercase u-borderRadius-s u-linkClean u-margin-left-m" href={this.state.serviceUrl} target="_blank">Vai al Servizio<span className="u-text-r-xs u-margin-left-xxs Icon Icon-chevron-right"></span></a>
                        </div>
                    </div>
                  </div>


                </div>
              </div>

              <div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">
                <div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl">

                  <RelatedComponent />

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
                    <img
                      className="Footer-logo u-xs-padding-right-none"
                      src={agid_logo_bb}
                      alt="img"
                      style={{
                      height: 80
                    }}/>
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
          {/*[if IE 8]>




  <![endif]*/}
          {/*[if lte IE 9]>

  <![endif]*/}
          {/* sostituire questo percorso con quello degli assets javascript nel proprio sito web:
    è il percorso, relativo alla webroot, della directory che contiene il file IWT.min.js e i file *.chunk.js */}
        </div>

      </div>
    );
  }
}
