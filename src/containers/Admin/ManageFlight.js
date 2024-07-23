import React, { useEffect, useState } from 'react'
import icons from '../../utils/icons'
import * as actions from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { apiDeleteFlight } from '../../services/flight'
import { UpdateFlight } from '../../components'
import { calculateFlightDuration } from '../../utils/Common/formatTime'
import { formatPrice } from '../../utils/Common/formatPrice'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'


const ManageFlight = () => {
    const dispatch = useDispatch()
    const [isUpdate, setIsUpdate] = useState(false)
    const { PiTrashBold, PiNotePencilBold } = icons
    const { flights, dataUpdate } = useSelector(state => state.flight)
    const [updateData, setUpdateData] = useState(false)
    useEffect(() => {
        !dataUpdate && dispatch(actions.getFlights())

    }, [dispatch, updateData, dataUpdate])
    console.log(flights);

    useEffect(() => {
        !dataUpdate && setIsUpdate(false)
    }, [dataUpdate])
    const handleDeleteFlight = async (id) => {
        const result = await Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa?',
            text: 'Dữ liệu sẽ bị xóa vĩnh viễn!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Hủy',
        })
        if (result.isConfirmed) {
            const response = await apiDeleteFlight(id)
            if (response?.data.err === 0) {
                setUpdateData(prev => !prev)
                toast.success('Chuyến bay đã được xóa thành công.', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            } else {
                toast.error('Xóa chuyến bay thất bại', {
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
    return (


        <div className='px-3'>
            <h2 className='fw-bold  text-info'>Quản lý chuyến bay</h2>
            <div className='mt-3 mx-1'>
                <table className='table table-striped table-bordered table-hover'>
                    <thead className='table-info'>
                        <tr>
                            <th>ID</th>
                            <th>Mã chuyến bay</th>
                            <th>Tên hãng hàng không</th>
                            <th>Điểm đi</th>
                            <th>Điểm đến</th>
                            <th>Thời gian khởi hành</th>
                            <th>Thời gian đến</th>
                            <th>Thời gian bay</th>
                            <th>Giá</th>
                            <th>Số lượng chỗ ngồi</th>
                            <th>Hạng</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!flights
                            ? <tr>

                                <td></td>
                            </tr>
                            : flights && flights.map((item, index) => (
                                <tr key={item?.id}>
                                    <td>{index + 1}</td>
                                    <td>{item?.number}</td>
                                    <td>{item?.airline.name}</td>
                                    <td>{item?.departureAirport.name}</td>
                                    <td>{item?.arrivalAirport.name}</td>
                                    <td>{new Date(item?.departure_time).toLocaleString()}</td>
                                    <td>{new Date(item?.arrival_time).toLocaleString()}</td>
                                    <td>{calculateFlightDuration(item.departure_time, item.arrival_time)}</td>
                                    <td>{formatPrice(item?.price)}</td>
                                    <td>{item?.seat_capcity}</td>
                                    <td>{item?.class_name}</td>
                                    <td >

                                        <button className='btn btn-outline-warning btn-sm me-2'><PiNotePencilBold
                                            onClick={() => {
                                                dispatch(actions.updateData(item))
                                                setIsUpdate(true)
                                            }}
                                        /> </button>
                                        <button className='btn btn-outline-danger btn-sm' onClick={() => handleDeleteFlight(item.id)}><PiTrashBold /> </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
            {isUpdate && <UpdateFlight setIsUpdate={setIsUpdate} />}
        </div>


    )
}

export default ManageFlight

