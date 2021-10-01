import React, { Suspense } from "react";
import { Router, Switch, Route, Link } from 'react-router-dom';
import Sub from "./Components/Sub";
import Main from "./Components/Main";
import { createBrowserHistory } from 'history';

const App = ({history}) => {

  return (
    <Router history={history}>
      <Suspense fallback={"Loadin"}>
        <Switch>

          <Route path="/about" >
            <Main />
          </Route>
          <Route exact path='/'>
            <Sub />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
