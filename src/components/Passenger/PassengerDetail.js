import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'

const PassengerDetail = () => {
    const [payload, setPayload] = useState(() => {
        const initData = {
            number: '',
            airline_id: '',
            departure_airport_id: '',
            arrival_airport_id: '',
            departure_time: new Date(),
            arrival_time: new Date(),
            price: '',
            seat_capcity: '',
            class_name: '',
        }
        return initData
    })
    return (

        <Form className='shadow bg-white p-4 mb-4 rounded' onSubmit>
            <Row>
                <Form.Group as={Col}>
                    <Form.Label>Họ:</Form.Label>
                    <Form.Control type='text' id='firstName' name='firstName' required />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Tên đệm và tên:</Form.Label>
                    <Form.Control type='text' id='lastName' name='lastName' required />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col}>
                    <Form.Label>Ngày sinh:</Form.Label>
                    <Form.Control type='date' id='birthday' name='birthday' required />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Quốc tịch:</Form.Label>
                    <Form.Control type='text' id='nationality' name='nationality' required >


                    </Form.Control>
                </Form.Group>
            </Row>

        </Form>

    )
}

export default PassengerDetail
