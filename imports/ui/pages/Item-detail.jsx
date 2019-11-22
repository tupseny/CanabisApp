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
                        <Col sm={5}>
                            <div className={''}>
                                <h2>{p.title}</h2>
                                <h5>{p.category}</h5>
                            </div>
                            <span>{p.price}</span>
                            <p>{p.description}</p>
                        </Col>

                        {/* Right side */}
                        <Col sm={7}>
                            <Row>
                                <Col>
                                    <Image className={''} src={p.image} alt={p.alt} thumbnail/>
                                </Col>
                            </Row>
                        </Col>
                    </Row> : ''
                }
            </Container>
        );
    }
}
