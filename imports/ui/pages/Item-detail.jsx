import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ProductImage, ProductDescription, ProductTitle, ProductPrice} from "../components/Product";
import PropTypes from 'prop-types';


export class ItemDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    renderProduct(p) {
        return (
            <Row>
                {/* Left side */}
                <Col sm={5}>
                    <ProductTitle value={p.title} subTitle={p.category}/>
                    <ProductPrice value={p.price}/>
                    <ProductDescription value={p.description}/>
                </Col>

                {/* Right side */}
                <Col sm={7}>
                    <Row>
                        <Col xs={4}>
                            <ProductImage value={p.image} alt={p.alt}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }

    render() {

        return (
            <Container className={''}>
                {this.props.product ? this.renderProduct(this.props.product) : ''}
            </Container>
        );
    }
}

ItemDetail.propTypes = {
    product: PropTypes.object,
};
