import React, { useState, useEffect } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PasswordInput } from '../../components'
import { useLocation, useNavigate } from 'react-router-dom'
import * as actions from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import validate from '../../utils/Common/validateField'

const Login = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoggedIn } = useSelector(state => state.auth)
    const [isRegister, setIsRegister] = useState(location.state?.flag)
    const [invalidFields, setInvalidFields] = useState([])
    const [payload, setPayload] = useState({
        email: '',
        phone: '',
        password: '',
        name: '',
        confirmPassword: '',
    })

    useEffect(() => {
        setIsRegister(location.state?.flag)
    }, [location.state?.flag])

    useEffect(() => {
        isLoggedIn && navigate('/')
    }, [isLoggedIn, navigate])




    const handleSubmit = async (e) => {
        e.preventDefault()
        let finalPayload = isRegister ? payload : {
            email: payload.email,
            password: payload.password,
        }
        let invalids = validate(finalPayload, setInvalidFields)
        if (invalids === 0) try {
            isRegister ? await dispatch(actions.register(payload)) : await dispatch(actions.login(payload))
            toast.success(isRegister ? 'Đăng ký thành công!' : 'Đăng nhập thành công!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })
        } catch (error) {
            toast.error(error.message, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })
        }
    }


    return (
        <Container style={{ maxWidth: '700px' }} className='w-50 shadow p-5 mt-5 mb-5 bg-body rounded'>

            <h3 className='fw-bolder'>{isRegister ? 'ĐĂNG KÝ' : 'ĐĂNG NHẬP'}</h3>
            <Form>
                {isRegister && (
                    <Form.Group className='mb-3'>
                        <Form.Label>Họ tên</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Nhập họ tên của bạn'
                            value={payload.name}
                            onChange={(e) =>
                                setPayload((prev) => ({ ...prev, name: e.target.value }))
                            }
                            onFocus={() => setInvalidFields([])}
                        />
                        {invalidFields.some(field => field.name === 'name') && (
                            <Form.Text className='text-danger'>
                                {invalidFields.find(field => field.name === 'name').message}
                            </Form.Text>
                        )}
                    </Form.Group>
                )}

                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Nhập email của bạn'
                        value={payload.email}
                        onChange={(e) =>
                            setPayload((prev) => ({ ...prev, email: e.target.value }))
                        }
                        onFocus={() => setInvalidFields([])}
                    />
                    {invalidFields.some(field => field.name === 'email') && (
                        <Form.Text className='text-danger'>
                            {invalidFields.find(field => field.name === 'email').message}
                        </Form.Text>
                    )}
                </Form.Group>

                {isRegister && (
                    <Form.Group className='mb-3'>
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control
                            type='phone'
                            placeholder='Nhập số điện thoại'
                            value={payload.phone}
                            onChange={(e) =>
                                setPayload((prev) => ({ ...prev, phone: e.target.value }))
                            }
                            onFocus={() => setInvalidFields([])}
                        />
                        {invalidFields.some(field => field.name === 'phone') && (
                            <Form.Text className='text-danger'>
                                {invalidFields.find(field => field.name === 'phone').message}
                            </Form.Text>
                        )}
                    </Form.Group>
                )}

                <PasswordInput
                    label='Mật khẩu'
                    placeholder='Nhập mật khẩu'
                    value={payload.password}
                    onChange={(e) =>
                        setPayload((prev) => ({ ...prev, password: e.target.value }))
                    }
                    onFocus={() => setInvalidFields([])}
                    invalidFields={invalidFields}
                    name='password'
                />
                {isRegister && (
                    <PasswordInput
                        label='Xác nhận mật khẩu'
                        placeholder='Nhập lại mật khẩu'
                        value={payload.confirmPassword}
                        onChange={(e) =>
                            setPayload((prev) => ({ ...prev, confirmPassword: e.target.value }))
                        }
                        onFocus={() => setInvalidFields([])}
                        invalidFields={invalidFields}
                        name='confirmPassword'
                    />
                )}

                <div className='d-grid gap-2 mb-3'>
                    <Button variant='primary' type='submit' onClick={handleSubmit}>
                        {isRegister ? 'Đăng ký' : 'Đăng nhập'}
                    </Button>
                </div>

                <div className='mb-3 d-flex justify-content-between align-items-center'>
                    {isRegister ? (
                        <div>
                            Bạn đã có tài khoản?
                            <span
                                onClick={() => {
                                    setIsRegister(false)
                                    setPayload({
                                        email: '',
                                        phone: '',
                                        password: '',
                                        name: '',
                                        confirmPassword: '',
                                    })
                                }}
                                className='text-primary'
                                style={{ cursor: 'pointer' }}
                            >
                                {' '}
                                Đăng nhập ngay
                            </span>
                        </div>
                    ) : (
                        <>
                            <Link
                                to='/forgot-password'
                                className='text-decoration-none'
                            >
                                Quên mật khẩu?
                            </Link>
                            <span
                                onClick={() => {
                                    setIsRegister(true)
                                    setPayload({
                                        email: '',
                                        phone: '',
                                        password: '',
                                        name: '',
                                        confirmPassword: '',
                                    })
                                }}
                                className='text-primary hover:text-danger'
                                style={{ cursor: 'pointer' }}
                            >
                                Đăng ký tài khoản
                            </span>
                        </>
                    )}
                </div>
            </Form>
        </Container>

    )
}

export default Login