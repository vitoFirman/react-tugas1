import { Component } from "react";
import Stateutility from "../Helpers/StateUtility";
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { formatDateName } from "../Helpers/GeneralUtility";
import {addDays} from "date-fns/addDays";
import {id} from 'date-fns/locale'


export class DateRangePickerComponent extends Component {
    constructor(props) {
        super(props)
        this.st = new Stateutility(this)
        this.state = {
            open: false,
            selection: {
                startDate: new Date(),
                endDate: addDays(new Date(), 7),
                key: 'selection'
            }
        }
    }

    handleDateChange = (date) => {
        this.st.setPartialState('selection', date.selection)
    }


    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-center mt-4">Date Range Picker</h1>
                <div onClick={() => this.st.setPartialState('open', !this.state.open)} className="mx-auto justify-content-center mt-3 d-flex gap-2" style={{cursor: "pointer" }}>
                    <p className="shadow-sm px-3 py-2 mb-5 bg-body-tertiary rounded border">{`${formatDateName(this.state.selection.startDate)}`}</p>
                    <p className="shadow-sm px-3 py-2 mb-5 bg-body-tertiary rounded border">{`${formatDateName(this.state.selection.endDate)}`}</p>
                </div>
                <button onClick={() => alert(this.state.selection.endDate)}>submit</button>
                {
                    this.state.open &&
                    <div className="d-flex justify-content-center">
                        <DateRangePicker
                            className="border shadow-sm"
                            ranges={[this.state.selection]}
                            onChange={this.handleDateChange}
                            locale={id}
                        />
                    </div>
                }
            </div>
        )
    }
}