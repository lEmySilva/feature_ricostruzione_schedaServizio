import React, {Component} from 'react';
import TbodySezioneAccesso from './tbodySezioneAccesso';

{/*Da cambiare nome schedaAccesso in SchedaFruizione e i vari import*/
}
var obj;
var obj_;
export default class SchedaAccesso extends Component {

    constructor(props) {
        super(props);
        this.state = {

            interactivityLevel: "non disponibile",
            /* stringa */
            interactivityLevelDescription: "non disponibile",
            /* stringa */
            channelPhone: [],
            /* array di stringhe */
            channelEmail: [],
            /* array di stringhe */
            channelOffline: ['non disponibile'],
            /* array di stringhe si suppone */
            costs: [],
            /* array di oggetti */
            processingTimes: null,
            /* array di oggetti */

        }

    }
    componentWillReceiveProps(nextProps) {

        var interactivityLevel = nextProps.interactivityLevel;
        var interactivityLevelDescription = nextProps.interactivityLevelDescription;
        var arrayChannelEmails= nextProps.channelEmail;
        var arrayChannelPhones= nextProps.channelPhone;
        var channelOffline = nextProps.channelOffline;
        var costs= nextProps.costs;
        /* costs = '[{"description":"Bollo","currency":"Euro","value":"10,12"},{"description":"Bollo","currency":"Euro","value":"10,12"}]'; */
        var tempiErogazioneServizio= nextProps.processingTimes;


        /* console.log(nextProps); */
        if (interactivityLevel != null && interactivityLevel != undefined && interactivityLevel != "") 
            this.setInteractivityLevel(interactivityLevel);
        if (interactivityLevelDescription != null && interactivityLevelDescription != undefined && interactivityLevelDescription != "") 
            this.setInteractivityLevel(interactivityLevelDescription);
        if (arrayChannelEmails != null && arrayChannelEmails != undefined ) 
            this.setChannelEmail(arrayChannelEmails);
        if (arrayChannelPhones != null && arrayChannelPhones != undefined ) 
            this.setChannelPhone(arrayChannelPhones);
        if(channelOffline !=null && channelOffline != undefined )
            this.setChannelOffline(channelOffline);
        
        if(costs !=null && costs != undefined ){
            obj = JSON.parse(costs);
            this.setCosts(obj);
            }
        if(tempiErogazioneServizio !=null && tempiErogazioneServizio!=undefined){
            obj_ = JSON.parse(tempiErogazioneServizio);
            this.setProcessingTimes(obj_);
        }

        }
        

    setChannelOffline(input){
        this.setState({channelOffline:input});
    }
    
    setInteractivityLevel(input) {
        this.setState({interactivityLevel: input})
    }
    setInteractivityLevelDescription(input) {
        this.setState({interactivityLevelDescription: input})
    }
    setChannelPhone(input) {
        this.setState({channelPhone: input})
    }
    setChannelEmail(input) {
        this.setState({channelEmail: input})
    }
    setChannelOffline(input) {
        this.setState({channelOffline: input})
    }
    setCosts(input) {
        this.setState({costs: input})
    }
    setProcessingTimes(input) {
        this.setState({processingTimes: input})
    }


    CostiDelServizio(arrayOfCosts){
        if(arrayOfCosts!=null && arrayOfCosts!=undefined)
        return arrayOfCosts.map(this.createElement)
    }
    createElement(OBJcost){
        return <div>
                    Descrizione: {OBJcost.description}<br/>
                    Importo: {OBJcost.value} {OBJcost.currency}<br/>
                </div>
    }

    concatProcessingTime(processingTime){
        if(processingTime !=null && processingTime!= undefined)
        return <div>{processingTime[0].value} {processingTime[0].unit}</div>
    }

