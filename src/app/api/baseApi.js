import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:8080',
})

http.interceptors.request.use(
    (config) => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMiLCJuYW1lIjoiYmFlbmEifQ.A5QkYQQmwZQm17Jxa2Iwpaw-haH4UhvS6PbpVSCLPHk'
        if (token) config.headers.Authorization = `Bearer ${token}`
        return config;
    }, 
    (error ) => Promise.reject(error)
)

const responseBody = (response) => response.data

const baseApi = {
    get: (url) => http.get(url).then( responseBody),
    post: (url, body) => http.post(url, body).then(responseBody),
    put: (url, body) => http.put(url, body).then(responseBody),
    delete: (url) => http.delete(url).then(responseBody),
}

export default baseApi