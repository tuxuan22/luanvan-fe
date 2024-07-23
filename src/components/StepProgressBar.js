import { Col, Row } from 'react-bootstrap'

const StepProgressBar = ({ steps }) => {
    return (
        <Row className='mb-4'>
            <Col>
                <div className='d-flex justify-content-between'>
                    {Array.from({ length: steps }, (_, index) => (
                        <div key={index} className='d-flex flex-column align-items-center'>
                            <div
                                className={`rounded-circle border border-dark p-2 text-center ${index === 0 ? 'bg-primary text-white' : ''
                                    }`}
                                style={{ width: '30px', height: '30px' }}
                            >
                                {index + 1}
                            </div>
                            <div className='mt-2'>Step {index + 1}</div>
                        </div>
                    ))}
                </div>
                <div className='progress'>
                    <div
                        className='progress-bar'
                        role='progressbar'
                        style={{ width: `${(100 / steps)}%` }}
                        aria-valuenow={1}
                        aria-valuemin={1}
                        aria-valuemax={steps}
                    />
                </div>
            </Col>
        </Row>
    )
}

export default StepProgressBar