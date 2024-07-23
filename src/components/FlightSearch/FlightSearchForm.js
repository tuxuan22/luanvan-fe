import React, { useState, useEffect } from 'react'
import { Container, Form, Row, Col, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ErrorBubble from '../ErrorBubble'
import * as actions from '../../store/actions'
// import {}

const FlightSearchForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({})

    const airports = useSelector((state) => state.airport.airports)

    const [payload, setPayload] = useState({
        tripType: 'oneWay',
        departure_airport_id: '',
        arrival_airport_id: '',
        departure_time: '',
        returnDate: '',
        adultCount: 1,
        childCount: 0,
        infantCount: 0,
        class_name: '',
    })

    const [invalidFields, setInvalidFields] = useState([])


    useEffect(() => {
        dispatch(actions.getAirports())
    }, [dispatch])

    const today = new Date().toISOString().split('T')[0]

    const handleDepartureDateChange = (e) => {
        const selectedDate = e.target.value
        setPayload((prev) => ({ ...prev, departure_time: selectedDate }))
        if (payload.tripType === 'roundTrip') {
            const returnDate = new Date(selectedDate);
            returnDate.setDate(returnDate.getDate() + 2)

            if (returnDate > new Date(payload.returnDate)) {
                setPayload((prev) => ({ ...prev, returnDate: returnDate.toISOString().split('T')[0] }))
            }
        }
    }

    useEffect(() => {
        setPayload((prev) => ({ ...prev, departure_time: today }))
        if (payload.tripType === 'roundTrip') {
            setPayload((prev) => ({ ...prev, returnDate: today }))
        }
    }, [today, payload.tripType])



    const setErrorWithTimeout = (field, message) => {
        setErrors((prev) => ({ ...prev, [field]: message }))
        setTimeout(() => {
            setErrors((prev) => ({ ...prev, [field]: '' }))
        }, 3000)
    }

    const handleAdultCountChange = (e) => {
        const newCount = parseInt(e.target.value)
        if (newCount >= 0 && newCount <= 7 - payload.childCount && newCount >= payload.infantCount) {
            setPayload((prev) => ({ ...prev, adultCount: newCount }))
            setErrors((prev) => ({ ...prev, adultCount: '' }))
        } else if (newCount > 7 - payload.childCount) {
            setErrorWithTimeout('adultCount', 'Số hành khách không được quá 7')
            setPayload((prev) => ({ ...prev, adultCount: 7 - payload.childCount }))
        } else if (newCount < payload.infantCount) {
            setErrorWithTimeout('adultCount', 'Số em bé không được nhiều hơn số người lớn')
            setPayload((prev) => ({ ...prev, adultCount: payload.infantCount }))
        }
    }
    // console.log(payload);
    const handleChildCountChange = (e) => {
        const newCount = parseInt(e.target.value)

        if (newCount >= 0 && newCount <= 7 - payload.adultCount) {
            setPayload((prev) => ({ ...prev, childCount: newCount }))
            setErrors((prev) => ({ ...prev, childCount: '' }))
        } else if (newCount > 7 - payload.adultCount) {
            setErrorWithTimeout('childCount', 'Số hành khách không được quá 7')
            setPayload((prev) => ({ ...prev, childCount: 7 - payload.adultCount }))
        }
    }

    const handleInfantCountChange = (e) => {
        const newCount = parseInt(e.target.value)

        if (newCount >= 0 && newCount <= payload.adultCount) {
            setPayload((prev) => ({ ...prev, infantCount: newCount }))
            setErrors((prev) => ({ ...prev, infantCount: '' }))
        } else if (newCount > payload.adultCount) {
            setErrorWithTimeout('infantCount', 'Số em bé không được nhiều hơn số người lớn')
            setPayload((prev) => ({ ...prev, infantCount: payload.adultCount }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        const searchData = {
            ...payload,
            tripType: payload.tripType,
            departure_airport_id: payload.departure_airport_id,
            arrival_airport_id: payload.arrival_airport_id,
            departure_time: payload.departure_time,
            returnDate: payload.returnDate,
            adultCount: payload.adultCount,
            childCount: payload.childCount,
            infantCount: payload.infantCount,
            class_name: payload.class_name,
        }


        // dispatch(actions.searchFlights(searchDataObj))
        navigate('/flights', { state: searchData })

    }
    return (
        <Container style={{ maxWidth: '800px' }} className='shadow p-5 mt-5 mb-5 bg-dbody rounded'>
            <h3 className='fw-bold  text-info'>Tìm Chuyến Bay</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className='mb-3'>
                    <Col>
                        <ToggleButtonGroup type='radio' name='tripType' defaultValue='oneWay'>
                            <ToggleButton id='tbg-radio-2' value='oneWay' onClick={() => setPayload((prev) => ({ ...prev, tripType: 'oneWay', returnDate: '' }))}>
                                Một chiều
                            </ToggleButton>
                            <ToggleButton id='tbg-radio-1' value='roundTrip' onClick={() => setPayload((prev) => ({ ...prev, tripType: 'roundTrip' }))}>
                                Khứ hồi
                            </ToggleButton>

                        </ToggleButtonGroup>
                    </Col>
                </Form.Group>

                <Row className='mb-3'>
                    <Col sm={6}>
                        <Form.Label>Điểm đi</Form.Label>
                        <Form.Control as='select' value={payload.departure_airport_id}
                            onChange={(e) => { setPayload((prev) => ({ ...prev, departure_airport_id: e.target.value })) }}>
                            <option value=''>Chọn điểm đi</option>
                            {airports.map((airport) => (
                                <option key={airport.code} value={airport.id}>
                                    {airport.name}, {airport.city}, {airport.country} - {airport.code}
                                </option>
                            ))}
                        </Form.Control>
                    </Col>

                    <Col sm={6}>
                        <Form.Label>Điểm đến</Form.Label>
                        <Form.Control as='select' value={payload.arrival_airport_id} onChange={(e) => { setPayload((prev) => ({ ...prev, arrival_airport_id: e.target.value })) }}>
                            <option value=''>Chọn điểm đến</option>
                            {airports.map((airport) => (
                                <option key={airport.code} value={airport.id}>
                                    {airport.name} - {airport.city}, {airport.country} - {airport.code}
                                </option>
                            ))}
                        </Form.Control>
                    </Col>
                </Row>

                <Form.Group as={Row} className='mb-3'>
                    <Col sm={6}>
                        <Form.Label>Ngày đi</Form.Label>
                        <Form.Control
                            type='date'
                            min={today}
                            value={payload.departure_time}
                            onChange={handleDepartureDateChange}

                        />
                    </Col>

                    {payload.tripType === 'roundTrip' && (
                        <Col sm={6}>
                            <Form.Label>Ngày về</Form.Label>
                            <Form.Control
                                type='date'
                                min={payload.departure_time}
                                value={payload.returnDate}
                                onChange={(e) => setPayload((prev) => ({ ...prev, returnDate: e.target.value }))}

                            />
                        </Col>
                    )}
                </Form.Group>

                <Form.Group as={Row} className='mb-3'>
                    <Col sm={3}>
                        <Form.Label>Người lớn</Form.Label>
                        <Form.Control
                            type='number'
                            min='1'
                            max='8'
                            value={payload.adultCount}
                            onChange={handleAdultCountChange}

                        />
                        {errors.adultCount && <ErrorBubble message={errors.adultCount} />}
                    </Col>

                    <Col sm={3}>
                        <Form.Label>Trẻ em</Form.Label>
                        <Form.Control
                            type='number'
                            min='0'
                            max='7'
                            value={payload.childCount}
                            onChange={handleChildCountChange}
                        />
                        {errors.childCount && <ErrorBubble message={errors.childCount} />}
                    </Col>

                    <Col sm={3}>
                        <Form.Label>Em bé</Form.Label>
                        <Form.Control
                            type='number'
                            min='0'
                            max='8'
                            value={payload.infantCount}
                            onChange={handleInfantCountChange}
                        />
                        {errors.infantCount && <ErrorBubble message={errors.infantCount} />}
                    </Col>

                    <Col sm={3}>
                        <Form.Label>Hạng</Form.Label>
                        <Form.Control
                            as='select'
                            value={payload.class_name}
                            onChange={(e) => { setPayload((prev) => ({ ...prev, class_name: e.target.value })) }}
                            onFocus={() => setInvalidFields([])}
                        >
                            <option value=''>Chọn hạng</option>
                            <option>Phổ thông</option>
                            <option>Thương gia</option>
                            <option>Hạng nhất</option>
                        </Form.Control>
                        {invalidFields.some(field => field.name === 'class_name') && (
                            <Form.Text className='text-danger'>
                                {invalidFields.find(field => field.name === 'class_name').message}
                            </Form.Text>
                        )}
                    </Col>
                </Form.Group>
                <div className='mt-4 d-flex justify-content-end'>
                    <Button size='lg' variant='primary' type='submit'>
                        Tìm chuyến bay
                    </Button>
                </div>

            </Form>

        </Container>

    )
}

export default FlightSearchForm
