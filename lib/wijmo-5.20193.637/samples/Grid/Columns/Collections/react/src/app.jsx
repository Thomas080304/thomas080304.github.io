import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './app.css';
//
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as wjGrid from '@grapecity/wijmo.react.grid';
import * as wjcGrid from '@grapecity/wijmo.grid';
import { getData } from './data';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: getData()
        };
    }
    render() {
        return (<div className="container-fluid">
        <wjGrid.FlexGrid initialized={this.firstGridInitial.bind(this)} itemsSource={this.state.data}/>
        <p>
          And this grid has no fixed columns and a custom set of scrollable
          columns:
        </p>
        <wjGrid.FlexGrid initialized={this.secondGridInitial.bind(this)} itemsSource={this.state.data}>
          <wjGrid.FlexGridColumn header="Country" binding="country"/>
          <wjGrid.FlexGridColumn header="Sales" binding="sales"/>
          <wjGrid.FlexGridColumn header="Expenses" binding="expenses"/>
        </wjGrid.FlexGrid>
      </div>);
    }
    firstGridInitial(grid) {
        grid.rowHeaders.columns.push(new wjcGrid.Column()); // extra fixed column
    }
    secondGridInitial(grid) {
        grid.rowHeaders.columns.splice(0, 1); // no extra columns
    }
}
ReactDOM.render(<App />, document.getElementById("app"));
