import React from "react";
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
import Sub from "./Components/Sub";
import Main from "./Components/Main";
import { createBrowserHistory } from 'history';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>

        <Route  path="/about" >
          <Main />
        </Route>
        <Route exact path='/'>
          <Sub />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
