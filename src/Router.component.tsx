import React from 'react';
import { Provider } from 'react-redux';
import store from './redux_setup/store';
import { BrowserRouter as Router, Route } from "react-router-dom";
import DummyScreen from './modules/dummy/screens/Dummy.screen';

const RouterComponent: React.FC = () => {
  return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={DummyScreen} />
          { /* Add more routes here... */ }
        </Router>
      </Provider>
  );
};

export default RouterComponent;
