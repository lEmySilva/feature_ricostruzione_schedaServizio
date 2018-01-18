import React, {Component} from 'react';


export default class SchedaContatti extends Component {


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
                                            <strong>Ufficio:</strong>
                                            {/*contacts.office*/}
                                        </p>
                                    </li>
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong>Telefono:</strong>
                                            {/*contacts.phone*/}
                                        </p>
                                    </li>
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong>Email:</strong>
                                            {/*contacts.email*/}
                                        </p>
                                    </li>
                                    <li className="u-padding-bottom-xs no-ListStyle">
                                        <p>
                                            <strong>Sito:</strong>
                                            {/*contacts.web*/}
                                        </p>
                                    </li>
                                </class>
                        </div>
                    </div>

        );
    }
}
