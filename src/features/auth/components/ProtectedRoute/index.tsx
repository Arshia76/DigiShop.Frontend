import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../../context'
import { Routes } from '@/lib/routes'

const ProtectedRoute = ({
  children,
  roles,
}: {
  children: React.ReactNode
  roles: string[]
}) => {
  const { isAuthenticated, user } = useAuthContext()

  if (!isAuthenticated) {
    return <Navigate to={Routes.SIGNIN} />
  }

  if (roles && user.role !== 'Admin' && !roles.includes(user.role)) {
    return <Navigate to={Routes.HOME} />
  }
  return children
}

export default ProtectedRoute
