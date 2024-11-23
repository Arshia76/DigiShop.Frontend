import { createContext, useContext, useEffect, useState } from 'react'
import { useSigninMutation, useSignupMutation } from '../service/query'
import { SigninType, SignupType } from '../schema'
import { useCookies } from 'react-cookie'
import { Alert } from '@/components/ui'

const AuthContext = createContext<{
  isAuthenticated: boolean
  user: {
    access_token: string
    id: string
    role: string
  }
  isLoadingSignin: boolean
  isLoadingSignup: boolean
  signin: (userData: SigninType) => void
  signup: (userData: SignupType) => void
  signout: () => void
}>({
  isAuthenticated: false,
  user: {
    access_token: '',
    id: '',
    role: '',
  },
  isLoadingSignin: false,
  isLoadingSignup: false,
  signin: () => null,
  signup: () => null,
  signout: () => null,
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookies, setCookie] = useCookies(['user'])
  const [user, setUser] = useState<{
    access_token: string
    id: string
    role: string
  }>({
    access_token: '',
    id: '',
    role: '',
  })

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const { mutate: signinMutation, isLoading: isLoadingSignin } = useSigninMutation()
  const { mutate: signupMutation, isLoading: isLoadingSignup } = useSignupMutation()

  const signin = (userData: SigninType) => {
    signinMutation(userData, {
      onSuccess(data) {
        setIsAuthenticated(true)
        setUser(data)
        setCookie('user', data)
      },
      onError(error) {
        Alert({ type: 'error', message: error?.message })
      },
    })
  }

  const signup = (userData: SignupType) => {
    signupMutation(userData, {
      onSuccess(data) {
        setIsAuthenticated(true)
        setUser(data)
        setCookie('user', data)
      },
      onError(error) {
        Alert({ type: 'error', message: error?.message })
      },
    })
  }

  const signout = () => {
    setUser({
      access_token: '',
      id: '',
      role: '',
    })
    setIsAuthenticated(false)
    setCookie('user', null)
  }

  useEffect(() => {
    if (cookies.user) {
      setUser(cookies.user)
      setIsAuthenticated(true)
    } else {
      setUser({
        access_token: '',
        id: '',
        role: '',
      })
      setIsAuthenticated(false)
    }
  }, [cookies.user])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        signin,
        signup,
        signout,
        isLoadingSignin,
        isLoadingSignup,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line
export const useAuthContext = () => useContext(AuthContext)
