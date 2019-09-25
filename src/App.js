import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HelpPage from './components/HelpPage';
import EditExpensePage from './components/EditExpensePage';
import AddExpensePage from './components/AddExpensePage';
import ExpenseDashboardPage from './components/ExpenseDashboardPage';
import Default from './components/Default';
import Header from './components/Header';
import Redux from './components/Redux';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path={"/"} exact component={ExpenseDashboardPage} />
            <Route path={"/create"} component={AddExpensePage} />
            <Route path={"/edit/:id"} component={EditExpensePage} />
            <Route path={"/help"} component={HelpPage} />
            <Route component={Default} />
          </Switch>
          <Redux />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
