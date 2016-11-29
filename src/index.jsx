import * as React from "react";
import * as ReactDOM from "react-dom";
import {
   Router,
   Route,
   IndexRoute,
   IndexRedirect,
   browserHistory
} from 'react-router';

import { AppWrapper } from "./app";
import { App } from './main';

ReactDOM.render(
   <Router history={browserHistory}>
      <Route path="/" component={AppWrapper}>
         <IndexRedirect to="/login" />
         <Route path="login" component={App} />
         <Route path="app" component={App} />
      </Route>
   </Router>,
   document.getElementById("example")
);