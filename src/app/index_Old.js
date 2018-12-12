import React from 'react';
import { render } from 'react-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {

    constructor(props){
        super();
        this.state ={
            home:"Home"
        };
    }
    onChangeLink(newLink){

        this.setState({
          home: newLink  
        });
    }
    onGreet(){
        alert("Hello");
    }
    render() {
    	var user ={
    		name:"Vaibhav",
    		hobbies: ["Sports", "Listening Music"]
    	};
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.home}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home 
                            age={27} 
                            name={"Props"} 
                            user={user} 
                            greet={this.onGreet}
                            changeLink={this.onChangeLink.bind(this)}
                            initialLink = {this.state.home}>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById("root"));

