import {Image} from "react-bootstrap";
import * as React from "react";

export class ProductImage extends React.Component {
    render() {
        return (
            <Image className={''} src={this.props.src} alt={this.props.alt} thumbnail/>
        );
    }
}