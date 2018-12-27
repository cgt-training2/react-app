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
import { createStore } from "redux";

const initialStore = {
    result: 1,
    lastvalues: []
};

const reducer = ( state = initialStore, action ) => {

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


const store = createStore(reducer);

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
    payload: 80
});









