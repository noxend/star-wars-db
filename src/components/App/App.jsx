import React, { Component } from "react";

import SwapiService from "../../services/SwapiService";

import Nav from "../nav";
import Random from '../random';
import VehiclePage from '../vehicle-page';
import PersonPage from '../person-page';
import PlanetsPage from '../planets-page';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { SwapiServiceProvider } from '../swapi-service-context';

import "./App.css";

class App extends Component {

  swapi = new SwapiService();

  state = {
    selectedItem: null
  };

  render() {

    this.swapi.getAllVehicles()
      .then(vh => {
        console.log(vh)
      });

    return (
      <SwapiServiceProvider value={this.swapi}>
        <BrowserRouter>
          <div className="app">
            <Nav />
            <Random />
              <React.Fragment>
                <Switch>
                  <Route path='/' exact render={() => <div className='container'><h1>Welocme to Star Wars DB</h1></div> } />
                  <Route path='/vehicle/:id?' component={VehiclePage}/>
                  <Route path='/person/:id?' component={PersonPage}/>
                  <Route path='/planets' component={PlanetsPage}/>
                  <Redirect to='/' />
                </Switch>
              </React.Fragment>
          </div>
        </BrowserRouter>
      </SwapiServiceProvider>
    );
  }
}

export default App;
