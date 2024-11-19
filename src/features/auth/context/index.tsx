import { createContext, useContext, useEffect, useState } from 'react'
import { useSigninMutation, useSignupMutation } from '../service/query'
import { SigninType, SignupType } from '../schema'
import { useCookies } from 'react-cookie'

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
  logout: () => void
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
  logout: () => null,
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
        console.log(error)
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
        console.log(error)
      },
    })
  }

  const logout = () => {
    setUser({
      access_token: '',
      id: '',
      role: '',
    })
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
    <AuthContext.Provider value={{ isAuthenticated, user, signin, signup, logout, isLoadingSignin, isLoadingSignup }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line
export const useAuth = () => useContext(AuthContext)