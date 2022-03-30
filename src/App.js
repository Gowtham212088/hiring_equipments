import "./App.css";
// import { EQUIPMENT } from "./Equipment";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Carosel from "./Home page/Carosel";
import Body from "./Home page/Body";
import Category from "./Category";
import About from "./About";
import { Router } from "react-router-dom";
import Contact from "./ContactUs";
import LoginForm from "./Login";
import Error from "./Error";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/hiring_equipments/">
          <Home />
        </Route>

        <Route exact path="/about">
          {" "}
          <About />{" "}
        </Route>

        <Route exact path="/product">
          {" "}
          <Category />{" "}
        </Route>

        <Route exact path="/">
          {" "}
          <Home />{" "}
        </Route>
        <Route path="/contact">
          {" "}
          <Contact />{" "}
        </Route>

        <Route path="/login">
          {" "}
          <LoginForm />{" "}
        </Route>

        <Route exact path="/**">
          {" "}
          <Error />{" "}
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>
        <Carosel />
        <Body />
      </h1>
    </div>
  );
}

export default App;
