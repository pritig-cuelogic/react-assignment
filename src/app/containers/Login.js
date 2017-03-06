import React from "react";

import { FormElement } from "../components/FormElement";
export class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: ''
        }
    }
    onChangeUNameHandler(event) {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    }
    onLogin() {
        console.log(this.state.name);
        console.log(this.state.password);
    }
    render() {
        
        return (
             <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                            <form role="form">
                                <div className="form-group">
                                    <label> Name </label>
                                    <FormElement type={"text"} value={this.state.name} name={"name"}
                                    onChange={(event) => this.onChangeUNameHandler(event)} class={"form-control"}/>
                                </div>
                                <div className="form-group">
                                    <label> Password </label>
                                    <FormElement type={"password"} value={this.state.password} name={"password"}
                                    onChange={(event) => this.onChangeUNameHandler(event)} class={"form-control"}/>
                                </div>
                                <button type="button" className="btn btn-primary" 
                                onClick={this.onLogin.bind(this)} >Login</button>
                            </form>
                    </div>
                </div>
            </div>
        );
    }
}

