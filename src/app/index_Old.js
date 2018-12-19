import React from 'react';
import { render } from 'react-dom';
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {

    constructor(props){
        super();
        this.state ={
            home:"Home",
            homeMounted: true
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

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    render() {

    	var user ={
    		name:"Vaibhav",
    		hobbies: ["Sports", "Listening Music"]
    	};

        let homeCmp = "";
        if (this.state.homeMounted) {

            homeCmp = (

                <Home 
                    age={27} 
                    name={"Props"} 
                    user={user} 
                    greet={this.onGreet}
                    changeLink={this.onChangeLink.bind(this)}
                    initialLink = {this.state.home}>
                </Home>

            );

        }

        return (

            <div className = "container">
                <div className = "row">
                    <div className = "col-xs-10 col-xs-offset-1">
                        <Header homeLink = {this.state.home}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeCmp}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">

                        <button onClick={this.onChangeHomeMounted.bind(this)} 
                            className="btn btn-primary">
                                (Un)Mount Home Component
                        </button>

                    </div>
                </div>
            </div> // container
        );
    }
}

render(<App/>, document.getElementById("root"));

