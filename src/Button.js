import React, { Component } from 'react';

export class MyButton extends Component {

    render() {
        return (
            <button type="button"
                className={this.props.className} 
                onClick={() => this.props.onClick()} 
                value={this.props.value} 
                
                >{this.props.label}
                </button>
                          
        );
    }



}

