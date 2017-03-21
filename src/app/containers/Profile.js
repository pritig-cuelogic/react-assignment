import React from "react";
import {connect} from "react-redux";
import { LoadImages } from "../actions/profileActions";
import { stub } from 'sinon';
class Profile extends React.Component {

        render() {
        var userData = {
            "employee": [{
                "name": "priti",
                "email": "priti@gmail.com"
            },
            {
                "name": "Vivek",
                "email": "vivek@gmail.com"
            },{
                "name": "ccccc",
                "email": "ccccc@gmail.com"
            },{
                "name": "neha",
                "email": "neha@gmail.com"
            },
            ]
        };
        var postNodes = "";
        if(this.props.profiledata.data.length >0 ) {
            postNodes = this.props.profiledata.data.map(function(item, i) {
            return (
               <img key={i} src={item.thumbnailUrl} />
            );
            });
        }
        return (
            <div>
            <table className="table table-striped">
              <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Email</th>
                </tr>
              </thead>
                <tbody>
                   {userData.employee.map(
                       (user, i) => <tr key={i}>
                               <td> {user.name}</td>
                               <td> {user.email}</td>
                           </tr>
                       )}
               </tbody>
            </table>
            <button type="button" onClick={this.props.LoadImages}>Load Images</button>
            <div>
               {postNodes}
            </div>
            </div>
       
        );
    }
}
const mapStateToProps = (state) => {
    return {
        profiledata: state.profile
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        LoadImages: () => {
            dispatch(LoadImages());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);