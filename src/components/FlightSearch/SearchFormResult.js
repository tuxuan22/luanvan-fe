import React, { useState, useEffect } from 'react'
import { Col, Row, Form, ToggleButton, ToggleButtonGroup, Button } from 'react-bootstrap'
import ErrorBubble from '../ErrorBubble'
import { useDispatch, useSelector } from 'react-redux'

import * as actions from '../../store/actions'
import { useNavigate } from 'react-router-dom'

const SearchFormResult = ({ searchData }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [payload, setPayload] = useState({
        tripType: searchData.tripType || 'oneWay',
        departure_airport_id: searchData.departure_airport_id || '',
        arrival_airport_id: searchData.arrival_airport_id || '',
        departure_time: searchData.departure_time || '',
        returnDate: searchData.returnDate || '',
        adultCount: searchData.adultCount || 1,
        childCount: searchData.childCount || 0,
        infantCount: searchData.infantCount || 0,
        class_name: searchData.class_name || '',
    })

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
        navigate('/flights', { state: searchData })
    }
    const [errors, setErrors] = useState({})
    console.log(searchData)
    const airports = useSelector((state) => state.airport.airports)

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
        setPayload((prev) => ({ ...prev, departure_time: payload.departure_time }))
        if (payload.tripType === 'roundTrip') {
            setPayload((prev) => ({ ...prev, returnDate: payload.returnDate }))
        }
    }, [])

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

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group as={Row} className='mb-3' key='tripType'>
                <Col>
                    <ToggleButtonGroup type='radio' name='tripType' defaultValue='oneWay'>
                        <ToggleButton id='tbg-radio-2' value='oneWay'
                            onClick={() => setPayload((prev) => ({ ...prev, tripType: 'oneWay', returnDate: '' }))}
                        >
                            Một chiều
                        </ToggleButton>
                        <ToggleButton id='tbg-radio-1' value='roundTrip'
                            onClick={() => setPayload((prev) => ({ ...prev, tripType: 'roundTrip' }))}
                        >
                            Khứ hồi
                        </ToggleButton>

                    </ToggleButtonGroup>
                </Col>
            </Form.Group>

            <Row className='mb-3'>
                <Col>
                    <Form.Label>Điểm đi</Form.Label>
                    <Form.Control as='select' value={payload.departure_airport_id} onChange={(e) => { setPayload((prev) => ({ ...prev, departure_airport_id: e.target.value })) }} >
                        <option value=''>Chọn điểm đi</option>
                        {airports.map((airport) => (
                            <option key={airport.code} value={airport.id}>
                                {airport.name}, {airport.city}, {airport.country} - {airport.code}
                            </option>
                        ))}
                    </Form.Control>
                </Col>

            </Row>

            <Row className='mb-3'>


                <Col>
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
                <Col>
                    <Form.Label>Ngày đi</Form.Label>
                    <Form.Control
                        type='date'
                        min={today}
                        value={payload.departure_time}
                        onChange={handleDepartureDateChange}

                    />
                </Col>


            </Form.Group>


            <Form.Group as={Row} className='mb-3'>


                {payload.tripType === 'roundTrip' && (
                    <Col>
                        <Form.Label>Ngày về</Form.Label>
                        <Form.Control
                            type='date'
                            min={payload.departure_time || today}
                            value={payload.returnDate}
                            onChange={(e) => setPayload((prev) => ({ ...prev, returnDate: e.target.value }))}
                        />
                    </Col>
                )}
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
                <Col>
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

                <Col>
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


            </Form.Group>

            <Form.Group as={Row} className='mb-3'>


                <Col>
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

                <Col>
                    <Form.Label>Hạng ghế</Form.Label>
                    <Form.Control as='select'

                        value={payload.class_name}
                        onChange={(e) => { setPayload((prev) => ({ ...prev, class_name: e.target.value })) }}
                    >
                        <option>Phổ thông</option>
                        <option>Thương gia</option>
                        <option>Hạng nhất</option>
                    </Form.Control>
                </Col>
            </Form.Group>
            <div className='mt-4 d-grid gap-2 '>
                <Button href='/flights' variant='primary' type='submit'>
                    Tìm chuyến bay
                </Button>
            </div>

        </Form>
    )
}

export default SearchFormResult