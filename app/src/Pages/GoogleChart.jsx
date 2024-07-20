import { Component } from "react";
import { Footer } from "../Components/Footer";
import GoogleChartComponent from "react-google-charts";
import { areaData, barData, lineData, pieData } from "../GoogleChart/GoogleChartData";
import { areaOption, barOption, lineOption, pieOption } from "../GoogleChart/GoogleChartOptions";

export class GoogleChart extends Component{

    componentDidMount() {
        document.title = "Google Chart";
    }

    render() {
        return (
            <div>
            {/* <Header/> */}
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="card shadow">
                        <div className="card-header">
                            Line Chart
                        </div>
                        <div className="card-body">
                        <GoogleChartComponent
                            chartType="Line"
                            height="400px"
                            data={lineData}
                            options={lineOption}
                        />
                        </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card shadow">
                        <div className="card-header">
                            Bar Chart
                        </div>
                        <div className="card-body">    
                        <GoogleChartComponent
                            chartType="Bar"
                            height="400px"
                            data={barData}
                            options={barOption}
                        />
                        </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4">
                        <div className="card shadow">
                        <div className="card-header">
                            Area Chart
                        </div>
                        <div className="card-body">    
                        <GoogleChartComponent
                            chartType="AreaChart"
                            height="400px"
                            data={areaData}
                            options={areaOption}
                        />
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 mt-4">
                        <div className="card shadow">
                        <div className="card-header">
                            Pie Chart
                        </div>
                        <div className="card-body">    
                        <GoogleChartComponent
                            chartType="PieChart"
                            height="400px"
                            data={pieData}
                            options={pieOption}
                        />
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