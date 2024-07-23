import { Component } from "react"
import { Content } from "./Components/Content"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Welcome } from "./Pages/Welcome";
import { NotFound } from "./Pages/NotFound";
import { ChartPages } from "./Pages/ChartPages";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { HighChart } from "./Pages/HighChart";
import { GoogleChart } from "./Pages/GoogleChart";
import { Form } from "./Pages/Form";
import { Header } from "./Components/Header";
// import { DatePickerComponent } from "./Pages/DatePicker";
import { DateRangePickerComponent } from "./Pages/DateRangePicker";

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
        counter: 0
    }
  }

  setCounter = () => {
    this.setState(
      {
        counter: this.state.counter + 1
      }
    )
  }

  render() {
    return (
      <>
      <BrowserRouter>
        <Header counter={this.state.counter}/>
        <Routes>
            <Route path="/" element={<Welcome/>}></Route>
            <Route path="/home" element={<Home counter={this.state.counter}/>}></Route>
            <Route path="/content" element={<Content setter={this.setCounter} counter={this.state.counter}/>}></Route>
            <Route path="/chart" element={<ChartPages counter={this.state.counter}/>}></Route>
            <Route path="/highchart" element={<HighChart/>}></Route>
            <Route path="/googleChart" element={<GoogleChart/>}></Route>
            <Route path="/form" element={<Form/>}></Route>
            <Route path="/daterangepicker" element={<DateRangePickerComponent/>}></Route>
            <Route path='*' exact={true} element={<NotFound/>} />
        </Routes>

      </BrowserRouter>
      </>
    )
  }
}

export default App
