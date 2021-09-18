import axios from 'axios';
import { stringifyUrl } from 'query-string';
import type { StringifiableRecord } from 'query-string'


const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_GATEWAY,
  headers: {
    "Content-Type": "application/json"
  }
})

axiosClient.interceptors.response.use(
  (response) => {
    if (response.data.status === 'success') {
      return response.data.data
    }

    return response.data
  },
  (error) => Promise.reject(error?.response?.data)
)

export const getRequest = <ResponseType, ParamType>(url: string, param?: ParamType) => {
  const endpoint = stringifyUrl({
    url,
    query: param as unknown as StringifiableRecord
  })

  return axiosClient.get<ResponseType>(endpoint)
}
