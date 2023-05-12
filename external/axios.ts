import axios, { AxiosError } from 'axios'

export const DEV = process.env.NODE_ENV

function httpErrorHandler(error: AxiosError) {
  if (error === null) throw new Error('Unrecoverable error!! Error is null!')

  if (axios.isAxiosError(error)) {
    const response = error?.response
    const request = error?.request

    if (error.code === 'ERR_NETWORK') {
      console.log('connection problems..')
    } else if (error.code === 'ERR_CANCELED') {
      console.log('connection canceled..')
    }

    if (response) {
      const statusCode = response?.status
      if (statusCode === 404) {
        console.log('The requested resource does not exist or has been deleted')
      } else if (statusCode === 401) {
        console.log('Please login to access this resource')
      }
    } else if (request) {
      console.log('Request no proccess', request)
    }
  }

  console.log('Error message', error.message)
  return error.response
}

function createAxios() {
    const instance = axios.create({
      withCredentials: false,
    })

    instance.interceptors.response.use((response) => response, httpErrorHandler)
    return instance
}

const axiosServ = createAxios()

export { axiosServ }