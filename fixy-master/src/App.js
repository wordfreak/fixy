import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./index.css";
// import "./App.css";

import About from "./component/About";
import Terms from "./component/Terms";
import Sponsorship from "./component/Sponsorship";
import Nav from "./component/Nav";
import Privacy from "./component/Privacy";

import { ReactComponent as Bgbottom } from "./bg-bottom.svg";
import { Userform } from "./form/UserForm";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Bgtop } from "./bg-top.svg";

function App() {
  return (
    <div className="container h-auto relative overflow-hidden  mx-auto flex px-5 py-24 items-center justify-center flex-col bg-white">
      <div className="app ">
        <Router>
          <div className="flex justify-items-center  bg-yellow-500">
            <Logo />
          </div>
          <Bgtop />

          {/* <div className="img-div-bottom  object-left-bottom"> */}
          {/* <img src={Bgbottom} alt="image" /> */}
          <Bgbottom />
          {/* </div> */}
          {/* <div className="logoBox">
            <img src={Logo} alt="" className="logo" />
           
          </div> */}

          <Userform />
          <Nav />
          <Switch>
            <Route path="/About" exact component={About} />
            <Route path="/Privacy" exact component={Privacy} />
            <Route path="/Terms" exact component={Terms} />
            <Route path="/Sponsorship" exact component={Sponsorship} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
