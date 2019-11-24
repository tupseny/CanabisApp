import * as React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import ProductPrice from "../components/Product/Product-price";
import ProductDescription from "../components/Product/Product-descr";
import ProductTitle from "../components/Product/Product-title";
import {ProductImage} from "../components/Product/Product-image";


export class ItemDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    renderProduct(p) {
        return (
            <Row>
                {/* Left side */}
                <Col sm={5}>
                    <ProductTitle title={p.title} category={p.category}/>
                    <ProductPrice price={p.price}/>
                    <ProductDescription value={p.description}/>
                </Col>

                {/* Right side */}
                <Col sm={7}>
                    <Row>
                        <Col>
                            <ProductImage src={p.image} alt={p.alt}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }

    render() {
        console.log(this.props.product);
        const product = this.props.product[0];

        return (
            <Container className={''}>
                {product ? this.renderProduct(product) : ''}
            </Container>
        );
    }
}
