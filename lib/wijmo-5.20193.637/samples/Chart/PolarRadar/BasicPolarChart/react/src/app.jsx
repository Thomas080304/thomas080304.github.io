import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './app.css';
//
import * as React from 'react';
import * as ReactDOM from 'react-dom';
//
import * as chart from '@grapecity/wijmo.chart';
import * as wjRadar from '@grapecity/wijmo.react.chart.radar';
import * as wjChartAnimate from '@grapecity/wijmo.react.chart.animation';
import { getData } from './data';
//
class App extends React.Component {
    constructor(props) {
        super(props);
        //
        this.getRandomPalette = () => {
            let palettes = Object.getOwnPropertyNames(chart.Palettes)
                .filter(prop => typeof chart.Palettes[prop] === "object" && prop !== 'prototype');
            let rand = Math.floor(Math.random() * palettes.length);
            //
            return chart.Palettes[palettes[rand]];
        };
        this.state = {
            data: getData(),
            palette: this.getRandomPalette()
        };
    }
    //
    render() {
        return <div className="container-fluid">
            <wjRadar.FlexRadar initialized={this.initialized.bind(this)} bindingX="longitude" palette={this.state.palette}>
                <wjRadar.FlexRadarAxis wjProperty="axisY" min={0} max={100} majorUnit={25}>
                </wjRadar.FlexRadarAxis>
                <wjRadar.FlexRadarSeries binding="latitude1"></wjRadar.FlexRadarSeries>
                <wjRadar.FlexRadarSeries binding="latitude2"></wjRadar.FlexRadarSeries>
                <wjChartAnimate.FlexChartAnimation easing="EaseInOutBounce" animationMode="Series" duration={1000}>
                </wjChartAnimate.FlexChartAnimation>
            </wjRadar.FlexRadar>
        </div>;
    }
    //
    initialized(theChart) {
        let app = this;
        setTimeout(function () {
            theChart.itemsSource = app.state.data;
        }, 200);
    }
}
//
ReactDOM.render(<App />, document.getElementById('app'));
