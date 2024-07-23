import React, { Fragment, useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import { adminSidebar } from '../../utils/constant'
import { Nav, Collapse } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { FaPowerOff } from 'react-icons/fa6'


const AdminSidebar = () => {
    const location = useLocation();
    const [actived, setActived] = useState({});

    useEffect(() => {
        const currentActived = {};
        adminSidebar.forEach(el => {
            if (el.type === 'PARENT') {
                el.submenu.forEach(item => {
                    if (location.pathname.includes(item.path)) {
                        currentActived[el.id] = true;
                    }
                });
            }
        });
        setActived(currentActived);
    }, [location]);

    const handleToggle = (id) => {
        setActived(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className=''>
            <div className='d-flex justify-content-center p-4' >
                <a href='/'>   <img src={logo} alt='logo' style={{ height: '50px' }}></img></a>
            </div>
            <div>
                {adminSidebar.map(el => (
                    <Fragment key={el.id}>
                        {el.type === 'SINGLE' && (
                            <Nav variant='pills' className='flex-column'>
                                <Nav.Item className='fs-5 '>
                                    <Nav.Link
                                        href={el.path}
                                        className={`nav-link text-white-50 ${location.pathname === el.path ? 'active bg-secondary' : ''}`}
                                    >
                                        <span >{el.icon}</span>
                                        <span className='ms-2'>{el.text}</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        )}
                        {el.type === 'PARENT' && (
                            <div>
                                <Nav variant='pills' className='flex-column'>
                                    <Nav.Item className='fs-5'>
                                        <Nav.Link
                                            href={el.path}
                                            className={`nav-link text-white-50 ${location.pathname.includes(el.path) ? 'active bg-secondary' : ''}`}
                                            onClick={() => handleToggle(el.id)}
                                        >
                                            <span>{el.icon}</span>
                                            <span className='ms-2'>{el.text}</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Collapse in={actived[el.id]}>
                                    <div>
                                        {el.submenu.map(item => (
                                            <Nav key={item.id} variant='pills' className='flex-column'>
                                                <Nav.Item className='fs-5'>
                                                    <Nav.Link
                                                        href={item.path}
                                                        className={`nav-link ps-5 text-white-50 ${location.pathname === item.path ? 'active bg-secondary' : ''}`}
                                                    >
                                                        {item.text}
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        ))}
                                    </div>
                                </Collapse>
                            </div>
                        )}
                    </Fragment>
                ))}
                <Nav >
                    <Nav.Item className='fs-5'>
                        <Nav.Link className='nav-link text-white-50' >
                            <span><FaPowerOff /></span>
                            <span className='ms-2'>Đăng xuất</span>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    );
};

export default AdminSidebar;
