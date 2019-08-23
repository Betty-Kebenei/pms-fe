import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import '../node_modules/toastr/build/toastr.css';

import Header from './components/Header';
import Location from './components/Location';
import LocationForm from './components/LocationForm';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <div className="App-pages">
            <Switch>
              <Route exact path="/" component={Location} />
              <Route path="/form/:locationId/edit" component={LocationForm} />
              <Route path="/form/:parentId" component={LocationForm} />
              <Route path="/form" component={LocationForm} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
