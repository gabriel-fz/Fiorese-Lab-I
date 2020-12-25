import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Records from '../pages/Records';
import Comment from '../pages/Comment';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/records" exact component={Records} />
    <Route path="/comment" exact component={Comment} />
  </Switch>
);

export default Routes;
