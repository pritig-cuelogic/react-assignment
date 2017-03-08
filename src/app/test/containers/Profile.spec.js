import React from "react";

export class Profile extends React.Component {

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
        return (
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
        );
    }
}
