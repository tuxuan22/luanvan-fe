import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

const FormContactInfo = () => {
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
                    <Form.Label>Số điện thoại:</Form.Label>
                    <Form.Control type='tel' id='phoneNumber' name='phoneNumber' required />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type='email' id='email' name='email' required />
                </Form.Group>

            </Row>

        </Form>
    )

}

export default FormContactInfo