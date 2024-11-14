import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <section className="p-4">
        <Outlet />
      </section>
    </>
  )
}

export { UserLayout }
