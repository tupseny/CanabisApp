import * as React from "react";
import {Image} from "react-bootstrap";
import PropTypes from 'prop-types';

export class ProductDescription extends React.Component {
    render() {
        return (
            <div>
                {this.props.value}
            </div>
        );
    }
}

ProductDescription.propTypes = {
    value: PropTypes.string,
};

ProductDescription.defaultProps = {
    value: ''
};

export class ProductImage extends React.Component {
    render() {
        return (
            <Image className={''} src={this.props.value} alt={this.props.alt} thumbnail/>
        );
    }
}

ProductImage.propTypes = {
    value: PropTypes.string.isRequired,
    alt: PropTypes.string
};

ProductImage.defaultProps = {
    alt: ''
};

export class ProductPrice extends React.Component {
    render() {
        return (
            <span>{this.props.value}</span>
        );
    }
}

ProductPrice.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

ProductPrice.defaultProps = {
    value: 0
};

export class ProductTitle extends React.Component {
    render() {

        return (
            <div className={''}>
                <h2>{this.props.value}</h2>
                <h5>{this.props.subTitle}</h5>
            </div>
        );
    }
}

ProductTitle.propTypes = {
    value: PropTypes.string,
    subTitle: PropTypes.string
};

ProductTitle.defaultTypes = {
    value: '',
    subTitle: ''
};