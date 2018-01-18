import React, {Component} from 'react';

import IconePagoPaSPID from './iconePagoPaSPID';


export default class SchedaInformazioni extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id:props.id,
            serviceOwner:props.serviceOwner,
            realName:props.realName,
            description:props.description,
            serviceUrl:props.serviceUrl,
            status:props.status,
            pagoPA:props.pagoPA,
            spid:props.spid,
            themes:props.themes,
            interactivityLevel:props.interactivityLevel,
            interactivityLevelDescription:props.interactivityLevelDescription,
        };
      }

    componentDidMount(){
       
        /* to force the component re-rendering */
        /* this.forceUpdate(); */
        /* controllo che il nome sia quello giusto */
        console.log('component montato schedaInformazioni')
        
    }

    componentWillReceiveProps(nextProps) {
        
        this.setId(nextProps.id);
        this.setServiceOwner(nextProps.serviceOwner);
        this.setState({realName:nextProps.realName});
        this.setState({description:nextProps.description});
        this.setServiceUrl(nextProps.serviceUrl);
        this.setStatus(nextProps.status);
        this.setPagoPA(nextProps.pagoPA);
        this.setSpid(nextProps.spid);
        this.setThemes(nextProps.themes);
        this.setInteractivityLevel(nextProps.interactivityLevel);
        this.setInteractivityLevelDescription(nextProps.interactivityLevelDescription);
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


    render() {
        return (

            <div className="u-padding-all-l u-margin-bottom-l" id="Section-Informazioni">
                <div className="Grid">
                    <div className="Grid-cell u-md-size5of6 u-lg-size5of6 u-padding-right-xl">
                        <h3 className="u-padding-r-bottom">{this.state.realName}</h3>{/*alternativeName se c'è oppure name*/}
                    </div>

                    <IconePagoPaSPID spid={this.state.spid} pagoPA={this.state.pagoPA}/>

                        </div>
                        <p className="u-lineHeight-l u-text-r-xs u-textSecondary u-padding-r-right  u-padding-r-bottom">
                            {this.state.description}
                            </p>
                        <div className="Grid">
                            <div className="Grid-cell u-md-size1of2 u-lg-size1of2 u-padding-right-xl">
                                <class is="u-layout-prose u-text-r-x" className="u-layout-prose u-text-r-x">
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong>Erogatore servizio:</strong>
                                            {this.state.serviceOwner}
                                        </p>
                                    </li>
                                    {/*<li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong>Tema:</strong>
                                            {this.state.themes}
                                        </p>
                                    </li>*/}


                                    {/*Contanct JsonMap da riempire*/}
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong> Stato:</strong>
                                            {/*status*/}
                                            
                                        </p>
                                    </li>
                                    {/* Non va più messo guardare html di Riccardo
                                        <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong> Livello interazione:</strong>
                                            {this.state.interactivityLevel}
                                            <a href="#tooltip0" className="Tooltip-toggle u-textClean u-color-black" data-menu-trigger="tooltip0"></a>
                                        </p>
                                    </li>*/}

                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong> Documentazione necessaria:</strong>
                                            {/*inputNamee*/}
                                            
                                        </p>
                                    </li>
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong> Documentazione rilasciata:</strong>
                                            {/*outputName*/}
                                            
                                        </p>
                                    </li>


                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong> Disponibilità del servizio:</strong>
                                            {/*temporalCoverage*/}
                                            
                                        </p>
                                    </li>
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                    <p>
                                        <strong> Territorio di competenza:</strong>
                                        {/*spatialCoverage*/}
                                        
                                    </p>
                                    </li>
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                    <p>
                                        <strong> Tipologia:</strong>
                                        {/*lifeEvents or businessEvents*/}
                                        
                                    </p>
                                    </li>
                                </class>
                            </div>
                            <div
                                className="Form-field Grid-cell u-md-size1of2 u-lg-size1of2 u-textRight u-padding-top-xxl u-padding-bottom-s"
                                id={this.state.id}>
                                <a href="/ricerca" onClick="ServiceSelected(event)" className="Button Button--default u-textNoWrap u-background-60 u-color-white u-textWeight-600 u-padding-left-s  u-padding-right-xs  u-padding-top-xs u-padding-bottom-xs u-margin-bottom-xs u-textUppercase u-borderRadius-s u-linkClean u-margin-left-m">Torna alla ricerca<span className="u-text-r-xs u-margin-left-xxs Icon Icon-file"></span></a>
                                <a className="Button Button--default u-textNoWrap u-background-60 u-color-white u-textWeight-600 u-padding-left-s  u-padding-right-xs  u-padding-top-xs u-padding-bottom-xs u-margin-bottom-xs u-textUppercase u-borderRadius-s u-linkClean u-margin-left-m" href={this.state.serviceUrl} target="_blank">
                                    Vai al Servizio<span className="u-text-r-xs u-margin-left-xxs Icon Icon-chevron-right"></span>
                                </a>
                            </div>
                        </div>
                    </div>

        );
    }
}
