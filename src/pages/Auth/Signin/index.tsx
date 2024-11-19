import { useEffect } from 'react'
import { useAuth } from '@/features/auth/context'
import { useNavigate } from 'react-router-dom'
import { SigninForm } from '@/features/auth/components'
import { Routes } from '@/lib/routes'

const SigninPage = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate(Routes.HOME)
  }, [isAuthenticated])

  return <SigninForm />
}

export { SigninPage }
