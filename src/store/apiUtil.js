import axios from 'axios'

const api = axios.create()

// request(요청)시 아래의 로직이 인터셉트 된다.
api.interceptors.request.use(
  async request => {
    // header.token 전송
    const token = window.localStorage.getItem('accessToken')
    // console.log('accessToken', request)
    // request.data.accesstoken = token
    request.headers.head.accesstoken = token
    // console.log('accessToken', request)

    return request
  },
  async error => {
    return Promise.reject(error)
  }
)

// response(응답)시 아래의 로직이 인터셉트 된다.
api.interceptors.response.use(
  async response => {
    // console.log('response', response)
    // data.token 자동 갱신
    const token = response.data.accessToken // token을 data에서 받은 경우
    if (token) {
      // console.log('apiUtil Token', response)
      window.localStorage.setItem('accessToken', token)
    } else if (typeof token == 'undefined') {
      // console.log('apiutil', response)
      return response
    }
    return response
  },
  async error => {
    return Promise.reject(error)
  }
)

export default api
