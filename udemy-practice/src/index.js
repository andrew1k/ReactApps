/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/css/index.css'
import './components/css/app.css'
// import App from './components/app/';
// import reportWebVitals from './reportWebVitals';



function WhoAmI(props) {
    return (
        // <React.Fragment>
        <> 

            <h1>My name is {props.name}, surname - {props.surname}</h1>
            <a href={props.link}>My Profile</a>
        </>
        // </React.Fragment>
    )
}

ReactDOM.render(<WhoAmI name='Meg' surname='Root' link='rewand.netlify.app' />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
