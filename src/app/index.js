// import React from 'react';
// import ReactDom from 'react-dom';
// import { render } from 'react-dom';
// import { Header } from "./components/Header";
// import { Home } from "./components/Home";
// import { User } from "./components/User";
// import  {Root}  from "./components/Root";

// import createHistory from 'history/createBrowserHistory';

// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';

// class App extends React.Component {

//     constructor(props){
//         super();
//         this.state ={
//             home:"Home",
//             homeMounted: true
//         };
//     }

//     onChangeLink(newLink){

//         this.setState({
//           home: newLink  
//         });
//     }

//     onGreet() {

//         alert("Hello");
//     }

//     onChangeHomeMounted() {

//         this.setState({
//             homeMounted: !this.state.homeMounted
//         });
//     }

//     render() {

//         return (
//             <Router>
//                 <div>
//                     <Root>
//                         <Route exact={true} path='/' render={() => (
//                             <div className="container">
//                                 <div className="row">
//                                     <Home />
//                                 </div> 
//                             </div> 
//                         )}/>
//                         <Route exact={true} path='/user' render = {() => (
//                             <div className="container">
//                                 <div className="row">
//                                     <User />
//                                 </div> 
//                             </div> 
//                         )}/>
//                     </Root>
//                 </div>
//             </Router>         
//         );    
//     }
    
// }

// ReactDom.render(
//     <App />, document.getElementById('root')
// );

// render(<App/>, document.getElementById("root"));

import { render } from "react-dom";
import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger'

const initialStore = {
    result: 1,
    lastvalues: []
};

const initialUser = {
    name: "Vaibhav",
    age:30
};

const mathReducer = ( state = initialStore, action ) => {

    switch (action.type) {

        case "ADD":
            state = {

                result: state.result + action.payload,
                lastvalues: [...state.lastvalues, action.payload]
            };
            break;

        case "SUBTRACT":
            state = {
                
                result: state.result - action.payload,
                lastvalues: [...state.lastvalues, action.payload]
            };
            break;

    }

    return state;

};

const userReducer = ( state = initialUser, action ) => {

    switch (action.type) {

        case "Set_Name":
            state = {

                name: action.payload,
                age: state.age
            };
            break;

        case "Set_Age":
            state = {
                
                name: state.name,                
                age: action.payload
            };
            break;
    }

    return state;

};

// const myLogger = (store) => (next) => (action) => {
//     console.log("Logged action: ",action);
//     next(action);
// };
const myLogger = createLogger({
    // console.log("Logged action: ",action),
    // next(action)
    diff: true
});

const store = createStore(combineReducers({mathReducer, userReducer}),{}, 
    applyMiddleware(myLogger));


store.subscribe(() => {
    console.log("Store Updated!", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 100
});

store.dispatch({
    type: "ADD",
    payload: 22
});

store.dispatch({
    type: "SUBTRACT",
    payload: 22
});

store.dispatch({
    type: "Set_Name",
    payload: "Vaibhsa"
});

store.dispatch({
    type: "Set_Age",
    payload: 31
});







