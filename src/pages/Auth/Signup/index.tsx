import { useEffect } from 'react'
import { useAuthContext } from '@/features/auth/context'
import { Routes } from '@/lib/routes'
import { useNavigate } from 'react-router-dom'
import { SignupForm } from '@/features/auth/components'

const SignupPage = () => {
  const { isAuthenticated } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate(Routes.HOME)
  }, [isAuthenticated])
  return <SignupForm />
}

export { SignupPage }
