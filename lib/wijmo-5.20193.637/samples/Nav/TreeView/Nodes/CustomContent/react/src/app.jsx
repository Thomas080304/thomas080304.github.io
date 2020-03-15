import './app.css';
import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
//
import * as React from 'react';
import * as ReactDOM from 'react-dom';
//
import * as wjNav from '@grapecity/wijmo.react.nav';
import { getData } from './data';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = getData();
    }
    render() {
        return (<div className="container-fluid">
                <wjNav.TreeView itemsSource={this.state} displayMemberPath="header" childItemsPath="items" formatItem={this.onFormatItem.bind(this)}>
                </wjNav.TreeView>
            </div>);
    }
    onFormatItem(s, e) {
        if (e.dataItem.newItem) {
            let imgUrl = 'resources/new.png';
            e.element.innerHTML += '<img class="new-icon" src="' + imgUrl + '">';
        }
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
