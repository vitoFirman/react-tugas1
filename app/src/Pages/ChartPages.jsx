import { Component } from "react";
import { Footer } from '../Components/Footer';
import PropTypes from 'prop-types';
import { Chart } from "react-google-charts";
import { LineData } from "../FakeData";
import { HighChartComponent } from "../Library/HighChart";
import StateUtility from "../Helpers/StateUtility";

export class ChartPages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            googleChart: {
                title: "Data pemasukan perbulanan",
                chartType: "Line",
                bulan: '',
                pemasukan: '',
                pengeluaran: '',
                showModal: false,
                modalContent: ''
            },
            highChart: {
                title: {
                    text: 'U.S Solar Employment Growth',
                    align: 'left'
                }
            }
        };
        this.stateUtility = new StateUtility({state: this.state, setState: this.setState})
    }

    setChartType = (type) => {
        this.setState(this.stateUtility.setPartialState('googleChart.chartType', type))
    }

    renderModal() {
        if (this.state.showModal) {
            return (
                <div className="modal fade show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Detail Data</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => this.setState({ showModal: false })}></button>
                            </div>
                            <div className="modal-body">
                                {this.state.modalContent}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => this.setState({ showModal: false })}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }

    chartEvents = [
        {
            eventName: "select",
            callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 1) {
                    const { row, column } = selection[0];
                    if (row !== null && column !== null) {
                        const dataTable = chartWrapper.getDataTable();
                        const bulan = dataTable.getValue(row, 0);

                        if (column === 1) { 
                            const pemasukan = dataTable.getValue(row, column);

                            this.setState({
                                bulan: bulan,
                                pemasukan: pemasukan,
                                showModal: true,
                                modalContent: (
                                    <div>
                                        <p><strong>Bulan: </strong>{bulan}</p>
                                        <p><strong>Pemasukan: </strong>{pemasukan}</p>
                                    </div>
                                )
                            });
                        } else if (column === 2) { 
                            const pengeluaran = dataTable.getValue(row, column);

                            this.setState({
                                bulan: bulan,
                                pengeluaran: pengeluaran,
                                showModal: true,
                                modalContent: (
                                    <div>
                                        <p><strong>Bulan: </strong>{bulan}</p>
                                        <p><strong>Pengeluaran: </strong>{pengeluaran}</p>
                                    </div>
                                )
                            });
                        }
                    }
                }
            }
        }
    ];

    getSeries = () => {
        return [{
            name: 'Installation & Developers',
            data: [
                43934, 48656, 65165, 81827, 112143, 142383,
                171533, 165174, 155157, 161454, 154610, 168960, 171558
            ]
        }, {
            name: 'Manufacturing',
            data: [
                24916, 37941, 29742, 29851, 32490, 30282,
                38121, 36885, 33726, 34243, 31050, 33099, 33473
            ]
        }]
    }

    getTitle = () => {
        return {
            text: 'Haloooo' + new Date().getTime(),
            align: 'left'
        }
    }

    componentDidMount () {
        // this.startTimer()
    }

    startTimer = () => {
        setInterval(() => {
            this.stateUtility.setPartialState('highChart.title', this.getTitle())
        }, 10 * 1000)
    }

    render() {
        const options = {
            chart: {
                title: this.state.googleChart.title,
                subtitle: "Januari sampai Mei",
            },
            colors: ['green', 'blue'],
        };

        return (
            <div>
                {/* <Header counter={this.props.counter} /> */}
                <div className="container-fluid">
                    <div className="d-flex flex-row justify-content-center gap-5">

                        {
                            this.state.googleChart.chartType === "Line" ? (
                                <h1 className="text-center py-3">Line chart</h1>
                            ) : (
                                <h1 className="text-center py-3">Bar chart</h1>
                            )
                        }

                        <div className="dropdown mt-4">
                            <a className="text-decoration-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {this.state.googleChart.chartType === "Line" ? (
                                    <p>Line Chart<i className="fa-solid fa-caret-down ms-1"></i></p>
                                ) : (
                                    <p>Bar Chart<i className="fa-solid fa-caret-down ms-1"></i></p>
                                )
                                
                                }
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => this.setChartType('Line')}>Line Chart</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => this.setChartType('Bar')}>Bar Chart</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="justify-content-center d-flex ms-5 ps-5">
                        <Chart
                            chartType={this.state.googleChart.chartType}
                            data={LineData}
                            options={options}
                            width="100%"
                            height="500px"
                            chartEvents={this.chartEvents}
                        />
                    </div>
                </div>
                {this.renderModal()}

                <HighChartComponent hc-series={this.getSeries()} hc-title={this.state.highChart.title}/>
                <Footer />
            </div>
        );
    }
}

ChartPages.propTypes = {
    counter: PropTypes.number
}
