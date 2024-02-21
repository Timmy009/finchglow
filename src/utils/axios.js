import axios from 'axios'

const apiInstance = axios.create({
    baseURL: 'https://api.travelden.com/api',
    timeout:5000,

    headers: {
        'Content-Type':'application/json',
        Accept: 'application/json',
    }
})

export default apiInstance