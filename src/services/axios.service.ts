import axios from 'axios'

import { useCallback, useEffect, useState } from 'react'

export interface IStandartResponse {
  code: string
  message: string
}

const HOST = 'a421b31cceec.vps.myjino.ru'
const PORT = 443

const API_PREFIX = 'api'

const PROTOCOL = 'https'

export const useAxiosPostTrigger = <T = object>({
  protocol = PROTOCOL,
  api = API_PREFIX,
  route = 'me',
  input = null,
  headers = {
    'Content-Type': 'application/json',
  },
  withCredentials = true,
} = {}) => {
  const [baseUrl, setBaseUrl] = useState('')

  const [serverError, setServerError] = useState<Error | undefined>(undefined)
  const [data, setData] = useState<T | null>()
  const [host] = useState(HOST)
  const [port] =useState(PORT) 

  useEffect(() => {
    const url = `${protocol}://${host}/${api}`
    setBaseUrl(url)
  }, [api, host, port, protocol])

  const handleResponseData = useCallback(
    (data: T) => {
      console.log(data)
      setData(data)
    },
    [setData],
  ) // Dependency on setUser only

  const handleResponseError = useCallback(
    (error: Error) => {
      console.error(error)
      setData(null)
    },
    [setData],
  ) // Dependency on setUser only

  const onSubmit = useCallback(
    (data: any) => {
      const options = {
        headers,
        withCredentials,
      }
      const params = JSON.stringify({ ...data })
      const url = `${baseUrl}/${route}/`
      axios
        .post(url, params, options)
        .then((response:any) => handleResponseData(response.data))
        .catch((error:Error) => setServerError(error))
    },
    [baseUrl, handleResponseData, headers, route, withCredentials],
  )

  const trigger = useCallback(
    (data: any = null) => {
      setData(null)
      data ? onSubmit(data) : onSubmit(input)
    },
    [input, onSubmit],
  )

  useEffect(() => {
    if (serverError) handleResponseError(serverError)
  }, [handleResponseError, serverError])

  return { data, trigger, serverError }
}

export const useAxiosPutTrigger = <T = object>({
  protocol = PROTOCOL,
  api = API_PREFIX,
  route = 'me',
  headers = {
    'Content-Type': 'application/json',
  },
  withCredentials = true,
} = {}) => {
  const [baseUrl, setBaseUrl] = useState('')

  const [serverError, setServerError] = useState<Error | undefined>(undefined)
  const [data, setData] = useState<T | null>()
  const [host] = useState(HOST)
  const [port] =useState(PORT) 


  useEffect(() => {
    const url = `${protocol}://${host}/${api}`
    setBaseUrl(url)
  }, [api, host, port, protocol])

  const handleResponseData = useCallback(
    (data: T) => {
      console.log(data)
      setData(data)
    },
    [setData],
  ) // Dependency on setUser only

  const handleResponseError = useCallback(
    (error: Error) => {
      console.error(error)
      setData(null)
    },
    [setData],
  ) // Dependency on setUser only

  const onSubmit = useCallback(
    (data: any) => {
      const options = {
        headers,
        withCredentials,
      }
      const params = JSON.stringify({ ...data })
      const url = `${baseUrl}/${route}`
      axios
        .put(url, params, options)
        .then((response: any) => handleResponseData(response.data))
        .catch((error:Error) => setServerError(error))
    },
    [baseUrl, handleResponseData, headers, route, withCredentials],
  )

  const trigger = useCallback(
    (data:any) => {
      setData(null)
      onSubmit(data)
    },
    [onSubmit],
  )

  useEffect(() => {
    if (serverError) handleResponseError(serverError)
  }, [handleResponseError, serverError])

  return { data, trigger, serverError }
}

export const useAxiosDeleteTrigger = <T = object>({
  protocol = PROTOCOL,
  api = API_PREFIX,
  route = 'me',
  headers = {
    'Content-Type': 'application/json',
  },
  withCredentials = true,
} = {}) => {
  const [baseUrl, setBaseUrl] = useState('')
  const [host] = useState(HOST)
  const [port] =useState(PORT) 

  const [serverError, setServerError] = useState<Error | undefined>(undefined)
  const [data, setData] = useState<T | null>()

  useEffect(() => {
    const url = `${protocol}://${host}/${api}`
    setBaseUrl(url)
  }, [api, host, port, protocol])

  const handleResponseData = useCallback(
    (data: T) => {
      console.log(data)
      setData(data)
    },
    [setData],
  ) // Dependency on setUser only

  const handleResponseError = useCallback(
    (error: Error) => {
      console.error(error)
      setData(null)
    },
    [setData],
  ) // Dependency on setUser only

  const onSubmit = useCallback(
    (data:any) => {
      const options = {
        data,
        headers,
        withCredentials,
      }
      const url = `${baseUrl}/${route}`
      axios
        .delete(url, options)
        .then((response:any) => handleResponseData(response.data))
        .catch((error:Error) => setServerError(error))
    },
    [baseUrl, handleResponseData, headers, route, withCredentials],
  )

  const trigger = useCallback(
    (data:any) => {
      setData(null)
      onSubmit(data)
    },
    [onSubmit],
  )

  useEffect(() => {
    if (serverError) handleResponseError(serverError)
  }, [handleResponseError, serverError])

  return { data, trigger, serverError }
}

export const useAxiosGetTrigger = <T = object>({
  protocol = PROTOCOL,
  api = API_PREFIX,
  route = 'me',
  headers = {
    'Content-Type': 'application/json',
  },
  withCredentials = true,
} = {}) => {
  const [baseUrl, setBaseUrl] = useState('')
  const [host] = useState(HOST)
  const [port] =useState(PORT) 

  const [serverError, setServerError] = useState<Error | undefined>(undefined)
  const [data, setData] = useState<T | null>()

  useEffect(() => {
    const url = `${protocol}://${host}/${api}`
    setBaseUrl(url)
  }, [api, host, port, protocol])

  const handleResponseData = useCallback(
    (data: T) => {
      console.log(data)
      setData(data)
    },
    [setData],
  ) // Dependency on setUser only

  const handleResponseError = useCallback(
    (error: Error) => {
      console.error(error)
      setData(null)
    },
    [setData],
  ) // Dependency on setUser only

  const onSubmit = useCallback(
    (input: any) => {
      const options = {
        data,
        headers,
        withCredentials,
      }
      let url = `${baseUrl}/${route}`
      if (input) url += `/${input}`
      axios
        .get(url, options)
        .then((response: any) => handleResponseData(response.data))
        .catch((error:Error) => setServerError(error))
    },
    [baseUrl, data, handleResponseData, headers, route, withCredentials],
  )

  const trigger = useCallback(
    (input = null) => {
      setData(null)
      onSubmit(input)
    },
    [onSubmit],
  )

  useEffect(() => {
    if (serverError) handleResponseError(serverError)
  }, [handleResponseError, serverError])

  return { data, trigger, serverError }
}