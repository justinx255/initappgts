// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createBrowserHistory, createMemoryHistory } from 'history';

const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, el);
  return {
    onParentNavigate({
      pathname: nextPathname
    }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
}
if (process.env.NODE_ENV = "development") {
  const devRoot = document.querySelector('#root');
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export {
  mount
}