import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    render() { // using tachons classes for font one and text center
        return (
            <div className='f1 tc'>
                <h1>Hello</h1>
                <p>{this.props.greeting}</p>
            </div>
        )
    };
};

export default Hello;