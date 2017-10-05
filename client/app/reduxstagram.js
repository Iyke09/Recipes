
import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';


// Import Components
import App from './component/App';
import Single from './component/Single';
import Signup from './component/Signup';
import Signin from './component/Signin';
import Add from './component/addRecipe';
import Edit from './component/Edit';
import PhotoGrid from './component/PhotoGrid';
import Gallery from './component/Gallery';
import Show from './component/Show';
import Profile from './component/profile';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/photos/add" component={Add}></Route>
        <Route path="/recipes/edit" component={Edit}></Route>
        <Route path="/auth/signup" component={Signup}></Route>
        <Route path="/auth/signin" component={Signin}></Route>
        <Route path="/auth/profile" component={Profile}></Route>
        <Route path="/gallery/:id/details/:cart" component={Single}></Route>
        <Route path="/gallery/:id" component={Gallery}></Route>
        <Route path="/gallery/:id/slideshow" component={Show}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
