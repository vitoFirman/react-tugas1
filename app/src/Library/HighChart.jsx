import { Component } from "react";
import Highcharts from 'highcharts'
import PropTypes from 'prop-types'
import { getRandomNumber } from "../Helpers/GeneralUtility";

export class HighChartComponent extends Component {
    static propTypes = {
        'hc-options': PropTypes.any
    }
    constructor (props) {
        super(props)
        this.currentOptions = {}
        this.state = {
            selector: 'chart-' + getRandomNumber()
        }
    }

    setAvailableOptions = () => {
        const hcP = Object.keys(this.props)
        const optName = 'hc-options'
        if (hcP.indexOf(optName)>-1) {
            this.currentOptions = {...this.props[optName]}
        } else {
            const hcProps = hcP
            .filter(k => k.indexOf('hc-') > -1)
            .map(k => ([k.replace('hc-', ''), this.props[k]]))
            .reduce((r, k) => {
                r[k[0]] = k[1]
                return r
            }, {})
            for (const k in hcProps) {
                this.currentOptions[k] = hcProps[k]
            }
        }
    }
    
    componentDidMount() {
        this.setAvailableOptions()
        Highcharts.chart(this.state.selector, this.currentOptions); 
    }

    render() {
        return (
            <div id={this.state.selector} className="d-flex">

            </div>
        )
    }
}