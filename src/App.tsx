import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Routes/External/Home/home";
import Offerings from "./Components/Routes/External/Offerings/offerings";

class App extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/offerings" component={Offerings} />
            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}
export default App;