    render() {
        return (

            <div
                className="u-background-grey-10 u-color-grey-50 u-padding-all-l u-margin-bottom-l"
                id="Section-Accesso">
                <div className="Grid">
                    <div className="Grid-cell u-md-size5of6 u-lg-size5of6 u-padding-right-xl">
                        <h3 class="u-color-80 u-text-h4">{/*<span class="icon-lock icons"></span>*/}
                            Fruizione</h3>
                    </div>
                    <div className="Grid-cell u-md-size1of6 u-lg-size1of6 u-textRight">
                        {/* <img src="" class="m-r-5" alt="Non prevista autenticazione con PagoPA" title="Non Prevista autenticazione con PagoPA"/>
                        <img src="" alt="Prevista autenticazione con SPID" title="Prevista autenticazione con SPID"/> */}
                    </div>
                </div>
                <p
                    className="u-lineHeight-l u-text-r-xs u-textSecondary u-padding-r-right  u-padding-r-bottom"></p>
                <div className="Grid">
                    <div className="Grid-cell u-padding-right-xl">
                        <class is="u-layout-prose u-text-r-x" class="u-layout-prose u-text-r-x">
                            <li className="u-padding-bottom-xs no-ListStyle">
                                <p>
                                    <strong>Livello di interazione:
                                    </strong>
                                    {/*interactivetyLevel*/}
                                    {this.state.interactivityLevel}

                                </p>
                            </li>
                            <li className="u-padding-bottom-xs no-ListStyle">
                                <p>
                                    <strong>Descrizione:
                                    </strong>
                                    {/*channelPhone and channelEmail*/}
                                    {this.state.interactivityLevelDescription}
                                </p>
                            </li>
                            <li className=" no-ListStyle">
                                <strong>Canali di erogazione: </strong>
                                <p>
{/* tabella per i telefoni */}
                                    <table class="dim_Tabella table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Telefono</th>
                                            </tr>
                                        </thead>

                                        <TbodySezioneAccesso array={this.state.channelPhone} key={'2tableACC'}/>
                                    </table>
{/* tabella per email */}
                                    <table class="dim_Tabella table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Email</th>
                                            </tr>
                                        </thead>
                                            <TbodySezioneAccesso array={this.state.channelEmail} key={'1tableACC'}/> 
                                    </table>

                                    </p>
                                </li>
                            <li className="m-top-broken u-padding-bottom-xs no-ListStyle">
                                <p>
                                    <strong>Canali di erogazione non telematici: </strong>

                                    {/* Ufficio: {this.state.channelOffline}<br/> */}
                                    <br/>
                                    Ufficio: {this.state.channelOffline} <br/>
                                    Indirizzo: <br/>
                                    Città: <br/>
                                    CAP: <br/>
                                    {/*channelOffline*/}
                                    
                                </p>
                            </li>
                            <li className="u-padding-bottom-xs no-ListStyle">
                                <p>
                                    <strong>Costi del servizio:</strong>

                                    {this.CostiDelServizio(this.state.costs)}

                                </p>
                            </li>
                            <li className="u-padding-bottom-xs no-ListStyle">
                                <p>
                                    <strong>Tempi di erogazione:</strong>
                                    {/*processingTimes*/}
                                    {this.concatProcessingTime(this.state.processingTimes)}
                                </p>
                            </li>
                        </class>
                    </div>
                    {/* <div
                        className="Form-field Grid-cell u-md-size1of2 u-lg-size1of2 u-textRight u-padding-top-xxl u-padding-bottom-s"
                        id="25f2a4ea-f853-4bba-89ba-e46aafee5e35">
                        
                                <a href="/ricerca" onclick="ServiceSelected(event)" class="Button Button--default u-textNoWrap u-background-60 u-color-white u-textWeight-600 u-padding-left-s  u-padding-right-xs  u-padding-top-xs u-padding-bottom-xs u-margin-bottom-xs u-textUppercase u-borderRadius-s u-linkClean u-margin-left-m">Torna alla ricerca<span class="u-text-r-xs u-margin-left-xxs Icon Icon-file"></span></a>
                                <a class="Button Button--default u-textNoWrap u-background-60 u-color-white u-textWeight-600 u-padding-left-s  u-padding-right-xs  u-padding-top-xs u-padding-bottom-xs u-margin-bottom-xs u-textUppercase u-borderRadius-s u-linkClean u-margin-left-m"href=""target="_blank">Vai al Servizio<span class="u-text-r-xs u-margin-left-xxs Icon Icon-chevron-right"></span></a>
                            
                    </div>
                     */}
                </div>
            </div>

        );
    }
}
