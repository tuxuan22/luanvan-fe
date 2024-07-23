import axiosConfig from '../axiosConfig'

export const apiGetFlights = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/flight/all',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apisearchFlights = (query) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/flight/search',
            params: query
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiDeleteFlight = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'delete',
            url: '/api/v1/flight/delete-flight',
            params: { id },
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiCreateFlight = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/flight/create-flight',
            data: payload,
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiUpdateFlight = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'put',
            url: '/api/v1/flight/update-flight',
            data: payload,
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
