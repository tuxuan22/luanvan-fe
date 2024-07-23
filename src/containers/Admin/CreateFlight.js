import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'
import '../../index.css'
import { apiCreateFlight, apiUpdateFlight } from '../../services'
import validate from '../../utils/Common/validateField'
import { toast } from 'react-toastify'
import { Form } from 'react-bootstrap'

const CreateFlight = ({ isUpdate }) => {
    const dispatch = useDispatch()

    const { dataUpdate } = useSelector(state => state.flight)
    const { airports } = useSelector(state => state.airport)
    const { airlines } = useSelector(state => state.airline)

    const [invalidFields, setInvalidFields] = useState([])
    const [payload, setPayload] = useState(() => {
        const initData = {
            number: dataUpdate?.number || '',
            airline_id: dataUpdate?.airline_id || '',
            departure_airport_id: dataUpdate?.departure_airport_id || '',
            arrival_airport_id: dataUpdate?.arrival_airport_id || '',
            departure_time: dataUpdate?.departure_time ? new Date(dataUpdate?.departure_time) : new Date(),
            arrival_time: dataUpdate?.arrival_time ? new Date(dataUpdate?.arrival_time) : new Date(),
            price: dataUpdate?.price || '',
            seat_capcity: dataUpdate?.seat_capcity || '',
            class_name: dataUpdate?.class_name || '',
        }
        return initData
    })
    useEffect(() => {
        dispatch(actions.getAirports())
        dispatch(actions.getAirlines())
    }, [dispatch])
    const handleSubmit = async (e) => {

        e.preventDefault()
        let number = payload.number;
        let airline_id = payload.airline_id;
        let departure_airport_id = payload.departure_airport_id;
        let arrival_airport_id = payload.arrival_airport_id;
        let departure_time = payload.departure_time;
        let arrival_time = payload.arrival_time;
        let price = payload.price;
        let seat_capcity = payload.seat_capcity;
        let class_name = payload.class_name;


        let finalPayload = {
            ...payload,
            number,
            airline_id,
            departure_airport_id,
            arrival_airport_id,
            departure_time,
            arrival_time,
            price,
            seat_capcity,
            class_name
        }

        const result = validate(finalPayload, setInvalidFields)
        console.log(result)

        if (result === 0) {
            if (dataUpdate && isUpdate) {
                finalPayload.id = dataUpdate?.id

                console.log(finalPayload)
                const response = await apiUpdateFlight(finalPayload)
                console.log(response)
                if (response?.data.err === 0) {
                    toast.success('Chuyến bay được sửa thành công.', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    resetPayload()
                    dispatch(actions.resetDataUpdate())
                }
                else {
                    toast.error(response?.data.msg, {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                }
            }
            else {
                const response = await apiCreateFlight(finalPayload)
                if (response?.data.err === 0) {
                    toast.success('Chuyến đã được tạo thành công.', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    resetPayload()
                } else {
                    toast.error(response?.data.msg, {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                }
            }


        }
    }

    const resetPayload = () => {
        setPayload({
            number: '',
            airline_id: '',
            departure_airport_id: '',
            arrival_airport_id: '',
            departure_time: new Date(),
            arrival_time: new Date(),
            price: 0,
            seat_capcity: 0,
            class_name: ''
        })
    }

    return (
        <div className='p-3'>
            <h2 className='fw-bold text-info'>{isUpdate ? 'Sửa chuyến bay' : 'Tạo chuyến bay'}</h2>
            <div className='py-3'>
                <form
                    onSubmit={handleSubmit}
                >

                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='form-group py-2 '>
                                <label htmlFor='number'>Mã chuyến bay:</label>
                                <input
                                    type='text'
                                    id='number'
                                    className='form-control'
                                    value={payload.number}
                                    onChange={(e) => setPayload({ ...payload, number: e.target.value })}
                                    onFocus={() => setInvalidFields([])}
                                />
                                {invalidFields.some(field => field.name === 'number') && (
                                    <Form.Text className='text-danger'>
                                        {invalidFields.find(field => field.name === 'number').message}
                                    </Form.Text>
                                )}
                            </div>

                            <div className='form-group py-2'>
                                <label htmlFor='departure_airport_id'>Điểm đi:</label>
                                <select
                                    id='departure_airport_id'
                                    className='form-control'
                                    value={payload.departure_airport_id}
                                    onChange={(e) => setPayload({ ...payload, departure_airport_id: e.target.value })}
                                    onFocus={() => setInvalidFields([])}

                                >
                                    <option value=''>Chọn điểm đi</option>
                                    {airports.map((airport) => (
                                        <option key={airport.id} value={airport.id}>
                                            {airport.name}, {airport.city}, {airport.country} - {airport.code}
                                        </option>
                                    ))}
                                </select>
                                {invalidFields.some(field => field.name === 'departure_airport_id') && (
                                    <Form.Text className='text-danger'>
                                        {invalidFields.find(field => field.name === 'departure_airport_id').message}
                                    </Form.Text>
                                )}
                            </div>
                            <div className='form-group py-2'>
                                <label htmlFor='arrival_airport_id'>Điểm đến:</label>
                                <select
                                    id='arrival_airport_id'
                                    className='form-control'
                                    value={payload.arrival_airport_id}
                                    onChange={(e) => setPayload({ ...payload, arrival_airport_id: e.target.value })}
                                    onFocus={() => setInvalidFields([])}
                                >
                                    <option value=''>Chọn điểm đến</option>
                                    {airports.map((airport) => (
                                        <option key={airport.id} value={airport.id}>

                                            {airport.name}, {airport.city}, {airport.country} - {airport.code}
                                        </option>
                                    ))}
                                </select>
                                {invalidFields.some(field => field.name === 'arrival_airport_id') && (
                                    <Form.Text className='text-danger'>
                                        {invalidFields.find(field => field.name === 'arrival_airport_id').message}
                                    </Form.Text>
                                )}
                            </div>
                        </div>
                        <div className='col-md-4'>

                            <div className='form-group py-2'>
                                <label htmlFor='departure_time'>Thời gian khởi hành:</label>
                                <br />

                                <DatePicker
                                    // value={payload.departure_time}
                                    className='form-control'
                                    selected={payload.departure_time}
                                    onChange={(date) => setPayload({ ...payload, departure_time: date })}
                                    showTimeSelect
                                    timeFormat='HH:mm'
                                    timeIntervals={10}
                                    dateFormat='dd-MM-yyyy HH:mm'
                                    minDate={new Date()}
                                    onFocus={() => setInvalidFields([])}


                                />
                                {invalidFields.some(field => field.name === 'departure_time') && (
                                    <Form.Text className='text-danger'>
                                        {invalidFields.find(field => field.name === 'departure_time').message}
                                    </Form.Text>
                                )}
                            </div>

                            <div className='form-group py-2 '>
                                <label htmlFor='arrival_time'>Thời gian đến:</label>
                                <br />
                                <DatePicker
                                    // value={payload.arrival_time}
                                    className='form-control w-100'
                                    selected={payload.arrival_time}
                                    onChange={(date) => setPayload({ ...payload, arrival_time: date })}
                                    showTimeSelect
                                    timeFormat='HH:mm'
                                    timeIntervals={10}
                                    dateFormat='dd-MM-yyyy HH:mm'
                                    minDate={payload.departure_time}
                                    onFocus={() => setInvalidFields([])}

                                />
                                {invalidFields.some(field => field.name === 'arrival_time') && (
                                    <Form.Text className='text-danger'>
                                        {invalidFields.find(field => field.name === 'arrival_time').message}
                                    </Form.Text>
                                )}
                            </div>
                            <div className='form-group py-2'>
                                <label htmlFor='airline'>Hãng hàng không:</label>
                                <select
                                    id='airline_id'
                                    className='form-control'
                                    value={payload.airline_id}
                                    onChange={(e) => setPayload({ ...payload, airline_id: e.target.value })}
                                    onFocus={() => setInvalidFields([])}
                                >
                                    <option value=''>Chọn hãng hàng không</option>
                                    {airlines.map((airline) => (
                                        <option key={airline.id} value={airline.id}>
                                            {airline.name}
                                        </option>
                                    ))}
                                </select>
                                {invalidFields.some(field => field.name === 'airline_id') && (
                                    <Form.Text className='text-danger'>
                                        {invalidFields.find(field => field.name === 'airline_id').message}
                                    </Form.Text>
                                )}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='form-group py-2'>
                                <label htmlFor='price'>Giá:</label>
                                <input
                                    type='text'
                                    id='price'
                                    className='form-control'
                                    value={payload.price}
                                    onChange={(e) => setPayload({ ...payload, price: e.target.value })}
                                    onFocus={() => setInvalidFields([])}
                                />
                                {invalidFields.some(field => field.name === 'price') && (
                                    <Form.Text className='text-danger'>
                                        {invalidFields.find(field => field.name === 'price').message}
                                    </Form.Text>
                                )}
                            </div>
                            <div className='form-group py-2'>
                                <label htmlFor='seat_capcity'>Số chỗ ngồi:</label>
                                <input
                                    type='text'
                                    id='seat_capcity'
                                    className='form-control'
                                    value={payload.seat_capcity}
                                    onChange={(e) => setPayload({ ...payload, seat_capcity: e.target.value })}
                                    onFocus={() => setInvalidFields([])}
                                />
                                {invalidFields.some(field => field.name === 'seat_capcity') && (
                                    <Form.Text className='text-danger'>
                                        {invalidFields.find(field => field.name === 'seat_capcity').message}
                                    </Form.Text>
                                )}
                            </div>
                            <div className='form-group py-2'>
                                <label htmlFor='className'>Hạng:</label>
                                <select
                                    className='form-control'
                                    onChange={(e) => setPayload({ ...payload, class_name: e.target.value })}
                                    value={payload.class_name}
                                    onFocus={() => setInvalidFields([])}
                                >
                                    <option value=''>Chọn hạng</option>
                                    <option>Phổ thông</option>
                                    <option>Thương gia</option>
                                    <option>Hạng nhất</option>
                                </select>
                                {invalidFields.some(field => field.name === 'class_name') && (
                                    <Form.Text className='text-danger'>
                                        {invalidFields.find(field => field.name === 'class_name').message}
                                    </Form.Text>
                                )}
                            </div>


                        </div>

                        <div className='d-flex justify-content-end'>
                            <button type='submit' className=' my-3 btn btn-primary'>{isUpdate ? 'Cập nhật' : 'Tạo chuyến bay'}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateFlight