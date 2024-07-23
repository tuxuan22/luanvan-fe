import React, { Fragment, useState, useEffect } from 'react'
import { memberSidebar } from '../../utils/constant'
import { Nav } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions'
import { FaPowerOff } from 'react-icons/fa6'



const MemberSidebar = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const [actived, setActived] = useState({})

    useEffect(() => {
        const currentActived = {};
        memberSidebar.forEach(el => {
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
        <div className='pb-2'>
            <div className='px-4 py-4 border-bottom'>
                <p>TuXuan</p>
                <p>tu123@gmail.com</p>
            </div>
            <div>

                {memberSidebar.map(el => (
                    <Fragment key={el.id}>
                        {el.type === 'SINGLE' && (
                            <Nav variant='pills' className='flex-column'>
                                <Nav.Item className='fs-5'>

                                    <Nav.Link
                                        href={el.path}
                                        className={`nav-link text-black-50 ${location.pathname === el.path ? 'active bg-info' : ''}`}
                                    >
                                        <span >{el.icon}</span>
                                        <span className='ms-2'>{el.text}</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        )}
                    </Fragment>
                ))}
                <Nav >
                    <Nav.Item className='fs-5'>
                        <Nav.Link className='nav-link text-black-50' onClick={() => dispatch(actions.logout())}>
                            <span><FaPowerOff /></span>
                            <span className='ms-2'>Đăng xuất</span>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    );
};

export default MemberSidebar;
