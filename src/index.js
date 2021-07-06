import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Reducer, { initialState } from "./Reducer";
import { StateProvider } from "./StateProvider";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={Reducer}>
      <App />
    </StateProvider>
  </StrictMode>,
  rootElement
);
