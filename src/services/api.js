import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://localhost:5001/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default apiClient
