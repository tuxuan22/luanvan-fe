import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { formatPrice } from '../../utils/Common/formatPrice'

const FilterForm = () => {
    const [selectedPriceRange, setSelectedPriceRange] = useState(1000000)
    const handleAirlineFilterChange = (event) => {

    }

    const handlePriceFilterChange = (event) => {
        setSelectedPriceRange(event.target.value)
    }
    return (
        <Form>
            <Form.Group>
                <Form.Label>Hãng hàng không</Form.Label>
                <Form.Check type='checkbox' label='Vietjet Air' onChange={handleAirlineFilterChange} value='Vietjet Air' />
                <Form.Check type='checkbox' label='Bamboo Airways' onChange={handleAirlineFilterChange} value='Bamboo Airways' />
                <Form.Check type='checkbox' label='Vietnam Airlines' onChange={handleAirlineFilterChange} value='Vietnam Airlines' />
            </Form.Group>
            <Form.Group>
                <Form.Label>Giá</Form.Label>
                <Form.Range
                    type='range'
                    min='1000000'
                    max='10000000'
                    value={selectedPriceRange}
                    onChange={handlePriceFilterChange}
                    style={{
                        background: `linear-gradient(to right, #007bff ${(selectedPriceRange - 1000000) / (10000000 - 1000000) * 100}%, #fff ${(selectedPriceRange - 1000000) / (10000000 - 1000000) * 100}%)`
                    }}
                />
                <Form.Text>{formatPrice(selectedPriceRange)}</Form.Text>
            </Form.Group>
        </Form>
    )
}

export default FilterForm