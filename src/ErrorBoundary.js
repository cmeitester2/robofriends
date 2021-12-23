import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        // This is similar to try catch block and gets called when an error happens
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooooops. This is not good</h1>
        }
        return this.props.children
    }
};

export default ErrorBoundary;