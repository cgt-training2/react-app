import React, {Component} from "react";
// import { render } from "react-dom";

import {Header} from "./Header";


export class Root extends React.Component{

    render(){
        let renderData;
        renderData = (
            this.props.children
        );

        return(
            <div>
                
                <div className="col-xs-10 col-xs-offset-1">
                    <Header/>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            {renderData}
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

