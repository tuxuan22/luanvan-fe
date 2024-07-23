import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { Eye, EyeSlashFill } from 'react-bootstrap-icons'
import useToggle from './useToggle'

const PasswordInput = ({ label, invalidFields, name, ...props }) => {
    const [showPass, toggleShowPass] = useToggle()

    return (
        <Form.Group className='mb-3'>
            <Form.Label>{label}</Form.Label>
            <InputGroup>
                <Form.Control
                    type={showPass ? 'text' : 'password'}
                    {...props}
                    className='border-end-0'
                />
                <InputGroup.Text onClick={toggleShowPass} style={{ cursor: 'pointer' }} className='border-start-0 '>
                    {showPass ? <EyeSlashFill /> : <Eye />}
                </InputGroup.Text>
            </InputGroup>
            {invalidFields.length > 0 && invalidFields.some(i => i.name === name) && (
                <Form.Text className='text-danger'>
                    {invalidFields.find(i => i.name === name)?.message}
                </Form.Text>
            )}
        </Form.Group>
    )
}

export default PasswordInput