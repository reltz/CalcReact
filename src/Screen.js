import React, { Component } from 'react';

export class Screen extends Component {
    render() {
        return <div className={this.props.className}>{this.props.showing}</div>;
    }

}

