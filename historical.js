import React, { useState,useEffect } from 'react';
import DatePicker from 'react-datepicker';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import data from "../components/data/data.json";

const Table = () => {     
      const [value, onChange] = useState("2020-10-05");
      const [val,onSet]= useState("2020-10-07");
      console.log(value,val);
      var result = data.filter(function(obj) {
            return obj.date >= value && obj.date <= val;
      });
      console.log(result);
    return (
      <div>
      <DatePicker 
        onChange={onChange}
        value={value}
      />
      <DatePicker
        onChange={onSet}
        value={val}
      />
        <BootstrapTable data={result} classname="table" trClassName='tr-style' rowClasses="custom-row-class" striped={true} hover={true} condensed= {true} search={true} sort={ { dataField: 'Price', order: 'asc' } } pagination={true}> 
          <TableHeaderColumn isKey dataField='date'  dataSort columnTitle className="style">
                Date
          </TableHeaderColumn>
          <TableHeaderColumn dataField='market-cap'  dataAlign="center" className="style">
                Market-Cap
          </TableHeaderColumn>
          <TableHeaderColumn dataField='volume' dataAlign="center" className="style">
                Volume
          </TableHeaderColumn>
          <TableHeaderColumn className="style" dataField='open' dataAlign="center" dataSort columnTitle tdStyle={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                Open
          </TableHeaderColumn>
          <TableHeaderColumn dataField='close' dataAlign="center" dataSort columnTitle className="style">
               Close
          </TableHeaderColumn>
    </BootstrapTable>
      </div>
    );
  }
 
export default Table;
