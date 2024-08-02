import { Component } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFnsV3'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { addDays } from "date-fns";
import { formatDateName } from "../Helpers/GeneralUtility";
import Stateutility from "../Helpers/StateUtility";



export class MuiDateRangePicker extends Component {
    constructor(props) {
        super(props) 
        this.st = new Stateutility(this)
        this.state = {
            value:[new Date(), addDays(new Date(), 7)]
        }
    }

    componentDidMount() {
        document.title = "Date Range Picker"
    }

    render() {
        const startDate = formatDateName(this.state.value[0])
        const endDate = formatDateName(this.state.value[1])

        return (
            <div className="container-fluid">
                <h1 className="text-center my-3">Date Range picker</h1>

                <button onClick={() => alert(`${startDate} - ${endDate}`)} className="btn btn-primary btn-sm mx-auto d-block" style={{ width: 100 }}>get value</button>

                <div className="mx-auto mt-3" style={{ width: 500 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DemoContainer components={['DateRangePicker']}>
                            <DemoItem>
                                <DateRangePicker
                                format="dd/MM/yyyy"
                                localeText={{ start: 'Check-in', end: 'Check-out' }}
                                value={this.state.value}
                                onChange={newValue => this.st.setPartialState('value', newValue)}
                                />
                            </DemoItem>
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
            </div>
        )
    }
}