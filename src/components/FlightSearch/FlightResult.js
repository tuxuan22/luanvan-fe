import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Accordion, Row, Col } from 'react-bootstrap'
import { formatDate, formatTime, calculateFlightDuration } from '../../utils/Common/formatTime'
import { formatPrice } from '../../utils/Common/formatPrice'

const FlightResult = ({ searchData, number, airline, departureAirport, arrivalAirport, departure_time, arrival_time, price, class_name }) => {
    const navigate = useNavigate()
    const fdd = formatDate(departure_time)
    const ftd = formatTime(departure_time)
    const fda = formatDate(arrival_time)
    const fta = formatTime(arrival_time)
    const p = formatPrice(price)

    const handleClick = (event) => {
        event.stopPropagation()
        navigate('/passenger', {
            state: {
                flightNumber: number,
                airline: airline.name,
                departureAirport: departureAirport.code,
                arrivalAirport: arrivalAirport.code,
                departureTime: departure_time,
                arrivalTime: arrival_time,
                price: price,
                class: class_name
            }

        })
        const accordion = event.target.closest('.accordion-item');
        if (accordion) {
            accordion.classList.remove('show');
        }
    }
    return (
        <Accordion className='mb-4'>

            <Accordion.Item eventKey='0'>
                <Accordion.Header>
                    <Row style={{ width: '100%' }}>
                        <Col sm={1} style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ width: '48px', height: '48px' }}>
                                <img src={`https://www.gstatic.com/flights/airline_logos/70px/${airline.code}.png`} alt='airline' style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
                            </div>
                        </Col>
                        <Col sm={2} className='mt-3'>
                            <label style={{ fontSize: '12px' }}>{airline.code}{number}</label>
                            <p style={{ fontSize: '12px' }}>{airline.name}</p>
                        </Col>
                        <Col sm={2} className='mt-3'>
                            <label style={{ fontSize: '12px' }}>{ftd}</label>
                            <p style={{ fontSize: '12px' }}>{departureAirport.code}</p>
                        </Col>

                        <Col sm={2} className='mt-3'>
                            <label style={{ fontSize: '12px' }}>{fta}</label>
                            <p style={{ fontSize: '12px' }}>{arrivalAirport.code}</p>
                        </Col>
                        <Col sm={3} className='mt-3'>
                            <label style={{ fontSize: '12px' }}>{p}</label>
                            <p style={{ fontSize: '12px' }}>VND</p>
                        </Col>
                        <Col sm={2} className='mt-3'>
                            <button type='button' className='btn btn-outline-primary' style={{ alignItems: 'center' }} onClick={handleClick}>
                                <div style={{ fontSize: '12px' }}>Chọn</div>
                            </button>
                        </Col>
                    </Row>
                </Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col sm={6}>
                            <p>{fdd} {ftd} - {departureAirport.name}</p>
                            <p className='my-5'>Thời gian bay: {calculateFlightDuration(departure_time, arrival_time)}</p>

                            <p>{fda} {fta} - {arrivalAirport.name}</p>
                        </Col>
                        <Col sm={6}>
                            <div style={{ width: '30px', height: '30px' }} className='mb-3'>
                                <img src={`https://www.gstatic.com/flights/airline_logos/70px/${airline.code}.png`} alt='airline' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <p style={{ fontSize: '12px' }}>Hãng: {airline.name}</p>
                            <p style={{ fontSize: '12px' }}>Chuyến bay: {airline.code}{number}</p>
                            <p style={{ fontSize: '12px' }}>Hạng: {class_name}</p>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>

        </Accordion >
    )
}

export default FlightResult
