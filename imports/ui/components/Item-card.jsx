import * as React from "react";
import {Card} from "react-bootstrap";
import PropTypes from 'prop-types';

export class ItemCard extends React.Component {
    render() {
        return (
            <Card className={'text-center text-uppercase p-2 pb-3'}>
                <Card.Img variant={'top'} src={this.props.image}/>
                <Card.Title className={'text-primary font-weight-bold'}>{this.props.title}</Card.Title>
                <Card.Subtitle className={'text-info font-weight-light'}>{this.props.subTitle}</Card.Subtitle>
            </Card>
        );
    }
}

ItemCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    subTitle: PropTypes.string
};

ItemCard.defaultTypes = {
    title: '',
    subTitle: ''
};