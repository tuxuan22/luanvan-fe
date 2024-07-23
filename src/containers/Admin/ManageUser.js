import React, { useEffect, useState } from 'react'
import icons from '../../utils/icons'
import * as actions from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { apiDeleteUser } from '../../services/user'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

const ManageUser = () => {
    const dispatch = useDispatch()
    const { PiTrashBold, PiNotePencilBold } = icons
    const { users } = useSelector(state => state.user)
    console.log(users)

    const [updateData, setUpdateData] = useState(false)

    useEffect(() => {
        dispatch(actions.getUsers())

    }, [dispatch, updateData])

    const handleDeleteUser = async (id) => {
        const result = await Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa?',
            text: 'Dữ liệu sẽ bị xóa vĩnh viễn!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Hủy',
        })
        if (result.isConfirmed) {
            const response = await apiDeleteUser(id)
            if (response?.data.err === 0) {
                setUpdateData(prev => !prev)
                toast.success('Người dùng đã được xóa thành công.', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })

            } else {
                toast.error('Xóa người dùng thất bại', {
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
        <div className='p-3'>

            <div>
                <h2 className='fw-bold  text-info'>Quản lý người dùng</h2>
                <div className='mt-3 mx-1'>
                    <table className='table table-striped table-bordered table-hover'>
                        <thead className='table-info'>
                            <tr>
                                <th>ID</th>
                                <th>Tên</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map((item, index) => (
                                <tr key={item?.id}>
                                    <td>{index + 1}</td>
                                    <td>{item?.name}</td>
                                    <td>{item?.email}</td>
                                    <td>{item?.role_id}</td>

                                    <td >

                                        <button className='btn btn-outline-warning btn-sm me-2'><PiNotePencilBold /> </button>
                                        <button className='btn btn-outline-danger btn-sm' onClick={() => handleDeleteUser(item.id)}><PiTrashBold /> </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageUser

