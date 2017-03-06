import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to={"#"} activeStyle={{color: "red"}}>Home</Link></li>
                        <li><Link to={"login"} activeClassName={"active"}>Login</Link></li>
                        <li><Link to={"register"} activeClassName={"active"}>Register</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};