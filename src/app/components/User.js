import React from "react";
import { Header } from "./Header";

export class User extends React.Component {

    constructor(props){
        super();

    }

    render() {

        return (

            <div>
                
                <p>In User Component!</p>  
                <p> {this.props.username} </p>  
             
            </div>
            
        );
    }
}