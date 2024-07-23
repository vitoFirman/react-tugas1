import { Component } from "react";
import {Footer} from '../Components/Footer'
import Stateutility from "../Helpers/StateUtility";

export class Form extends Component{
    constructor(props) {
        super(props)
        this.st = new Stateutility(this)
        this.state = {
            component1: {
                // get value
                form1: '',
                date1: '',
                textarea: '',
                select: '',
                check: {
                    One: false,
                    Two: false
                },
            },
            component2: {
                // default value
                input1: 'vito',
                isSelected: 'two',
                isChecked: true,
                isOnRadio1: true,
                isOnRadio2: false,
            }
            
        }
    }

    componentDidMount() {
        document.title = 'Form'
    }

    handleRadioChange = (e) => {
        const {value, checked} = e.target
        if(value === 'one') {
            this.st.setPartialState('component2.isOnRadio1', checked)
            this.st.setPartialState('component2.isOnRadio2', !checked)
        } else if (value === 'two') {
            this.st.setPartialState('component2.isOnRadio1', !checked)
            this.st.setPartialState('component2.isOnRadio2', checked)
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const st = this.state.component1
        const check = Object.keys(st.check).filter(x => st.check[x])
        console.log(check)
        console.log(this.state.component1);
    }

    handleSelectChange = (e) => {
        const isCheck = e.target.checked
        const k = e.target.value
        this.st.setPartialState(`component1.check[${k}]`, isCheck)
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
                                get value
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="text" placeholder="text" onChange={(e) => this.st.setPartialState('component1.form1', e.target.value)}/>
                                        <label htmlFor="text">Text</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="date" className="form-control" id="date" placeholder="date"  onChange={(e) => this.st.setPartialState('component1.date1', e.target.value)}/>
                                        <label htmlFor="date">Date</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" placeholder="Leave a comment here"  id="textarea" onChange={(e) => this.st.setPartialState('component1.textarea', e.target.value)}></textarea>
                                        <label htmlFor="textarea">Comments</label>
                                    </div>

                                    <select className="form-select" aria-label="Default select example" onChange={(e) => this.st.setPartialState('component1.select', e.target.value)}>
                                        <option value="one">One</option>
                                        <option value="two">Two</option>
                                        <option value="three">Three</option>
                                    </select>

                                    <div className="form-check mt-4">
                                        <input className="form-check-input" name="check" type="checkbox" value="One" id="check" onChange={this.handleSelectChange}/>
                                        <label className="form-check-label" htmlFor="one" >
                                            One
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" name="check" type="checkbox" value="Two" id="check" onChange={this.handleSelectChange}/>
                                        <label className="form-check-label" htmlFor="two">
                                            Two
                                        </label>
                                    </div>



                                    <button className="btn btn-primary mt-4">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-header">
                                set default value
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="text" placeholder="text" value={this.state.component2.input1} onChange={(e) => this.st.setPartialState('component2.input1', e.target.value)}/>
                                        <label htmlFor="text">Text</label>
                                    </div>

                                    {/* select */}
                                    <select className="form-select" aria-label="Default select example" value={this.state.component2.isSelected} onChange={(e) => this.st.setPartialState('component2.isSelected', e.target.value)}>
                                        <option value="one">One</option>
                                        <option value="two">Two</option>
                                        <option value="three">Three</option>
                                    </select>

                                    {/* checkbox */}
                                    <div className="form-check mt-4">
                                        <input className="form-check-input" type="checkbox" value="" id="one" checked={this.state.component2.isChecked ? true : false} onChange={() => this.state.component2.isChecked ? this.st.setPartialState('component2.isChecked', false) : this.st.setPartialState('component2.isChecked', true  )}/>
                                        <label className="form-check-label" htmlFor="one" >
                                            One
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="two"/>
                                        <label className="form-check-label" htmlFor="two">
                                            Two
                                        </label>
                                    </div>
                                    
                                    {/* radio */}
                                    <div className="form-check mt-4">
                                        <input className="form-check-input" type="radio" name="one" value="one" id="one1" checked={this.state.component2.isOnRadio1 ? true : false} onChange={this.handleRadioChange}/>
                                        <label className="form-check-label" htmlFor="one1">
                                            One
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="one" id="one2" value="two" checked={this.state.component2.isOnRadio2 ? true : false} onChange={this.handleRadioChange}/>
                                        <label className="form-check-label" htmlFor="one2">
                                            Two
                                        </label>
                                    </div>

                                </form>
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