import React from 'react';
import classNames from 'classnames';

import { AgGridReact } from 'ag-grid-react';

import './styles.scss';

import 'ag-grid-enterprise';

class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "Country",
          field: "country",
          width: 120,
          rowGroup: true
        },
        {
          headerName: "Year",
          field: "year",
          width: 90,
          rowGroup: true
        },
        {
          headerName: "Sport",
          field: "sport",
          width: 110,
          rowGroup: true
        },
        {
          headerName: "Athlete",
          field: "athlete",
          width: 200
        },
        {
          headerName: "Gold",
          field: "gold",
          width: 100
        },
        {
          headerName: "Silver",
          field: "silver",
          width: 100
        },
        {
          headerName: "Bronze",
          field: "bronze",
          width: 100
        },
        {
          headerName: "Total",
          field: "total",
          width: 100
        },
        {
          headerName: "Age",
          field: "age",
          width: 90
        },
        {
          headerName: "Date",
          field: "date",
          width: 110
        }
      ],
      defaultColDef: {
        sortable: true,
        filter: true
      },
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json')
      .then(result => result.json())
      .then(rowData => this.setState({rowData}))
  }

  render(){
    return (
      <div className={classNames('ag-theme-balham')} style={ {height: '800px', width: 'auto'} }>
        <AgGridReact
            onGridReady={params => {
              this.gridApi = params.api;
              this.gridColumnApi = params.columnApi;
            }}
            columnDefs={this.state.columnDefs}
            groupSelectsChildren={true}
            rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}

export default AppClass;