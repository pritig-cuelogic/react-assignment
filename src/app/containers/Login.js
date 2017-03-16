import React from "react";
import {connect} from "react-redux";
import { FormElement } from "../components/FormElement";
import { setUserName } from "../actions/loginActions";
class Login extends React.Component {
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
        var user = {
            name: "priti",
            password: "123"
        };
        if(this.state.name == user.name) {
            this.props.setUserName(this.state.name);
            this.props.router.push("profile");
        }
        else{
            return false;
        }
        
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


const mapDispatchToProps = (dispatch) => {
    return {
        setUserName: (name) => {
            dispatch(setUserName(name));
        }
    };
};

export default connect(null, mapDispatchToProps)(Login);
