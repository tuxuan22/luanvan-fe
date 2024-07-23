import React from 'react'
import logo from '../../assets/logo.png'

const Footer = () =>
    <footer className='page-footer font-small blue pt-4 text-white-50' style={{ backgroundColor: '#1d2939', minHeight: '100%' }}>
        <div className='container-fluid text-center text-md-start'>
            <div className='row'>
                <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                    <img className='mb-4' src={logo} alt='logo' style={{ height: '60px' }} />
                    <p>Chúng tôi cung cấp dịch vụ đặt vé máy bay trực tuyến nhanh chóng và tiện lợi.</p>
                </div>

                {/* <hr className='clearfix w-100 d-md-none pb-0' /> */}

                <div className='col-md-2 ol-lg-2 col-xl-2 mx-auto mb-4'>
                    <h5 className='text-uppercase fw-bold mb-4'>về chúng tôi</h5>

                    <p><a className='text-decoration-none text-reset' href='#!'>Link 1</a></p>
                    <p><a className='text-decoration-none text-reset' href='#!'>Link 2</a></p>
                    <p><a className='text-decoration-none text-reset' href='#!'>Link 3</a></p>
                    <p><a className='text-decoration-none text-reset' href='#!'>Link </a></p>
                </div>

                <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                    <h5 className='text-uppercase fw-bold mb-4'>hỗ trợ</h5>
                    <p><a className='text-decoration-none text-reset' href='#!'>Link 1</a></p>
                    <p><a className='text-decoration-none text-reset' href='#!'>Link 2</a></p>
                    <p><a className='text-decoration-none text-reset' href='#!'>Link 3</a></p>
                    <p><a className='text-decoration-none text-reset' href='#!'>Link </a></p>

                </div>

                <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                    <h5 className='text-uppercase fw-bold mb-4'>liên hệ</h5>
                    <p>180 Đ. Cao Lỗ Phường 4, Quận 8, Hồ Chí Minh</p>
                    <p>dh52006131@student.stu.edu.vn</p>
                    <p>+84 965 999 38</p>


                </div>
            </div>
        </div>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>© 2024 Copyright:
            <a className='text-decoration-none text-reset fw-bold' href='ss'> FlyLV.com</a>
        </div>

    </footer>

export default Footer