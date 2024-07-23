import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Public/Header'
import Footer from '../Public/Footer'

import * as actions from '../../store/actions'
import { MemberSidebar } from '../../components'


import { path } from '../../utils/constant'

const MemberLayout = () => {
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(state => state.auth)
    const { currentData } = useSelector(state => state.user)
    useEffect(() => {

        isLoggedIn && dispatch(actions.getCurrent())

    }, [isLoggedIn, dispatch])
    if (!isLoggedIn || !currentData || currentData.role_id === 1) return <Navigate to={`/${path.LOGIN}`} replace={true} />
    return (
        <>
            <div style={{ backgroundColor: '#f7f9fa', minHeight: '100vh' }}>
                <Header />

                <div className='container my-5 pt-5'>
                    <div className='row' >
                        <div className='col-md-3 ps-0 pe-0 shadow rounded' >

                            <MemberSidebar />

                        </div>

                        <div className='col  '>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            <div> <Footer /></div>
        </>
    )
}

export default MemberLayout
