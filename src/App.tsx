import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Routes/External/Home/home";
import Offerings from "./Components/Routes/External/Offerings/offerings";
import Payment from "./Components/Routes/External/Payment/payment";
import Assure from "./Components/Routes/External/Programs/assure";
import Patient from "./Components/Routes/External/Programs/patient";

class App extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/offerings" component={Offerings} />
              <Route exact path="/offerings/MedsafAssureProgram" component={Assure} />
              <Route exact path="/offerings/PatientDirectProgram" component={Patient} />
              <Route exact path="/offerings/MedsafAssureProgram/payment" component={Payment} />
            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}
export default App;
