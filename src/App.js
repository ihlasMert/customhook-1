import "./App.css";
import { Fragment } from "react";
import BackardCounter from "./components/BackardCounter";
import ForwardCounter from "./components/ForwardCounter";

function App() {
  return (
    <Fragment>
      <BackardCounter />
      <ForwardCounter />
    </Fragment>
  );
}

export default App;
