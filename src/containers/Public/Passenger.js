import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FlightDetail, PassengerDetail } from '../../components'
import { useLocation } from 'react-router-dom'

const Passenger = () => {
    const location = useLocation()


    return (
        <Container className='mt-5 rounded'>
            {/* add step process bar here */}
            <Row>
                <Col sm={3} className=' p-4'>
                    <Row className='shadow bg-white pt-4 pb-4 mb-4 rounded'>
                        {/* detail */}
                        <FlightDetail flightData={location.state} />
                    </Row>

                </Col>
                <Col sm={9} className=' p-4'>

                    {/* passenger details */}
                    <h4>Thông tin hành khách</h4>
                    <PassengerDetail />
                    <div className='mt-4 d-flex justify-content-end'>
                        <Button size='lg' variant='primary' type='submit'>
                            Tiếp tục
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Passenger