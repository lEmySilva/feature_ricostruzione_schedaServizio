import React, {Component} from 'react';

import icoPagoPA_off from '../../BaseLayoutItems/images/icoPagoPA_off.png';
import icoPagoPA from '../../BaseLayoutItems/images/icoPagoPA.png';

import icoSpid_off from '../../BaseLayoutItems/images/icoSpid_off.png';
import icoSpid from '../../BaseLayoutItems/images/icoSpid.png';

export default class IconePagoPaSPID extends Component {


    constructor(props) {
        super(props);
        this.state = {
            pagoPA:null,
            spid:null,
            srcPagoPA:null,
            srcSpid:null,
            ALTiconPagoPA:null,
            ALTiconSpid:null,
        };
      }

    componentWillReceiveProps(nextProps) {
        

        this.setPagoPA(nextProps.pagoPA);
        this.setSpid(nextProps.spid);

        this.AggiornaLeIcone(nextProps.pagoPA,nextProps.spid);
    }

    AggiornaLeIcone(statePagoPA,stateSpid){
        //controllo se l'icona del pagoPa deve essere attivata
        
        if(statePagoPA === true){
            this.setSrcPagoPA(icoPagoPA);
            this.setALTiconPagoPA('Servizio PagoPA attivo');
        }
        else{
            this.setSrcPagoPA(icoPagoPA_off);
            this.setALTiconPagoPA('Servizio PagoPA disattivo');
        }
        //controllo se l'icona dello spid deve essere attivata
        if(stateSpid === true){
            this.setSrcSpid(icoSpid);
            this.setALTiconSpid('Servizio SPID attivo');
        }
        else{
            this.setSrcSpid(icoSpid_off);
            this.setALTiconSpid('Servizio SPID disattivo');
        }
    }

    setPagoPA(input){
        this.setState({pagoPA:input});
      }
    setSpid(input){
        this.setState({spid:input});
      }

    setSrcPagoPA(input){
        this.setState({srcPagoPA:input});
      }
    
    setSrcSpid(input){
        this.setState({srcSpid:input});
    }

    setALTiconPagoPA(input){
        this.setState({ALTiconPagoPA:input});
    }

    setALTiconSpid(input){
        this.setState({ALTiconSpid:input});
    }



    render() {
        return (

            <div className="Grid-cell u-md-size1of6 u-lg-size1of6 u-textRight">
                <img src={this.state.srcPagoPA} className="m-r-5" alt={this.state.ALTiconPagoPA} title={this.state.ALTiconPagoPA}/>
                <img src={this.state.srcSpid} alt={this.state.ALTiconSpid} title={this.state.ALTiconSpid}/> 
            </div>

        );
    }
}
