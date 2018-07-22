import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import HomePage from '../components/HomePage';
import CustomerList from '../components/customers/ListContainer';
import ConsultantList from '../components/consultants/ListContainer';
import NotFound from '../components/misc/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/customers" component={CustomerList} />
        <Route path="/consultants" component={ConsultantList} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
