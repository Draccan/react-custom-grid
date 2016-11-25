/*eslint-disable no-unused-vars*/
import React from "react";
import ReactBsTable from "react-bootstrap-table";
/*eslint-enable no-unused-vars*/

export default class CustomGrid extends React.Component{

	constructor(props){
		super(props);
	}

	_getColumns(){
		return this.props.columns.map(function(elem){

			return (
				<TableHeaderColumn dataField = {elem.column}  
									dataSort = {elem.isSortable} 
									key = {elem.column} 
									isKey = {elem.isKey}
									hidden = {elem.hidden}
									autoValue={ true }
									width={elem.width}
									dataAlign = {elem.dataAlign}
									dataFormat = {elem.dataFormat}
									filter = {elem.filter}
									sortFunc = {elem.sortFunc}> 
									{elem.label} 
				</TableHeaderColumn>
			);
		});
	}


	updateRender(x, y){
		this.refs.table.forceUpdate();
	}

	render(){
		var renderColumns = this._getColumns();

		var htmlTitle = "";
		if(this.props.title){
			htmlTitle = (<h3>{this.props.title}</h3>);
		}

		var selectRowProp = {};

		if(this.props.onSelectRow){
			selectRowProp = {
				mode: this.props.rowSelection,
				clickToSelect: true,
				bgColor: "rgb(238, 193, 213)",
				onSelect: this.props.onSelectRow
			};
		}

		var options = {
			defaultSortName: this.props.defaultSortField, 
			defaultSortOrder: this.props.defaultSortOrder,
			onSortChange: this.updateRender.bind(this),
			sizePerPageList: this.props.sizePerPageList,
      		sizePerPage: 5,
      		page:this.props.pageToShow,
      		onPageChange : this.props.onPageChange
		};

		var dataTotalSize = this.props.data.length;
		if(this.props.remote){
			dataTotalSize = this.props.dataTotalSize;
		}

		return (
			<div>
				{htmlTitle}
				<div style={this.props.style}>
					<div id="custom-grid" className="table-responsive" style={this.props.style}>
						<BootstrapTable data = {this.props.data} 
										striped = {true}
										condensed={true} 
										pagination = {this.props.pagination}
										fetchInfo={ { dataTotalSize: dataTotalSize} }
										search = {this.props.search}
										searchPlaceholder = {"Filtra su tutti i campi"}
										selectRow = {selectRowProp}
										options = {options}
										remote = {this.props.remote}
										ref="table">
							{renderColumns}
						</BootstrapTable>
					</div>
				</div>
			</div>
		);
	}
}

CustomGrid.propTypes = {
	columns: React.PropTypes.array.isRequired,
	data: React.PropTypes.array.isRequired,
	onSelectRow: React.PropTypes.func,
	style: React.PropTypes.object,
	defaultSortField: React.PropTypes.string,
	defaultSortOrder: React.PropTypes.string,
	search: React.PropTypes.bool,
	pagination:React.PropTypes.bool,
	remote: React.PropTypes.bool,
	onPageChange: React.PropTypes.func,
	dataTotalSize: React.PropTypes.number,
	pageToShow: React.PropTypes.number,
	sizePerPageList: React.PropTypes.array
};

CustomGrid.defaultProps = {
    remote: false,
    pageToShow: 1,
    sizePerPageList: [5,10, 15, 25, 50]
};

module.exports = CustomGrid;