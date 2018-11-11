import React, { Component } from 'react';
import logo from './payThemlogo.png';
import './App.css';
import CheckoutForm from './CheckoutForm';
import {Elements, StripeProvider} from 'react-stripe-elements';

class App extends Component {
  
  render() {
    var message2 = " subway sucks jk";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            send us money!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            

          </a>
        </header>

        <StripeProvider apiKey="pk_test_5K9SYJEzAULsJU0SKgSVm8r1">
          <div className="example">
            <h1>React Stripe Elements Example</h1>
            <Elements>
              <CheckoutForm message = {"send" }/>
            </Elements>
          </div>
        </StripeProvider>
        
      </div>
    );
  }
}

export default App;
