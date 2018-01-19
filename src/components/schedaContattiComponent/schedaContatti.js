import React, {Component} from 'react';

var obj ;
export default class SchedaContatti extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
            office: "non disponibile",
            tel: "non disponibile",
            email : "non disponibile",
            web : "non disponibile", 
        };
      }

      componentDidMount(){

      }

      componentWillReceiveProps(nextprops){

        if(nextprops.contacts != null && nextprops.contacts != undefined){

            this.setContacts(nextprops.contacts);            
            obj= JSON.parse(nextprops.contacts);

            var email=obj[0].email,
                office=obj[0].office,
                phone=obj[0].phone,
                web=obj[0].web;

            if(email != "" && email!=null && email!=undefined){
                this.setEmail(email);
            }
            if(office != "" && office!=null && office!=undefined){
                this.setOffice(office);
            }
            if(phone != "" && phone!=null && phone!=undefined){
                this.setTel(phone);
            }
            if(web != "" && web!=null && web!=undefined){
                this.setWeb(web)
            }
            
        }
      }

        setContacts(input){
            this.setState({contacts:input});
        }

        setOffice(input){
            this.setState({office:input});
        }
        setTel(input){
            this.setState({tel:input});
        }
        setEmail(input){
            this.setState({email:input});
        }
        setWeb(input){
            this.setState({web:input});
        }

    render() {
        return (

            <div className="u-background-grey-10 u-color-grey-50 u-padding-all-l u-margin-bottom-l" id="Section-Contatti">
                <div className="Grid">
                    <div className="Grid-cell u-md-size5of6 u-lg-size5of6 u-padding-right-xl">
                        <h3 className="u-color-80 u-text-h4">{/*<span class="icon-envelope icons u-text-m"></span>*/}Contatti</h3>
                            {/*<address class="u-lineHeight-l u-text-r-xxs u-textSecondary u-padding-left-xs u-padding-right-xs">
							  Via XX Settembre, 20 - 00187 Roma
							  Tel. (+39) 06.46651
							  Cell. (+39) 321.12345678
							  eMail <a href="#">indirizzo@mail.it</a>
                             </address>*/}
                    </div>
                    <div className="Grid-cell u-md-size1of6 u-lg-size1of6 u-textRight">
                    </div>
                        </div>
                        <p className="u-lineHeight-l u-text-r-xs u-textSecondary u-padding-r-right  u-padding-r-bottom"></p>
                        <div className="Grid">
                                <class is="u-layout-prose u-text-r-x" className="u-layout-prose u-text-r-x">
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong>Ufficio: </strong>
                                            {/*contacts.office*/}
                                            {this.state.office}
                                        </p>
                                    </li>
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong>Telefono: </strong>
                                            {/*contacts.phone*/}
                                            {this.state.tel}
                                        </p>
                                    </li>
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong>Email: </strong>
                                            {/*contacts.email*/}
                                            {this.state.email}
                                        </p>
                                    </li>
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong>Sito: </strong>
                                            {/*contacts.web*/}
                                            {this.state.web}
                                        </p>
                                    </li>
                                </class>
                        </div>
                    </div>

        );
    }
}
