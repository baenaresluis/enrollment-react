import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:8080',
})

http.interceptors.request.use(
    (config) => {
        const token = 'eyJhbGciOiJIUzUxMiJ9.eyJ0ZXN0IjoicHJvYmFuZG8uLi4uLi4uIiwicm9sZXMiOlsiQURNSU4iXSwic3ViIjoibWl0b2NvZGUiLCJpYXQiOjE2MDY3ODQwMDcsImV4cCI6MTYwNjc4NzYwN30.EbWBWM6J_8Yt6tzcN8rvNsu69i6dkzF3nC22aaIrXLk92QHRn2h6h6l5kQML51DQWOMiHQXCh6crG8LbxuVNxw'
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