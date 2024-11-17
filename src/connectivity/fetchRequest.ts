import { getBaseRequestConfig } from '@/connectivity/getBaseRequestConfig'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function fetchRequest<TResponse>(
  path: string,
  config?: RequestInit,
): Promise<TResponse> {
  const url = `${apiUrl + path}`
  // * Basic setup - can be extended with project specific request config headers

  const baseRequestConfig = getBaseRequestConfig()

  const requestConfig = Object.assign({}, baseRequestConfig, config)

  const response = await fetch(url, requestConfig)

  // * implement API error handling strategy here, error parser, custom typed errors, etc...

  if (!response.ok) {
    throw new Error('Something went wrong')
  }

  const data = await response.json()

  return data
}
