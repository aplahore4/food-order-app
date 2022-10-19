import { useState, useCallback } from 'react'

const useHttp = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setIsError] = useState(null)

  const sendRequest = useCallback(
    async (requestConfig, callbackSuccess, callbackError) => {
      setIsLoading(true)
      setIsError(null)
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? requestConfig.body : null,
        })

        if (!response.ok) {
          throw new Error('Request failed!')
        }

        const data = await response.json()
        callbackSuccess(data)
      } catch (err) {
        const errorMessage = err.message || 'Something went wrong!'
        setIsError(errorMessage)
        callbackError(errorMessage)
      }

      setIsLoading(false)
    },
    []
  )

  return { isLoading, error, sendRequest }
}

export default useHttp
