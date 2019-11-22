import * as React from "react";
import {Col, Row, Container, Image} from "react-bootstrap";


export class ItemDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.product);
        const p = this.props.product[0];

        return (
            <Container className={''}>
                {p ?
                    <Row>
                        {/* Left side */}
                        <Col lg md sm={8}>
                            <div className={''}>
                                <h2>{p.title}</h2>
                                <h5>{p.category}</h5>
                            </div>
                            <span>{p.description}</span>
                        </Col>

                        {/* Right side */}
                        <Col lg md sm={4}>
                            <Row>
                                <Col>
                                    <Image src={p.image} alt={p.alt} thumbnail/>
                                </Col>
                            </Row>
                            <Row>
                                <span>{p.price}</span>
                            </Row>
                        </Col>
                    </Row> : ''
                }
            </Container>
        );
    }
}
