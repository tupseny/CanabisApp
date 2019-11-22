import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export class Footer extends React.Component {
    render() {
        return (
            <Container fluid className={'bg-dark pt-4 pb-5 px-4 mt-3 footer'}>
                <Row>
                    <Col>
                        <span className={'text text-light text-center'}>TEXT</span>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        );
    }
}
