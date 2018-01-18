import React, {Component} from 'react';

{/*Da cambiare nome schedaAccesso in SchedaFruizione e i vari import*/}
export default class SchedaAccesso extends Component {


    



    render() {
        return (

            <div className="u-background-grey-10 u-color-grey-50 u-padding-all-l u-margin-bottom-l" id="Section-Accesso">
                <div className="Grid">
                    <div className="Grid-cell u-md-size5of6 u-lg-size5of6 u-padding-right-xl">
                    <h3 class="u-color-80 u-text-h4">{/*<span class="icon-lock icons"></span>*/} Fruizione</h3>
                    </div>
                    <div className="Grid-cell u-md-size1of6 u-lg-size1of6 u-textRight">
                        {/* <img src="" class="m-r-5" alt="Non prevista autenticazione con PagoPA" title="Non Prevista autenticazione con PagoPA"/>
                        <img src="" alt="Prevista autenticazione con SPID" title="Prevista autenticazione con SPID"/> */}
                    </div>
                        </div>
                        <p className="u-lineHeight-l u-text-r-xs u-textSecondary u-padding-r-right  u-padding-r-bottom"></p>
                        <div className="Grid">
                            <div className="Grid-cell u-md-size1of2 u-lg-size1of2 u-padding-right-xl">
                                <class is="u-layout-prose u-text-r-x" class="u-layout-prose u-text-r-x">
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            
                                            <strong>Livello di interazione:</strong>
                                            
                                            <p>{/*interactivetyLevel*/}Interazione a due vie</p>
                                            <p>{/*interactivityLevelDescription*/}L'utente può avviare l'atto/procedimento amministrativo di interesse (es. il modulo può essere compilato e inviato on line) e viene garantita on line solo la presa in carico dei dati immessi dall'utente e non la loro contestuale elaborazione.</p>
                                        </p>
                                    </li>
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong>Canali di erogazione</strong>
                                            {/*channelPhone and channelEmail*/}   Telefono:  Email:
                                        </p>
                                    </li>
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong>Canali di erogazione non telematici:</strong>
                                            {/*channelOffline*/}
                                        </p>
                                    </li>
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong>Costi del servizio:</strong>
                                            {/*costs*/}
                                        </p>
                                    </li>
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong>Tempi di erogazione:</strong>
                                            {/*processingTimes*/}
                                        </p>
                                    </li>
                                </class>
                            </div>
                            <div className="Form-field Grid-cell u-md-size1of2 u-lg-size1of2 u-textRight u-padding-top-xxl u-padding-bottom-s"id="25f2a4ea-f853-4bba-89ba-e46aafee5e35">
                                {/* 
                                <a href="/ricerca" onclick="ServiceSelected(event)" class="Button Button--default u-textNoWrap u-background-60 u-color-white u-textWeight-600 u-padding-left-s  u-padding-right-xs  u-padding-top-xs u-padding-bottom-xs u-margin-bottom-xs u-textUppercase u-borderRadius-s u-linkClean u-margin-left-m">Torna alla ricerca<span class="u-text-r-xs u-margin-left-xxs Icon Icon-file"></span></a>
                                <a class="Button Button--default u-textNoWrap u-background-60 u-color-white u-textWeight-600 u-padding-left-s  u-padding-right-xs  u-padding-top-xs u-padding-bottom-xs u-margin-bottom-xs u-textUppercase u-borderRadius-s u-linkClean u-margin-left-m"href=""target="_blank">Vai al Servizio<span class="u-text-r-xs u-margin-left-xxs Icon Icon-chevron-right"></span></a>
                             */}
                            </div>
                        </div>
                    </div>

        );
    }
}
