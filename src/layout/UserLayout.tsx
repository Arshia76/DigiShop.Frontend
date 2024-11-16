import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
    </>
  )
}

export { UserLayout }
