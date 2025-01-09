export const fetchInstance = {
  baseUrl: process.env.API_URL,
  defaultHeaders: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer YOUR_ACCESS_TOKEN`,
  },

  async request(url: string, method: string, body?: string) {
    const config = {
      method,
      headers: {
        ...this.defaultHeaders,
      },
      body: body ? JSON.stringify(body) : undefined,
    }

    try {
      const response = await fetch(this.baseUrl + url, config)
      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Fetch failed')
      }
      return await response.json()
    } catch (error) {
      console.error(`Fetch Error [${method} ${url}]:`, error)
      throw error
    }
  },

  get(endPoint: string) {
    return this.request(endPoint, 'GET')
  },

  post(endPoint: string, body: string) {
    return this.request(endPoint, 'POST', body)
  },

  put(endPoint: string, body: string) {
    return this.request(endPoint, 'PUT', body)
  },

  delete(endPoint: string) {
    return this.request(endPoint, 'DELETE')
  },
}
