import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
})

// Thêm một bộ đón chặn request
instance.interceptors.request.use(function (config) {
    // Làm gì đó trước khi request dược gửi đi
    // gan token vao header 

    let token = window.localStorage.getItem('persist:auth') && JSON.parse(window.localStorage.getItem('persist:auth'))?.token?.slice(1, -1)
    config.headers = {
        authorization: token ? `Bearer ${token}` : null
    }

    return config
}, function (error) {

    return Promise.reject(error)
})

// Thêm một bộ đón chặn response
instance.interceptors.response.use(function (response) {
    // refresh token 
    return response
}, function (error) {

    return Promise.reject(error)
})

export default instance