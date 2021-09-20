import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: process.env.key,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onLogInClick = () => {
        this.auth.signIn();
    }

    onLogOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return <div>Login state unknown</div>
        } else if(this.props.isSignedIn) {
            return (
            <button onClick={this.onLogOutClick} className="ui red google button">
                <i className="google icon" />
                Logout
            </button>
            )
        } else {
            return (
                <button onClick={this.onLogInClick} className="ui red google button">
                    <i className="google icon" />
                    Login
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                { this.renderAuthButton() }                
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { isSignedIn: state.auth.isSignedIn }
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);