import React from "react";

export class Home extends React.Component {

    constructor(props){
        super();
        this.state ={
            age: props.age,
            status: 0,
            newLink: "New Link"
        };
        this.age = props.age;
        this.makeMeOlder = this.makeMeOlder.bind(this);
        this.newLink = this.newLink.bind(this);
    }

    makeMeOlder() {

        this.age += 3;
        this.state.age += 3; // Will not re-render the UI.
        this.setState({      // setState is a function which provides the re-render 
                            //  of of the UI.   
            age: this.state.age + 3
        });

        console.log(this.state.age);

    }

    newLink(){
        this.props.changeLink(this.state.newLink);
    }
    render() {

        return (

            <div>
                <p>In Home Component!</p>
                <p>Name is: {this.props.name} </p>
                <p>Age is: {this.age} </p>
                <p>State Age is: {this.state.age} </p>
                <p>User name is: {this.props.user.name} </p>
                <p>User hobbies is: 
                    {
                        this.props.user.hobbies.map((hobby) => <li> {hobby} </li>)
                    } 
                </p>
                <button onClick={this.makeMeOlder} className="btn btn-Primary">
                    Click Me
                </button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-Primary">
                    Greet
                </button>
                <hr/>
                <button onClick={this.newLink} className="btn btn-Primary">
                    ChangeLink
                </button>
            </div>
            
        );
    }
}