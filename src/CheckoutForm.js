import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = { message: props.message, style: "#fff", amount: 100};
    this.validate = this.validate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
      this.setState({amount:event.target.value});
  }

  async submit(ev) {
    // User clicked submit
    this.setState({message:"LOADING", style: "#808080"});
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge/" + this.state.amount + "000", {
        method: "POST",
        headers: {"Content-Type": "text/plain"},
        body: token.id 
    });
    if (response.ok) this.setState({complete: true});
    else {this.setState({message: "That did not work...Please refresh and try again"})};
  }

  render() {
    if (this.state.complete) return <h1 style= {{color: "#008000"}}>Payment Complete <br/>Thank You </h1>;

    return (
      <div className="checkout">
        <p> Enter at least $1 in the box to pay them.</p>
        <CardElement/>
        <input type='text' onKeyPress={this.validate} value={this.state.amount} onChange={this.handleChange}></input>
     
        <button style = {{backgroundColor: this.state.style}} onClick={this.submit}>{this.state.message}</button>
      </div>
    );
  }
  validate(evt) {
        var theEvent = evt || window.event;
    
        // Handle paste
    
        // Handle key press
            var key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
        
        var regex = /[0-9]|\./;
        if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
        }   
    }
}

export default injectStripe(CheckoutForm);
//export default CheckoutForm;