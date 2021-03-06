import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './app.css';
//
import * as React from 'react';
import * as ReactDOM from 'react-dom';
//
import * as wjChart from '@grapecity/wijmo.chart';
//
import * as Core from '@grapecity/wijmo';
import * as Chart from '@grapecity/wijmo.react.chart';
import * as annotation from '@grapecity/wijmo.chart.annotation';
//
import { getData } from './data';
import { EditableAnnotationLayer, Button } from './EditableAnnotationLayer';
import { AxisScrollbar } from './AxisScrollbar';
//
class App extends React.Component {
    //
    constructor(props) {
        super(props);
        this.state = {
            data: getData(),
            isEditable: true
        };
    }
    //
    render() {
        return <div className="container-fluid">
            <div className="form-group">
                <label id="labelIsEditable">Is Editable:
                    <input type="checkbox" id="checkboxIsEditable" checked={this.state.isEditable} onChange={this.editableChange.bind(this)}/>
                </label>

                <Chart.FlexChart initialized={this.chartInitialized.bind(this)} itemsSource={this.state.data} tooltipContent="" rendered={this.chartRendered.bind(this)} chartType="Scatter" bindingX="x">
                    <Chart.FlexChartSeries name="data" binding="y"></Chart.FlexChartSeries>
                </Chart.FlexChart>
            </div>
        </div>;
    }
    //
    editableChange() {
        if (this.al) {
            this.setState({ isEditable: !this.state.isEditable }, () => this.al.isEditable = this.state.isEditable);
        }
    }
    //
    chartInitialized(flex) {
        this.theChart = flex;
        let axisScrollBar = new AxisScrollbar(this.theChart.axes[0]);
        window.setTimeout(function () {
            axisScrollBar.maxPos = 0.5;
        }, 20);
    }
    //
    chartRendered() {
        let al = this.al;
        if (!al) {
            al = new EditableAnnotationLayer(this.theChart);
            this.al = al;
            al.isEditable = this.state.isEditable;
            //
            //add customize button
            var triangle, triangleBtn = new Button(function (engine) {
                var triangleIcon = new annotation.Polygon({
                    tooltip: 'Custom Button - Triangle </br>Select to add Triangle Annotation.',
                    points: [{
                            x: 10, y: 5
                        }, {
                            x: 5, y: 15
                        }, {
                            x: 15, y: 15
                        }],
                    style: {
                        fill: 'yellow'
                    }
                });
                triangleIcon.render(engine);
                return triangleIcon._element;
            }, function (point, isDataCoordinate) {
                var x = isDataCoordinate ? point.dx : point.x, y = isDataCoordinate ? point.dy : point.y;
                triangle = new annotation.Polygon({
                    attachment: isDataCoordinate ? annotation.AnnotationAttachment.DataCoordinate : annotation.AnnotationAttachment.Absolute,
                    tooltip: 'Customize Annotation - Triangle',
                    points: [{
                            x: x, y: y
                        }, {
                            x: x, y: y
                        }, {
                            x: x, y: y
                        }],
                    style: {
                        fill: 'yellow'
                    }
                });
                al.items.push(triangle);
            }, function (originPoint, currentPoint, isDataCoordinate) {
                var ox = isDataCoordinate ? originPoint.dx : originPoint.x, oy = isDataCoordinate ? originPoint.dy : originPoint.y, cx = isDataCoordinate ? currentPoint.dx : currentPoint.x, cy = isDataCoordinate ? currentPoint.dy : currentPoint.y, offsetX = Math.abs(cx - ox), offsetY = cy - oy, isXDate = Core.isDate(ox), isYDate = Core.isDate(oy), oaDate = wjChart.FlexChart._fromOADate;
                triangle.points.clear();
                triangle.points.push({ x: ox, y: isYDate ? oaDate(oy - offsetY) : oy - offsetY });
                triangle.points.push({ x: isXDate ? oaDate(ox - offsetX) : ox - offsetX, y: isYDate ? oaDate(oy - 0 + offsetY) : oy + offsetY });
                triangle.points.push({ x: isXDate ? oaDate(ox - 0 + offsetX) : ox + offsetX, y: isYDate ? oaDate(oy - 0 + offsetY) : oy + offsetY });
            });
            al.buttons.push(triangleBtn);
            //
            //add pre-defined annotations.
            var watermarker = new annotation.Text({
                position: annotation.AnnotationPosition.Left | annotation.AnnotationPosition.Top,
                attachment: annotation.AnnotationAttachment.Relative,
                text: 'watermarker',
                tooltip: 'Text Watermarker',
                point: { x: 1, y: 1 },
                style: { 'fill': '#cccccc', 'font-size': '30px', opacity: 0.2 }
            });
            al.items.push(watermarker);
            //
            var imgmarker = new annotation.Image({
                position: annotation.AnnotationPosition.Right | annotation.AnnotationPosition.Top,
                attachment: annotation.AnnotationAttachment.Relative,
                tooltip: 'Image Watermarker',
                point: { x: 0, y: 1 },
                width: 128,
                height: 33,
                href: 'resources/wijmo-logo-text.png',
                style: { opacity: 0.2 }
            });
            al.items.push(imgmarker);
            //
            var centerHLine = new annotation.Line({
                attachment: annotation.AnnotationAttachment.DataCoordinate,
                position: annotation.AnnotationPosition.Center,
                content: 'Vertical Center Line',
                start: { x: 50, y: 0 },
                end: { x: 50, y: 1000 },
                style: {
                    'stroke-width': '2px',
                    stroke: 'green'
                }
            });
            al.items.push(centerHLine);
            //
            var centerVLine = new annotation.Line({
                attachment: annotation.AnnotationAttachment.Relative,
                position: annotation.AnnotationPosition.Center,
                content: 'Horizontal Center Line',
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
                style: {
                    'stroke-width': '2px',
                    stroke: 'red'
                }
            });
            al.items.push(centerVLine);
            //
            var topRange = new annotation.Polygon({
                attachment: annotation.AnnotationAttachment.Relative,
                points: [{ x: 0, y: 0 }, { x: 0, y: 0.2 }, { x: 1, y: 0.2 }, { x: 1, y: 0 }],
                content: 'Top Range',
                style: { fill: '#FEF0DB', opacity: 0.5, stroke: '#FEF0DB' }
            });
            al.items.push(topRange);
            //
            //flag
            var pointIndex = 10;
            ['black', 'blue', 'green', 'red', 'yellow'].forEach(function (v) {
                var flagSrc = 'resources/flag-' + v + '-icon.png';
                var flag = new annotation.Image({
                    attachment: annotation.AnnotationAttachment.DataIndex,
                    seriesIndex: 0,
                    pointIndex: pointIndex,
                    width: 24,
                    height: 24,
                    href: flagSrc
                });
                al.items.push(flag);
                pointIndex += 10;
            });
            //
            var rect = new annotation.Rectangle({
                attachment: annotation.AnnotationAttachment.DataCoordinate,
                point: { x: 10, y: 650 },
                width: 120,
                height: 150,
                style: {
                    'stroke-dasharray': '4 4',
                    stroke: 'red'
                }
            });
            al.items.push(rect);
            //
            var circle = new annotation.Circle({
                seriesIndex: 0,
                attachment: annotation.AnnotationAttachment.DataCoordinate,
                radius: 80,
                point: { x: 70, y: 350 },
                style: {
                    stroke: 'blue',
                    fill: 'blue',
                    opacity: 0.3
                }
            });
            al.items.push(circle);
        }
    }
}
//
ReactDOM.render(<App />, document.getElementById('app'));
