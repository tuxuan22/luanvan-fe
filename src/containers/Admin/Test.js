import React from 'react'

const Test = () => {
    return (
        <div className='p-3'>

            <div>
                <h2 className='fw-bold  text-info'>Test</h2>
                <div className='mt-3 mx-1'>
                    <table className='table table-striped table-bordered table-hover'>
                        <thead className='table-info'>
                            <tr>
                                <th>ID</th>
                                <th>Tên</th>
                                <th>Age</th>
                                <th>Address</th>
                                <th>Phone</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* {users && users.map((item, index) => ( */}
                            {/* <tr key={item?.id}>
                                <td>{index + 1}</td>
                                <td>{item?.name}</td>
                                <td>{item?.email}</td>
                                <td>{item?.role_id}</td>


                            </tr> */}
                            {/* ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Test
