import React from 'react';
import './button.styles.css'

class Button extends React.Component{
    render(){
        return(
            <button className="loginbox" type="button" onClick={this.props.handleClick}>{this.props.children}</button>
        )
    }
}

export default Button;