import React, { Component } from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { getStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';

class StreamDelete extends Component {
    componentDidMount() {
        this.props.getStream(this.props.match.params.id)
    }

    actions() {
        return (
            <React.Fragment>
                <button class="ui button negative"
                    onClick={this.onSubmitDelete} >Delete</button>
                <Link to="/" class="ui button">
                    Cancel
                </Link>
            </React.Fragment>
        )
    }

    onSubmitDelete = () => {
        this.props.deleteStream(this.props.match.params.id);
    }

    renderContent() {
        if(!this.props.stream) {
            return "Are you sure you want to delete stream?"
        }
        return `Are you sure you want to delete stream titled "${this.props.stream.title}"?`;
    }

    render() {
        return (
            <div>
                Stream Delete
                <Modal title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.actions()} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        stream: state.streams[ownProps.match.params.id]
    }
};

export default connect(
    mapStateToProps,
    { getStream, deleteStream }
)(StreamDelete)