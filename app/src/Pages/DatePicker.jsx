import { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Stateutility from "../Helpers/StateUtility";
import { getDayName, getMonthName, getTime, getYear } from "../Helpers/GeneralUtility";

export class DatePickerComponent extends Component {
    constructor(props) {
        super(props)
        this.st = new Stateutility(this)
        this.state = {
            selectedDate: new Date(),
            open: false
        }
    }

    handleDateChange = (date) => {
        this.st.setPartialState('selectedDate', date)
    }

    render() {
        const day = getDayName(this.state.selectedDate)
        const month = getMonthName(this.state.selectedDate)
        const year = getYear(this.state.selectedDate)
        const time = getTime(this.state.selectedDate)

        return (
            <div className="container-fluid">
                <h1 className="text-center mt-4">Date Picker</h1>

                <div className="d-flex justify-content-center mt-4">
                    <DatePicker
                        showIcon
                        icon="fa-solid fa-calendar mt-1"
                        toggleCalendarOnIconClick
                        selected={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        isClearable
                        dateFormat="dd/MM/yyyy"
                        dayClassName={(date) => date.getDay() === 0 ? 'text-danger' : undefined}
                        timeFormat="HH:mm"
                        showTimeSelect
                        timeIntervals={15}
                        timeCaption="Jam"
                        open={this.state.open}
                        onInputClick={() => this.st.setPartialState('open', true)}
                    >
                        <a href="#" onClick={() => this.st.setPartialState('open', false)} className="btn btn-sm btn-secondary">Close</a>
                    </DatePicker>
                </div>

                <div className="text-center mt-4">
                    <small className="border border-dark p-2">
                        {this.state.selectedDate ? this.state.selectedDate.toLocaleDateString('id-ID') : 'No date selected'}
                    </small>
                    <div className="d-flex flex-column gap-1 mt-4">
                        <small>{day ? `Hari : ${day}` : ''}</small>
                        <small>{month ? `Bulan : ${month}` : ''}</small>
                        <small>{year ? `Tahun : ${year}` : ''}</small>
                        <small>{time ? `Jam : ${time}` : ''}</small>
                    </div>
                </div>
            </div>
        )
    }
}