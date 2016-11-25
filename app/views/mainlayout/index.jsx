/*eslint-disable no-unused-vars*/
import React from "react";
import ReactBsTable from "react-bootstrap-table";
/*eslint-enable no-unused-vars*/

import CustomGrid from "./custom-grid";

export default class CustomGridIndex extends React.Component{

	render(){

		var data = [{id:1, name:"Paolo", surname:"Dell'Aguzzo"}, {id:2, name:"Filippo", surname:"Silvestri"}];
		var columns = [	{"column":"id", "label":"ID", "isKey": true, "hidden": true, "width":"0"},
						{"column":"name", "label":"Name", "isKey": false, "width":"100"},
						{"column":"surname", "label":"Surname", "isKey": false, "width":"100"}
					];
		return(
			<div>
				<h3>Test Custom Grid Index</h3>
				<CustomGrid data = {data} columns = {columns} search = {true} pagination = {true}/>
			</div>
		);
	}
	
}

module.exports = CustomGridIndex;