import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
// import createHistory from 'history/createBrowserHistory'
import { createBrowserHistory } from 'history'
import EditExpensePage from './components/EditExpensePage';
import AddExpensePage from './components/AddExpensePage';
import ExpenseDashboardPage from './components/ExpenseDashboardPage';
import Default from './components/Default';
// import Header from './components/Header';
import LoginPage from './components/LoginPage';
import PrivateRoute from './routers/PrivateRoute'
import PublicRoute from './routers/PublicRoute'

export const history = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Switch>
            <PublicRoute path={"/expensey"} exact component={LoginPage} />
            <PrivateRoute path={"/expensey/dashboard"} component={ExpenseDashboardPage} />
            <PrivateRoute path={"/expensey/create"} component={AddExpensePage} />
            <PrivateRoute path={"/expensey/edit/:id"} component={EditExpensePage} />
            <Route component={Default} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
