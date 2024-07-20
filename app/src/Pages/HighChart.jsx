import { Component } from "react";
import { Footer } from "../Components/Footer";
import Highcharts from 'highcharts'
import { HighChartComponent } from "../Library/HighChart";
import {HighChartOptions} from "../HighChart/HighChartOptions";
import HighchartsMore from 'highcharts/highcharts-more'; // Import highcharts-more module

// Initialize modules
HighchartsMore(Highcharts);

export class HighChart extends Component{
    constructor() {
        super()
        this.highchartsOpts = new HighChartOptions()
    }
    
    componentDidMount() {
        document.title = "High Chart"
    }

    render() {
        return (
            <div>
            {/* <Header/>     */}

            <div className="container-fluid">
                <div className="row mt-4">
                    
                    {/* Line Chart */}
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-header">
                                Line Chart
                            </div>
                            <div className="card-body">
                            <HighChartComponent hc-options={this.highchartsOpts.lineChart()} />
                            </div>
                        </div>
                    </div>

                    {/* Area Chart */}
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-header">
                                Area Chart
                            </div>
                            <div className="card-body">
                                <HighChartComponent hc-options={this.highchartsOpts.areaChart()} />
                                {/* <HighchartsReact highcharts={Highcharts} options={this.highchartsOpts.areaChart()} /> */}
                            </div>
                        </div>
                    </div>
                    
                    {/* Bar chart */}
                    <div className="col-md-6 mt-3">
                        <div className="card shadow">
                            <div className="card-header">
                                Bar Chart
                            </div>
                            <div className="card-body">
                            <HighChartComponent hc-options={this.highchartsOpts.bar()} />
                            </div>
                        </div>
                    </div>

                    {/* Pie Chart */}
                    <div className="col-md-6 mt-3">
                        <div className="card shadow">
                            <div className="card-header">
                                Pie Chart
                            </div>
                            <div className="card-body">
                            <HighChartComponent hc-options={this.highchartsOpts.pie()} />
                            </div>
                        </div>
                    </div>

                    {/* Bubble Chart */}
                    <div className="col-md-6 mt-3">
                        <div className="card shadow">
                            <div className="card-header">
                                Bubble Chart
                            </div>
                            <div className="card-body">
                            <HighChartComponent hc-options={this.highchartsOpts.bubble()} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
            </div>
        )
    }
}