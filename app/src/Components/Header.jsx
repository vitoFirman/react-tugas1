import { Component } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export class Header extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm border-bottom" aria-label="Thirteenth navbar example">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
                <a className="navbar-brand col-lg-3 me-0" href="#">Centered nav</a>
                <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                    <li className="nav-item">
                    <Link to={'/home'} className="nav-link" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to={'/content'} className="nav-link">Content</Link>
                    </li>
                    {/* <li className="nav-item">
                    <Link to={'/chart'} className="nav-link">Chart</Link>
                    </li> */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Chart</a>
                        <ul className="dropdown-menu">
                            <li><Link to={'/highchart'} className="dropdown-item">High Chart</Link></li>
                            <li><Link to={'/googlechart'} className="dropdown-item">Google Chart</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                    <Link to={'/form'} className="nav-link">Form</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Library</a>
                        <ul className="dropdown-menu">
                            <li><Link to={'/daterangepicker'} className="dropdown-item">Date Picker</Link></li>
                            <li><Link to={'/fontawesome'} className="dropdown-item">Font Awesome</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                    <Link to={'/redux'} className="nav-link">Redux</Link>
                    </li>
                </ul>
                <div className="d-lg-flex col-lg-3 justify-content-lg-end pe-4">
                    <small className="position-relative"><i className="fa-solid fa-bell fa-2xl"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{this.props.counter}</span>
                    </small>
                </div>
                </div>
            </div>
            </nav>

        )
    }
}
Header.propTypes = {
    counter: PropTypes.number
}
