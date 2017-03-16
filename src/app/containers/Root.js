import React from "react";
import {connect} from "react-redux";
import { Header } from "../components/Header";
class Root extends React.Component {
    render() {
         return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header username={this.props.user.name}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.login
    }
};
export default connect(mapStateToProps)(Root);
