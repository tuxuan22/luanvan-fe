import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorBubble = ({ message }) => (
    <Alert variant='info' className='mt-2 position-absolute' style={{ width: '160px' }}>
        {message}
        <div
            style={{
                position: 'absolute',
                top: '-10px',
                left: '10px',
                width: '0',
                height: '0',
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderBottom: '10px solid #cff4fc',
            }}
        ></div>
    </Alert>
)

export default ErrorBubble
