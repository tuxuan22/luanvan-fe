import axios from '../axiosConfig'

export const apiGetCurrent = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/v1/user/get-current',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetUsers = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/v1/users/all',
        })
        resolve(response)
        console.log(response)
    } catch (error) {
        reject(error)
    }
})

export const apiDeleteUser = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'delete',
            url: '/api/v1/users/delete-user',
            params: { id },
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})