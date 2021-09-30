import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Profile from './components/Profile';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={App} exact></Route>
        <Route path='/profile' component={Profile}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
