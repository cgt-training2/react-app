import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <p>In Home Component!</p>
                <p>Name is: {this.props.name} </p>
                <p>Age is: {this.props.age} </p>
                <p>User name is: {this.props.user.name} </p>
                <p>User hobbies is: 
                    {
                        this.props.user.hobbies.map((hobby) => <li> hobby </li>)
                    } 
                </p>
            </div>
        );
    }
}