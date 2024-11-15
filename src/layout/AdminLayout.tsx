import { Outlet } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';

const AdminLayout = () => {
  return (
    <section className='flex flex-1 h-screen'>
      <AdminSidebar />
      <div className='p-4 flex-1'>
        <Outlet />
      </div>
    </section>
  );
};

export { AdminLayout };
