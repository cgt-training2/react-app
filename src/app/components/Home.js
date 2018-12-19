import React from "react";
import { Header } from "./Header";
export class Home extends React.Component {

    constructor(props){
        super();
    }

    componentWillMount(){
        console.log("......componentWillMount......");
    }

    componentDidMount(){
        console.log("......componentDidMount......");
    }

    componentWillReceiveProps(nextProps){
        console.log("......componentWillReceiveProps......", nextProps);        
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("......shouldComponentUpdate......", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("......componentWillUpdate......", nextProps, nextState);        
    }

    componentDidUpdate(prevProps, prevState){
        console.log("......componentDidUpdate......", prevProps, prevState);        
    }

    componentWillUnmount(){
        console.log("......componentWillUnmount......");
    }

    render() {

        return (

            <div>
                <p>In Home Component!</p>
            </div>
            
        );
    }
}