import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/ui/Home';
import About from './components/ui/About';
import MemberList from './components/ui/MemberList';
import  { Left, Right, Whoops404  } from './components';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/" component={Right}>
          <Route path="about" component={About} />
          <Route path="members" component={MemberList} />
          <Route path="Our Values" component={Collage} />
        </Route>
        <Route path="*" component={Whoops404} />
    </Router>
)

export default routes
