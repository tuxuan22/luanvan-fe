import React, { useCallback } from 'react'
import logo from '../../assets/logo.png'
import { Container, Navbar, Nav, Button, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { path } from '../../utils/constant'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions'
import { NavLink } from '../../components'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { isLoggedIn } = useSelector(state => state.auth)
    const { currentData } = useSelector(state => state.user)
    const toLogin = useCallback((flag) => {
        navigate(path.LOGIN, { state: { flag } })
    }, [navigate])

    return (
        <Navbar fixed='top' expand='lg' className='bg-white border-bottom'>
            <Container>
                <Navbar.Brand href='/'><img src={logo} alt='logo' style={{ height: '30px' }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <NavLink href='/' activePath='/'>Trang chủ</NavLink>
                        <NavLink href='/promotion' activePath='/promotion'>Khuyến mãi</NavLink>
                        <NavLink href='/contact' activePath='/contact'>Liên hệ</NavLink>
                        {isLoggedIn && <NavLink href='/member/my-booking' activePath='/member/my-booking'>Đặt vé của tôi</NavLink>}
                    </Nav>
                </Navbar.Collapse>

                <div className='d-flex align-items-center gap-2'>
                    {!isLoggedIn &&
                        <>
                            <Button variant='outline-primary' onClick={() => toLogin(false)} >Đăng nhập </Button>
                            <Button variant='primary' onClick={() => toLogin(true)}>Đăng ký</Button>
                        </>
                    }
                    {isLoggedIn &&
                        <>
                            <NavDropdown title={currentData?.name} id='basic-nav-dropdown' className='text-primary font-weight-bold'>
                                <NavDropdown.Item href={currentData?.role_id === 1 ? `/${path.ADMIN}/${path.DASHBOARD}` : `/${path.MEMBER}/${path.PERSONAL}`}> {currentData?.role_id === 1 ? 'Quản lý' : 'Quản lý tài khoản'}</NavDropdown.Item>
                                {currentData.role_id === 1 ? '' :
                                    <div>
                                        <NavDropdown.Item >Ví của tôi</NavDropdown.Item>
                                        <NavDropdown.Item >Đặt vé của tôi</NavDropdown.Item>
                                        <NavDropdown.Item >Thông tin hành khách</NavDropdown.Item>
                                        <NavDropdown.Item >Khuyến mãi</NavDropdown.Item>
                                    </div>
                                }
                                <NavDropdown.Item onClick={() => dispatch(actions.logout())}>
                                    Đăng xuất
                                </NavDropdown.Item>
                            </NavDropdown>

                        </>
                    }
                </div>
            </Container>
        </Navbar>
    )
}

export default Header