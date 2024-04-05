import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 5
        };
    }
    incrementCount = () => {
        this.setState(prevState => ({
          count: prevState.count + 1
        }));
      }
    render() {   
       return (    
            <div className="Counter">          
                <h1>{this.state.count}</h1> 
                <button onClick={this.incrementCount}>Inc</button>  
            </div>
        );     
    }
}

export default Counter;