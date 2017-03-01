import React from "react";
import { render } from "react-dom";

class App extends React.Component {
	render() {
		return (
				<div>
					<h3>Hello World! </h3>
				</div>
			);
	}
}

render(<App/>, window.document.getElementById("app"));
