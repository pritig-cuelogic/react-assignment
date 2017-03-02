import React from "react";
import { render } from "react-dom";
import {Router, Route, browserHistory} from "react-router";

import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { Register } from "./components/Register";
class App extends React.Component {
	render() {
		var userData = {
            "employee": [{
                "name": "priti",
                "email": "priti@gmail.com"
            },
            {
                "name": "Vivek",
                "email": "vivek@gmail.com"
            },{
                "name": "ccccc",
                "email": "ccccc@gmail.com"
            },{
                "name": "neha",
                "email": "neha@gmail.com"
            },
            ]
        };
		return (
				<div className="container">
					<div className="row">
						<div className="col-xs-10">
							<Dashboard />
						</div>
					</div>
					<div className="row">
						<div className="col-xs-6">
							Register Form
							<Register />
						</div>
						<div className="col-xs-6">
							Login Form
							<Login />
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12">
							<hr/>
							<h4> Users Profile</h4>
							<Profile user={userData}/>
						</div>
					</div>
				</div>
			);
	}
}

render(<App/>, window.document.getElementById("app"));
