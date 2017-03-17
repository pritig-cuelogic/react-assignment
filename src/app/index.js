import React from "react";
import { render } from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import {Provider} from "react-redux";

import { Dashboard } from "./components/Dashboard";
import Login from "./containers/Login";
import  Profile  from "./containers/Profile";
import { Register } from "./containers/Register";
import Root from "./containers/Root";
import store from "./store";


render(<Provider store={store}>
        <Router history={browserHistory}>
			<Route path={"/"} component={Root} >
                     <IndexRoute component={Dashboard} />
                     <Route path={"dashboard"} component={Dashboard} />
                     <Route path={"profile"} component={Profile} />
			</Route>
			<Route path={"login"} component={Login}/>
			<Route path={"register"} component={Register}/>
		</Router>
	</Provider> ,
 window.document.getElementById("app"));
