import axiosConfig from '../axiosConfig'

export const apiGetAirlines = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/airline/all',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
