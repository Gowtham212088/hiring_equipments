import "./App.css";
import { EQUIPMENT } from "./EQUIPMENT";
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

        <Route path="/**">
          {" "}
          <Error />{" "}
        </Route>
      </Switch>
    </div>
  );
}

function ProductsMain() {
  return (
    <div id="productsMain">
      {EQUIPMENT.map((product) => (
        <Products
          id={product.id}
          name={product.name}
          poster={product.poster}
          rental={product.rental}
          description={product.description}
          availablity={product.availablity}
        />
      ))}
    </div>
  );
}

function Products({ id, name, poster, rental, description, availablity }) {
  return (
    <div id="products">
      <img id="img" src={poster} alt={name} />
      <div id="name-rental">
        <h2 id="name"> {name} </h2>

        <h2 id="rental"> {rental} </h2>
      </div>

      <div id="availablity">
        {availablity ? (
          <h3 style={{ color: "#33cc00" }}> Available </h3>
        ) : (
          <h3 style={{ color: "#ff3300" }}> Un Available </h3>
        )}
      </div>

      <p id="summary"> {description} </p>
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
