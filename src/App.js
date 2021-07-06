import Checkout from "./Checkout";
import Content from "./Components/Content";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Content />
          </Route>
          <Route path="/checkout">
            <Navbar />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
