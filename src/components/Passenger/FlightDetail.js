import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { formatDate, formatTime } from '../../utils/Common/formatTime'

const FlightDetail = ({ flightData }) => {
    const fdd = formatDate(flightData.departureTime)
    const ftd = formatTime(flightData.departureTime)

    return (
        <Form>
            <Form.Group controlId='formBasicEmail'>
                <Form.Label>Chi tiết vé</Form.Label>
                <p>{flightData.departureAirport} - {flightData.arrivalAirport}</p>
                <p>{fdd}</p>
                <p>{flightData.airline}</p>

                <p>Phổ thông</p>
            </Form.Group>
        </Form>
    )
}

export default FlightDetail