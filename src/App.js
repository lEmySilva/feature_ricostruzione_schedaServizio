import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import IndexPage from './views/indexPage/indexPage';
import SearchPage from './views/searchPage/searchPage';
import SchedaServizio from './views/servicePage/ServiceSchedaServizio';


export default class App extends Component {
  render() {
    return (
       /* il tutto (le rotte e i link possono essere anche separati,in diversi componenti) ma le rotte credo che devono sempre andare nel index.js dove viene renderizzato il tutto */
      <div>
        {/* il router serve solo da raccoglitore nel quale ci possono andare sia le rotte che i link */}
        <Router>
          <div>
            {/* lo switch verrà usato in questo caso per far si che se si inserisce nel url un path non 
            valido si presenti un errore del file no found tramite una 
            Rotta Speciale */}
            <Switch>
            {/* le rotte servono principalmente a capire su che pagina si vuole andare, leggendo dall'url il path */}
              <Route exact path="/" component={IndexPage}/>
              <Route exact path="/ricerca" component={SearchPage}/>
              <Route exact path="/servicePage" component={SchedaServizio}/>
              {/* ROTTA SPECIALE PER IL PATH NON VALIDO */}
              <Route render={function(){
                return <h1>PAGE NOT FOUND!</h1>
              }}/>
            </Switch>
            {/* I link invece sono come gli anchor <a></a> in html e servono per modificare l'url e mandare un evento che faccia capire alle rotte che qualcosa è cambiato */}
          </div>
        </Router>
        
      </div> 
    );
  }
}

