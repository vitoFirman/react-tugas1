import { Component } from "react";
import PropTypes from 'prop-types' 

export class Content extends Component{
    constructor(props) {
        super(props) 
    }

    componentDidMount() {
        document.title = "Content"
    }

    render() {
        return (
        <>
            {/* <Header counter={this.props.counter}/> */}
                <div className="container d-flex flex-row gap-3 justify-content-center mt-5">
                    <button onClick={this.props.setter} className="btn btn-dark rounded-4 d-block">Counter</button>
                </div>
        </>
        )
    }
}

Content.propTypes = {
    setter: PropTypes.func,
    counter: PropTypes.number
}