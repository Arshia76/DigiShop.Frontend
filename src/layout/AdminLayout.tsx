import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

const AdminLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <section className="p-4 flex-1">
        {/* sidebar */}
        <Outlet />
      </section>
    </div>
  )
}

export { AdminLayout }
