import { messages } from '@/utils'
import axios, { AxiosRequestConfig } from 'axios'
import { useRouter } from 'next/navigation'
import { NextResponse } from 'next/server'

interface AuthFetchProps {
  endpoint: string
  redirectRoute?: string
  formData: any
  options?: AxiosRequestConfig<any>
}

export function useAuthFetch () {
  const router = useRouter()

  const authRouter = async ({
    endpoint,
    formData,
    redirectRoute,
    options
  }: AuthFetchProps) => {
    try {
      const { data } = await axios.post(
        `/api/${endpoint}`,
        formData,
        options
      )

      if (redirectRoute) router.push(redirectRoute)
    } catch (error: any) {
      return NextResponse.json(
        { message: messages.error.default, error },
        { status: 500 }
      );
    }
  }

  return authRouter
}