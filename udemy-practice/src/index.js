/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/css/index.css'
import './components/css/app.css'
import App from './components/app/';
import reportWebVitals from './reportWebVitals';


class WhoAmI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            years: 26,
        }
    }
    render() {
        const {name, surname, link} = this.props
        const {years} = this.state
        return (
            // <React.Fragment>
            <> 
    
                <h1>My name is {name}, surname - {surname}, years: {this.state.years}</h1>
                <a href={link}>My Profile</a>
            </>
            // </React.Fragment>
        ) 
    }
}




const All = () => {
    return (
        <>
        <WhoAmI name='Meg' surname='Root' link='rewand.netlify.app' />
        <WhoAmI name='Rew' surname='And' link='facebook.com' />
        <WhoAmI name='Andy' surname='Ko' link='duckduckgo.com' />
        </>
    )
}

ReactDOM.render(<All />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
