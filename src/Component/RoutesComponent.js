// RoutesComponent.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ListComponent from './ListComponent';
import FormComponent from './FormComponent';

const RoutesComponent = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Task 1</Link>
            </li>
            <li>
              <Link to="/task3">Task 3</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Switch>
          <Route exact path="/" component={ListComponent} />
          <Route path="/task3" component={FormComponent} />
        </Switch>
      </div>
    </Router>
  );
};

export default RoutesComponent;
