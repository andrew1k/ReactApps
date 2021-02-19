/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';



const Header = () => {
  return <h2>Hello World</h2>
}
const Filed = () => {
  const holder = 'Enter here'
  const styeled = {
    width: `${300}px`,
    height: `${30}px`,
    backgroundColor: `Black`,
    color: 'White'
  }
  return <input type="text" placeholder={holder} style={styeled}></input>
}
const Btn = () => {
  const text = 'Log out'
  const res = 'Log in'
  const logged = true

  return <button>{logged ? text : res}</button>
}
const App = () => {
  return (
    <div>
    <Header/>
    <Filed/>
    <Btn/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
