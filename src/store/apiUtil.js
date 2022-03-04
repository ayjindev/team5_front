import axios from 'axios'

const api = axios.create()

// request(요청)시 아래의 로직이 인터셉트 된다.
api.interceptors.request.use(
  async request => {
    // header.token 전송
    const token = window.localStorage.getItem('accessToken')
    request.data.accesstoken = token

    return request
  },
  async error => {
    return Promise.reject(error)
  }
)

// response(응답)시 아래의 로직이 인터셉트 된다.
api.interceptors.response.use(
  async response => {
    // data.token 자동 갱신
    const token = response.data.accessToken // token을 data에서 받은 경우
    if (token) {
      window.localStorage.setItem('accessToken', token)
    }

    return response
  },
  async error => {
    return Promise.reject(error)
  }
)

export default api
