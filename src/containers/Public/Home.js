import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import * as actions from '../../store/actions'

import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(state => state.auth)


    useEffect(() => {
        setTimeout(() => {
            isLoggedIn && dispatch(actions.getCurrent())

        }, 100)
    }, [isLoggedIn])
    return (
        <>
            <div style={{ backgroundColor: '#f7f9fa', minHeight: '100vh' }}>
                <Header />
                <div className='pt-5'>
                    <Outlet />

                </div>


            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default Home