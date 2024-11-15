import { Svg } from '@/assets';
import { SvgComponent } from '@/components/ui';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <section className='flex flex-col w-44 bg-custom-slate text-white'>
      <Link to={'/admin'}>
        <div className='flex items-center gap-2 ease-in duration-300 hover:bg-white hover:text-custom-slate py-4 px-2'>
          <SvgComponent src={Svg.Home_Icon} className='Admin_Sidebar_Icon' />
          <span>خانه</span>
        </div>
      </Link>
      <Link to={'/admin/products'}>
        <div className='flex items-center gap-2 ease-in duration-300 hover:bg-white hover:text-custom-slate py-4 px-2'>
          <SvgComponent
            src={Svg.Products_Icon}
            className='Admin_Sidebar_Icon'
          />
          <span>محصولات</span>
        </div>
      </Link>
      <Link to={'/admin/categories'}>
        <div className='flex items-center gap-2 ease-in duration-300 hover:bg-white hover:text-custom-slate py-4 px-2'>
          <SvgComponent
            src={Svg.Categories_Icon}
            className='Admin_Sidebar_Icon'
          />
          <span>دسته بندی ها</span>
        </div>
      </Link>
      <Link to={'/admin/users'}>
        <div className='flex items-center gap-2 ease-in duration-300 hover:bg-white hover:text-custom-slate py-4 px-2'>
          <SvgComponent src={Svg.Users_Icon} className='Admin_Sidebar_Icon' />
          <span>کاربران</span>
        </div>
      </Link>
      <Link to={'/admin/users'}>
        <div className='flex items-center gap-2 ease-in duration-300 hover:bg-white hover:text-custom-slate py-4 px-2'>
          <SvgComponent src={Svg.Logout_Icon} className='Admin_Sidebar_Icon' />
          <span>خروج</span>
        </div>
      </Link>
    </section>
  );
};

export { AdminSidebar };
