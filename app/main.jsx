import React from "react";
import ReactDOM from "react-dom";

import routes from "lib/routes";

export default class Main extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return routes;
	}
}


ReactDOM.render(<Main />, document.getElementById("root"));
