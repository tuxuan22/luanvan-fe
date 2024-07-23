import React from 'react'
import { CreateFlight } from '../../containers/Admin'

const UpdateFlight = ({ setIsUpdate }) => {
    return (
        <div className='position-fixed top-0 start-0 end-0 bottom-0 d-flex justify-content-center' style={{ background: 'rgba(0, 0, 0, 0.7)' }}
            onClick={e => {
                e.stopPropagation()
                setIsUpdate(false)
            }}>
            <div className='bg-white w-75 my-auto'
                style={{ overflowY: 'auto', maxHeight: '75vh' }}
                onClick={e => {
                    e.stopPropagation()
                }}>
                <CreateFlight isUpdate />
            </div>
        </div>
    )
}

export default UpdateFlight
