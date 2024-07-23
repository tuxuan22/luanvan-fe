import axiosConfig from '../axiosConfig'

export const apiGetAirports = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/airport/all',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
