import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Col, Container, Row, Accordion } from 'react-bootstrap'
import { SearchFormResult, FlightResult, FilterForm } from '../../components'
import * as actions from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'


const Flight = () => {
    const dispatch = useDispatch()
    const { flights } = useSelector(state => state.flight)
    const location = useLocation()

    useEffect(() => {
        const searchData = location.state
        const searchObj = Object.entries(searchData).filter(item => item[0] !== 'tripType' && item[0] !== 'adultCount' && item[0] !== 'childCount' && item[0] !== 'infantCount' && item[0] !== 'returnDate')
        const searchDataObj = {}
        searchObj.forEach(item => {
            searchDataObj[item[0]] = item[1]
        })
        // dispatch(actions.searchFlights(searchDataObj))
        dispatch(actions.getFlights())
        // dispatch(actions.searchFlightsAmadeus(searchData))

    }, [])

    console.log(flights)

    return (
        <Container className='mt-5'>
            <Row>
                <Col sm={3} className=' p-4'>
                    <Row className='shadow bg-white pt-4 pb-4 mb-4 rounded'>
                        <SearchFormResult searchData={location.state} />
                    </Row>
                    <Row className='shadow bg-white pt-4 pb-4 mb-4 rounded'>
                        <FilterForm />
                    </Row>
                </Col>
                <Col sm={9} className=' p-4'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0" className='mb-3'>
                            <Accordion.Header>Chọn chuyến bay đi</Accordion.Header>
                            <Accordion.Body>
                                {flights?.length > 0 && flights.map(item => {
                                    return (
                                        <FlightResult
                                            searchData={location.state}
                                            key={item?.id}
                                            number={item?.number}
                                            airline={item?.airline}
                                            departureAirport={item?.departureAirport}
                                            arrivalAirport={item?.arrivalAirport}
                                            departure_time={item?.departure_time}
                                            arrival_time={item?.arrival_time}
                                            price={item?.price}
                                            class_name={item?.class_name}
                                        />
                                    )
                                })}
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                    <Accordion defaultActiveKey={'0'}>
                        {location.state?.tripType === 'roundTrip' && flights?.length > 0 && (
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Chọn chuyến bay về</Accordion.Header>
                                <Accordion.Body>
                                    {flights.map(item => {
                                        return (
                                            <FlightResult
                                                key={item?.id}
                                                number={item?.number}
                                                airline={item?.airline}
                                                departureAirport={item?.departureAirport}
                                                arrivalAirport={item?.arrivalAirport}
                                                departure_time={item?.departure_time}
                                                arrival_time={item?.arrival_time}
                                                price={item?.price}
                                                class_name={item?.class_name}
                                            />
                                        )
                                    })}
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Accordion>
                </Col>
            </Row>
        </Container>
    )
}

export default Flight