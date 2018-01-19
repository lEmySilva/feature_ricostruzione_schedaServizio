import React, {Component} from 'react';

{/*Da cambiare nome schedaAccesso in SchedaFruizione e i vari import*/
}
export default class TbodySezioneAccesso extends Component {

    constructor(props) {
        super(props);
        this.state = {

/*             arrayOfPhones:null, */
            array:['non disponibile'],
        }

    }
    componentWillReceiveProps(nextProps) {

        var array=nextProps.array;
/*         var phones = nextProps.arrayOfPhones; */

            if(array !=null && array!= undefined && array.length>=1){
                this.setArray(array);
            }

        }

        setArray(input){
            this.setState({array:input});
        }

        FillTable(array){

            return array.map(this.FillRowWithData);

        }

        FillRowWithData(data){
            return  <tr><td>{data}</td></tr>
        }


    render() {
        return (

            <tbody id="tableBodySchedaAccesso_Fruizione">

                                            {this.FillTable(this.state.array)}
                                        </tbody>

        );
    }
}
