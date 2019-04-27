import React, { Component } from 'react';

class ErrorBoudry extends Component {
  constructor(props){
    super(props);
    this.state = { 
      hesError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true})
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops.That is not good</h1>
    }
    return this.props.children
  }
}

export default ErrorBoudry