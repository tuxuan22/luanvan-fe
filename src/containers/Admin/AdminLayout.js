import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { path } from '../../utils/constant'
import * as actions from '../../store/actions'
import { AdminSidebar } from '../../components'

const AdminLayout = () => {

    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(state => state.auth)
    const { currentData } = useSelector(state => state.user)
    useEffect(() => {

        isLoggedIn && dispatch(actions.getCurrent())

    }, [isLoggedIn, dispatch])
    if (!isLoggedIn || !currentData || currentData.role_id === 2)

        return <Navigate to={`/${path.LOGIN}`} replace={true} />

    return (
        <div>
            <div className='container-fluid ps-0 pe-0'>
                <div className='row position-relative' >
                    <div className='col-md-2 min-vh-100 position-fixed pe-0' style={{ backgroundColor: '#1d2939' }}>

                        <AdminSidebar />
                    </div>
                    <div className='col-md-2 '>

                    </div>
                    <div className='col min-vh-100'>
                        <Outlet />
                    </div>
                </div>


            </div>
            {/* <div>
                <Footer />


            </div> */}
        </div>


    )
}

export default AdminLayout