import { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component{
    render() {
        return (
            <footer className="py-3 mt-5 bg-body-tertiary border-top">
                <ul className="nav justify-content-center border-bottom pb-3 mt-3">
                    <li className="nav-item">
                    <Link to={'/home'} className="nav-link px-2 text-body-secondary">
                        Home
                    </Link>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link px-2 text-body-secondary">
                        Features
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link px-2 text-body-secondary">
                        Pricing
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link px-2 text-body-secondary">
                        FAQs
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link px-2 text-body-secondary">
                        About
                    </a>
                    </li>
                </ul>
                <p className="text-center text-body-secondary mt-3">© 2024 Company, Inc</p>
            </footer>
        )
    }
}