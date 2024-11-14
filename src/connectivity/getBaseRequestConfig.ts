export interface GetBaseRequestConfig {
  accessToken?: string
  contentType?: string
}

export function getBaseRequestConfig({ accessToken, contentType }: GetBaseRequestConfig = {}) {
  return {
    method: 'GET',
    headers: {
      'Content-Type': contentType || 'application/json',
      ...(accessToken ? { 'Access-Token': `${accessToken}` } : {}),
    },
  }
}
