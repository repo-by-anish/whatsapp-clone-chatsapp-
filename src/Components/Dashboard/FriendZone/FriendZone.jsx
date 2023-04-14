import React from 'react'
import Header from '../Basic components/Header'
import FriendRequest from './FriendRequest';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FriendZone() {
    return (
        <>
            <Header />
            <div className='friend-zone'>
                <h3>Requests</h3>
                <div className="friend-requests">
                <Container>
                <Row>
                <Col xs={6} md={4} lg={3}><FriendRequest/></Col>
                <Col xs={6} md={4} lg={3}><FriendRequest/></Col>
                <Col xs={6} md={4} lg={3}><FriendRequest/></Col>
                <Col xs={6} md={4} lg={3}><FriendRequest/></Col>
                <Col xs={6} md={4} lg={3}><FriendRequest/></Col>
                <Col xs={6} md={4} lg={3}><FriendRequest/></Col>
                <Col xs={6} md={4} lg={3}><FriendRequest/></Col>
                <Col xs={6} md={4} lg={3}><FriendRequest/></Col>
                </Row>
                </Container>
                </div>
            </div>
        </>
    )
}
