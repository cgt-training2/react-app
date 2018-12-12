import React from "react";

export class Home extends React.Component {

    constructor(props){
        super();
        this.state ={
            age: props.age,
            status: 0,
            newLink: props.initialLink
        };
        this.age = props.age;
        this.makeMeOlder = this.makeMeOlder.bind(this);
        this.newLink = this.newLink.bind(this);
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

    makeMeOlder() {

        this.age += 3;
        // this.state.age += 3; // Will not re-render the UI.
        this.setState({      // setState is a function which provides the re-render 
                            //  of of the UI.   
            age: this.state.age + 3
        });

        console.log(this.state.age);

    }

    newLink(){
        this.props.changeLink(this.state.newLink);
    }

    onHandleEvent(event){

        this.setState({
            newLink: event.target.value
        });
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
                <input type = "text" value = {this.state.newLink} 
                    onChange = {(event) => this.onHandleEvent(event)} />

                <button onClick={this.newLink} className="btn btn-Primary">
                    ChangeLink
                </button>
            </div>
            
        );
    }
}