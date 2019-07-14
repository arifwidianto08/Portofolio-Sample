import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, idx) => {
          return <Route {...route} key={idx} />;
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
