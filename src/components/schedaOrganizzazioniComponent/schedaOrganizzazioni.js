import React, {Component} from 'react';


export default class SchedaOrganizzazioni extends Component {


    



    render() {
        return (

            <div className="u-background-grey-10 u-color-grey-50 u-padding-all-l u-margin-bottom-l" id="Section-Organizzazioni">
                <div className="Grid">
                    <div className="Grid-cell u-md-size5of6 u-lg-size5of6 u-padding-right-xl">
                        <h3 class="u-color-80 u-text-h4">{/*<span class="icon-organization icons u-text-s"></span>*/} Organizzazioni</h3>
                    </div>
                    <div className="Grid-cell u-md-size1of6 u-lg-size1of6 u-textRight">
                        {/* <img src="" class="m-r-5" alt="Non prevista autenticazione con PagoPA" title="Non Prevista autenticazione con PagoPA"/>
                        <img src="" alt="Prevista autenticazione con SPID" title="Prevista autenticazione con SPID"/> */}
                    </div>
                        </div>
                        <p className="u-lineHeight-l u-text-r-xs u-textSecondary u-padding-r-right  u-padding-r-bottom"></p>
                        <div className="Grid">
                            <div className="Grid-cell u-md-size1of2 u-lg-size1of2 u-padding-right-xl">
                                <class is="u-layout-prose u-text-r-x" className="u-layout-prose u-text-r-x">
                                    
                                    {/*Organizzazioni da mettere JSonMap POSSONO ARRIVARE PIù ARRAY*/}
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            Comune di Milano
                                            {/*organizations.name*/}
                                        </p>
                                    </li>
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong>Ruolo:</strong> Titolare {/*organizations.role*/}
                                        </p>
                                    </li>
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            Iniziato il <strong>18/09/2017</strong>{/*organizations.date.startDateTime*/} finito il <strong>18/01/2018</strong>{/*organizations.date.endDateTime*/}
                                            {/*<a href="#tooltip0"className="Tooltip-toggle u-textClean u-color-black"data-menu-trigger="tooltip0"></a>*/}
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
