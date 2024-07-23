import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { formatPrice } from '../../utils/Common/formatPrice'
const Dashboard = () => {
    const [statistics, setStatistics] = useState([])

    useEffect(() => {

        const statisticsData = [
            { date: '2023-10-01', revenue: 876755000 },
            { date: '2023-11-01', revenue: 546544600 },
            { date: '2023-12-01', revenue: 546450000 },

            { date: '2024-01-01', revenue: 434594500 },
            { date: '2024-02-01', revenue: 324233480 },
            { date: '2024-03-01', revenue: 456886870 },
            { date: '2024-04-01', revenue: 456544640 },
            { date: '2024-05-01', revenue: 345450400 },
        ]

        setStatistics(statisticsData)
    }, [])

    return (
        <div className='p-3'>
            <h2 className='fw-bold text-info'>Dashboard</h2>
            <div className='my-5'>

                <div className='d-flex'>
                    <div className='col-3 p-3 mx-3' style={{ border: '1px solid #ccc', width: '350px' }}>
                        <h4 className='fw-bold '>Doanh thu</h4>
                        <p>{formatPrice('123198312313')}</p>
                    </div>
                    <div className='col-3 p-3 mx-3' style={{ border: '1px solid #ccc', width: '350px' }}>
                        <h4 className='fw-bold'>Số lượng đặt vé</h4>
                        <p>21311313</p>
                    </div>
                    <div className='col-3 p-3 mx-3' style={{ border: '1px solid #ccc', width: '350px' }}>
                        <h4 className='fw-bold '>Số chuyến bay</h4>
                        <p>2314</p>
                    </div>
                    <div className='col-3 p-3 mx-3' style={{ border: '1px solid #ccc', width: '350px' }}>
                        <h4 className='fw-bold  '>Số lượng hoàn vé</h4>
                        <p>12213</p>
                    </div>
                </div>
            </div>
            <LineChart width={1100} height={300} data={statistics} className='mx-auto my-5'>
                <XAxis dataKey='date' />
                <YAxis />
                <CartesianGrid strokeDasharray='3 3' />
                <Tooltip />
                <Legend />
                <Line type='monotone' dataKey='revenue' stroke='#8884d8' />
            </LineChart>
        </div >
    )
}

export default Dashboard

