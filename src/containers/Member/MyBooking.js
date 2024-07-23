import React from 'react'

const MyBooking = () => {
    return (
        <div className='ms-5'>
            <h4 className='fw-bold'>Đang đặt vé</h4>
            <div className=' shadow rounded' >
                <div className='container p-4'>
                    <p>Tan Son Nhat -- Ha Noi</p>
                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-primary'>Xem chi tiết</button>
                    </div>
                </div>

            </div>
            <h4 className='fw-bold'>Đã thanh toán</h4>
        </div>

    )
}

export default MyBooking
