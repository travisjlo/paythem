import React, { Component } from 'react';
import logo from './payThemlogo.png';
import './App.css';
import CheckoutForm from './CheckoutForm';
import {Elements, StripeProvider} from 'react-stripe-elements';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="Main-logo" alt="pay them logo" />
          <p>A place where you can go to pay.</p>
        </header>

        <StripeProvider apiKey="pk_test_5K9SYJEzAULsJU0SKgSVm8r1">
          <div className="example">
            <h1>PAY</h1>
            <Elements>
              <CheckoutForm message = {"pay"}/>
            </Elements>
          </div>
        </StripeProvider>
        
      </div>
    );
  }
}

export default App;
