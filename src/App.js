import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import TodoList from './containers/TodoList';
import Footer from './components/Footer';
import NotFound from './containers/NotFound';

function App() {
  return (
    <div className="min-vh-100 position-relative pb-5">
      <Header>To do list APP</Header>
      <Switch>
        <Route exact path="/">
          <Redirect to="/todos" />
        </Route>
        <Route exact path="/todos" component={TodoList} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
