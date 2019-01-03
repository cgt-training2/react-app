import React from 'react';
import ReactDom from 'react-dom';
import {connect}  from "react-redux";
import { render } from 'react-dom';
import { Header } from "./Header";
import { Home } from "./Home";
import { User } from "./User";
import  {Root}  from "./Root";
import createHistory from 'history/createBrowserHistory';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends React.Component {

    constructor(props){
        super();
        this.state ={
            home:"Home",
            homeMounted: true
        };
    }

    componentWillMount(){

        console.log("Inside App"+this.props.user);
    }

    componentDidMount(){

        console.log(this.props.user);
    }

    componentWillUpdate(nextProps, nextState){
        console.log("......componentWillUpdate......", this.props.user);        
    }

    componentDidUpdate(prevProps, prevState){
        console.log("......componentDidUpdate......", this.props.user);        
    }

    onChangeLink(newLink){

        this.setState({
          home: newLink  
        });
    }

    onGreet() {

        alert("Hello");
    }

    onChangeHomeMounted() {

        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    render() {

        return (

            <Router>
                <div>
                    <Root>
                        <Route exact={true} path='/' render={() => (
                            <div className="container">
                                <div className="row">
                                    <Home />                                   
                                </div> 
                            </div> 
                        )}/>
                        <Route exact={true} path='/user' render = {() => (
                            <div className="container">
                                <div className="row">
                                    <User username={"vaibhav"} />
                                </div> 
                            </div> 
                        )}/>
                    </Root>
                </div>
            </Router>

        );    
    }
    
}

const mapStateToProps = (state) => {

	return {
		user: state.userReducer,
		math: state
	};

};


const mapDispatchToProps = (dispatch) => {

	return {
		setName: (name) =>{
			dispatch({
                
				type:"Set_Name",
				payload: "Vaibhsa"

			});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// ReactDom.render(
//     <App />, document.getElementById('root')
// );

// render(<App/>, document.getElementById("root"));