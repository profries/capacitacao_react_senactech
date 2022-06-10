import React from "react";

export default class HiMessage extends React.Component {
    //props
    render(){
        return <h3>Hi {this.props.message}!</h3>
    } 
}