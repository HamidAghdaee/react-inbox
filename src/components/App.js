import React, { Component } from 'react';
import Toolbar from '../components/Toolbar'
import Messages from '../components/Messages'
import ComposeMessage from '../components/ComposeMessage'
import {
  getMessages
} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getMessages()
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-default" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">React Inbox</a>
            </div>
          </div>
        </div>

        <div className="container">
          <Toolbar />
          <ComposeMessage />
          <Messages />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  composing: state.messages.composing,
  messages: state.messages.messages,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getMessages
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
