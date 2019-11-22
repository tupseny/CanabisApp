import * as React from "react";
import {Col, Row, Container, Image} from "react-bootstrap";

export class ItemDetail extends React.Component {
    render() {
        return (
            <Container className={''}>
                <Row>
                    {/* Left side */}
                    <Col lg md sm={8}>
                        <div className={''}>
                            <h2>Title</h2>
                            <h5>category</h5>
                        </div>
                        <span>
                        description of the product. asdasd. as dasd. asd as.da.s das d.as. d..asdasdda asdasd
                    </span>
                    </Col>

                    {/* Right side */}
                    <Col lg md sm={4}>
                        <Row>
                            <Col>
                                <Image src='images/products/oil/prod_1.jpg' thumbnail/>
                            </Col>
                        </Row>
                        <Row>
                            <span>23,52$</span>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
