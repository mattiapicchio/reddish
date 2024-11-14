import { getBaseRequestConfig } from './getBaseRequestConfig'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function fetchRequest<TResponse>(
  path: string,
  config?: RequestInit,
): Promise<TResponse> {
  const url = `${apiUrl + path}`
  // Basic setup - can be extended with project specific request config headers and error handling

  const baseRequestConfig = getBaseRequestConfig()

  const requestConfig = Object.assign({}, baseRequestConfig, config)

  const response = await fetch(url, requestConfig)

  if (!response.ok) {
    // TODO: add API error handling
    throw new Error('Something went wrong')
  }

  const data = await response.json()

  return data
}
