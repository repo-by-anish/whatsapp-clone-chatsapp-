import React from 'react'
import "../dashboard.css"
import Header from '../Basic components/Header'
import ProfileCard from './ProfileCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Dashboard() {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col xs={6} md={4} lg={3}><ProfileCard /></Col>
                    <Col xs={6} md={4} lg={3}><ProfileCard /></Col>
                    <Col xs={6} md={4} lg={3}><ProfileCard /></Col>
                    <Col xs={6} md={4} lg={3}><ProfileCard /></Col>
                    <Col xs={6} md={4} lg={3}><ProfileCard /></Col>
                    <Col xs={6} md={4} lg={3}><ProfileCard /></Col>
                    <Col xs={6} md={4} lg={3}><ProfileCard /></Col>
                    <Col xs={6} md={4} lg={3}><ProfileCard /></Col>
                    <Col xs={6} md={4} lg={3}><ProfileCard /></Col>
                    <Col xs={6} md={4} lg={3}><ProfileCard /></Col>
                    <Col xs={6} md={4} lg={3}><ProfileCard /></Col>
                    <Col xs={6} md={4} lg={3}><ProfileCard /></Col>
                    <Col xs={6} md={4} lg={3}><ProfileCard /></Col>
                    <Col xs={6} md={4} lg={3}><ProfileCard /></Col>
                </Row>
            </Container>
        </div>
    )
}
