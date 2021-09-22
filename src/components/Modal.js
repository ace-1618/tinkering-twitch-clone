import React, { Component } from 'react'
import ReactDom from 'react-dom';

class Modal extends Component {
    render() {
        return ReactDom.createPortal(
            <div className="ui dimmer modals visible active">
                <div className="ui standard modal visible active">
                    <div class="header">{this.props.title}</div>
                    <div class="content">
                        <p>{this.props.content}</p>
                    </div>
                    <div class="actions">
                        {this.props.actions}
                    </div>
                </div>
            </div>,
            document.getElementById('modal')
        )
    }
}
export default Modal