import { Component } from "react";
import PropTypes from 'prop-types'

export class Home extends Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.title = "Home"
    }

    render() {
        return (
            <div>
                {/* <Header counter={this.props.counter}/> */}
                <h1 className="text-center mt-5">Home</h1>
            </div>
        )
    }
}

Home.propTypes = {
    counter: PropTypes.number
}
