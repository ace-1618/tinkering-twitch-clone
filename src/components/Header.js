import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

export default class Header extends Component {
    render() {
        return (
            <div className="ui secondary pointing menu">
                <Link to="/" className="item">
                    Twitchy clone
                </Link>
                <div className="right menu">
                    <Link to="/" className="item">
                        All Streams
                        <GoogleAuth />
                    </Link>
                </div>
            </div>
        )
    }
}
