import * as React from "react";

export default class ProductPrice extends React.Component {
    render() {
        return (
            <span>{this.props.price}</span>
        );
    }
}