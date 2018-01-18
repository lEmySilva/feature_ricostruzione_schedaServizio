import React, {Component} from 'react';
import '../../BaseLayoutItems/css/masonry.css';

import DatiJson from '../../DatiJson.json';

var self;

export default class RelatedComponent extends Component {

    randomizeTilePosition(tileNumber, array) {

        var currentIndex = array.length,
            temporaryValue,
            randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        /* console.log('array mischiato: ')
    console.log(array) */

        this.CreateTiles(tileNumber, array);
    }


    controlloCaratteriMAX(input){
        var fraseDescrizione="";
        if(input.length>0)
        {
            fraseDescrizione = input.substring(0,80)+"...";
        }
        return  fraseDescrizione;
    }


    CreateTiles(tileNumber, datiAjax)
    {
        var tileContainer = document.getElementById('gridTileContainer');

        for (var i = 0; i < datiAjax.length; i++) {

            /* creo il card container da poter riutilizzare per ogni tile, per le animazioni di flip */
            // var card_container = document.createElement('DIV');
            // card_container.setAttribute('class', 'card-container');
            // var card = document.createElement('DIV');
            // card.setAttribute('class', 'card');
            // var side = document.createElement('DIV');
            // side.setAttribute('class', 'side');
            // /* dentro side ci va il tile */
            // var side_back = document.createElement('DIV');
            // side_back.setAttribute('class', 'side back')
            /* qua ci andra il retro della card */

            var tile = document.createElement('DIV');

            if (datiAjax[i].importanza <= 33 && datiAjax[i].importanza >= 1) {
                /* quadrato piccolo */
                //vuol dire che si dovra creare un quadrato piccolo
                tile.setAttribute('class', 'grid-item back-grid-item');

                //title of relation services
                var title_div = document.createElement('DIV');
                title_div.setAttribute('class','TitleOfService u-color-white u-textWeight-600 TitleOfService_quadratino');
                var title_div_textNode = document.createTextNode(datiAjax[i].nome);
                title_div.appendChild(title_div_textNode);

            } else if (datiAjax[i].importanza <= 66 && datiAjax[i].importanza >= 34) {


                //vuol dire che si dovrà creare il rettangolo
                /* rettangolo */
                tile.setAttribute('class', 'grid-item grid-item--Rettangolo back-Rettangolo');
                //creo la variabile contenente la descrizione 
                var contentText= document.createElement('DIV');
                contentText.setAttribute('class','DescriptionOfTiles DescriptionOfTiles_rettangolo');
                var contentTextNode = document.createTextNode(this.controlloCaratteriMAX(datiAjax[i].about));
                contentText.appendChild(contentTextNode);

                            //title of relation services
                var title_div = document.createElement('DIV');
                title_div.setAttribute('class','TitleOfService u-color-white u-textWeight-600 TitleOfService_rettangolo');
                var title_div_textNode = document.createTextNode(datiAjax[i].nome);
                title_div.appendChild(title_div_textNode);


            } else {


                /* quadrato grande */
                //vuol dire che si dovrà creare il quadrato grande
                tile.setAttribute('class', 'grid-item grid-item--BigQuadrato back-BigQuadrato');
        //creo la variabile contenente la descrizione 
            var contentText= document.createElement('DIV');
            contentText.setAttribute('class','DescriptionOfTiles u-color-white DescriptionOfTiles_quadrato');


            var contentTextNode = document.createTextNode(this.controlloCaratteriMAX(datiAjax[i].about));
            contentText.appendChild(contentTextNode);

            //title of relation services
            var title_div = document.createElement('DIV');
            title_div.setAttribute('class','TitleOfService u-color-white u-textWeight-600 TitleOfService_quadrato');
            var title_div_textNode = document.createTextNode(datiAjax[i].nome);
            title_div.appendChild(title_div_textNode);
            }

            /* console.log('tile n°' + i + " " + datiAjax[i].id) */
            tile.setAttribute('id', datiAjax[i].id);
            



            //creo il numberSign 
            var numberSign = document.createElement('SPAN');
            numberSign.setAttribute('class', '  u-text-r-xxs u-margin-left-xxs u-background-white u-color-60 u-borderRadius-xl' +
                    ' u-padding-all-xxs u-padding-right-xs u-padding-left-xs aggiustamentoNotificaTag');
            var numberSign_textNode = document.createTextNode(datiAjax[i].numeroTag);
            numberSign.appendChild(numberSign_textNode);
            
            //faccio un controllo in modo tale da non mettere la descrizione del servizio sui quadratini piccoli
            if(datiAjax[i].importanza>33 && datiAjax[i].importanza<=100){
                tile.appendChild(contentText);
            }
            tile.appendChild(title_div);
            tile.appendChild(numberSign);

            /* riformo la tile e tutti gli effetti insieme  */

            // side.appendChild(tile);
            // card.appendChild(side);
            // card.appendChild(side_back);
            // card_container.appendChild(card);
            // tileContainer.appendChild(card_container);
            tileContainer.appendChild(tile); 


        } //end for
    }

    GetDatiAjax()
    {

        /* console.log(DatiJson); */
/*         console.log('array non mischiato: ')
        console.log(DatiJson) */
        var tileNumber = DatiJson.length;
        var datiJson = DatiJson;
        /* console.log('LUNGHEZZA ARRAY: '+tileNumber) */

        this.randomizeTilePosition(tileNumber, datiJson);
    }

    componentDidMount()
    {
        self = this;
        this.GetDatiAjax();
    }

    render() {
        return (

            <div className="grid" id="gridTileContainer">
{/* 
<div class="flip-box flip-up">
            <div class="object">
                <div class="front">
                <div className="grid-item "></div>
                </div>
                <div class="back">
                    Back
                </div>
                <div class="flank"></div>
            </div>
        </div>


                 <div className="grid-item grid-item--BigQuadrato"></div>
                    <div className="grid-item "></div>
                    <div className="grid-item grid-item--Rettangolo"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item "></div>
                    <div className="grid-item grid-item--Rettangolo"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item "></div>
                    <div className="grid-item grid-item--BigQuadrato"></div>
                    <div className="grid-item grid-item--Rettangolo"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item "></div>
                    <div className="grid-item grid-item--BigQuadrato"></div>
                    <div className="grid-item"></div>   */}
                {/* 14 */}
            </div>

        );
    }
}
