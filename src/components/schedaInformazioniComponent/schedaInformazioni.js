import React, {Component} from 'react';

import IconePagoPaSPID from './iconePagoPaSPID';


export default class SchedaInformazioni extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id:props.id,
            serviceOwner:"non disponibile",
            realName: "non disponibile",
            description:"non disponibile",
            serviceUrl:null,
            status:props.status,
            pagoPA:props.pagoPA,
            spid:props.spid,
            inputName:"non disponibile",
            outputName:"non disponibile",
            temporalCoverage: null,
            spatialCoverage:null,
            lifeEvents:props.lifeEvents,
            businessEvents:props.businessEvents,
            realEvent:null,
        };
      }

    componentDidMount(){
       
        /* to force the component re-rendering */
        /* this.forceUpdate(); */
        /* controllo che il nome sia quello giusto */
        console.log('component montato schedaInformazioni')
        
    }

    componentWillReceiveProps(nextProps) {
        
        var serviceOwner = nextProps.serviceOwner;
        var realName = nextProps.realName;
        var description = nextProps.description;
        var inputName = nextProps.inputName;
        var outputName = nextProps.outputName;

        this.setId(nextProps.id);

        if(serviceOwner!=null && serviceOwner!=undefined && serviceOwner!="")
            this.setServiceOwner(nextProps.serviceOwner);
        if(realName!=null && realName!=undefined && realName!="")
            this.setState({realName:nextProps.realName});
        if(description!=null && description!=undefined && description!="")
            this.setState({description:nextProps.description});
            this.setServiceUrl(nextProps.serviceUrl);
            this.setStatus(nextProps.status);
            this.setPagoPA(nextProps.pagoPA);
            this.setSpid(nextProps.spid);
        if(inputName!=null && inputName!=undefined && inputName!="")
            this.setInputName(nextProps.inputName);
        if(outputName!=null && outputName!=undefined && outputName!="")
            this.setOutputName(nextProps.outputName);
        
            this.setTemporalCoverage(nextProps.temporalCoverage);
            this.setSpatialCoverage(nextProps.spatialCoverage);
       /*  this.lifeEvents(nextProps.lifeEvents);
        this.businessEvents(nextProps.businessEvents); */
        if (nextProps.lifeEvents==true && nextProps.businessEvent==false) this.setRealEvent ("Servizio per cittadino")
        else this.setRealEvent ("Servizio per professionista-impresa")
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
    setInputName(input){
        this.setState({inputName:input});
      }
    setOutputName(input){
      this.setState({outputName:input});
      }
    setTemporalCoverage(input){
        this.setState({temporalCoverage:input});
      }
    setSpatialCoverage(input){
        this.setState({spatialCoverage:input});
      }
    setLifeEvents(input){
        this.setState({lifeEvents:input});
      }
    setBusinessEvents(input){
        this.setState({businessEvents:input});
      }
    setRealEvent(input){
        this.setState({realEvent:input});
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
                                            {this.state.status}
                                            
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
                                            {this.state.inputName}
                                            
                                        </p>
                                    </li>
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong> Documentazione rilasciata:</strong>
                                            {this.state.outputName}
                                            
                                        </p>
                                    </li>


                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong> Disponibilità del servizio:</strong> 
                                            <br/>
                                            Dal <strong></strong> Al <strong></strong><br/>
                                            <strong>Nella fascia oraria: </strong><br/>
                                            <strong>Nei giorni: </strong><br/>
                                            {this.state.temporalCoverage}
                                            
                                        </p>
                                    </li>
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                    <p>
                                        <strong> Territorio di competenza:</strong>
                                        {this.state.spatialCoverage}
                                        
                                    </p>
                                    </li>
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                    <p>
                                        <strong> Tipologia:</strong>
                                        {this.state.realEvent}

                                        
                                    </p>
                                    </li>
                                </class>
                            </div>
                            <div
                                className="Form-field Grid-cell u-textRight u-padding-top-xxl u-padding-bottom-s"
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
