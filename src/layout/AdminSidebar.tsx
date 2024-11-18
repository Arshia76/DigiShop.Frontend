import { Svg } from '@/assets'
import { SvgComponent } from '@/components/ui'
import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <aside className="flex flex-col w-44 bg-custom-black text-white rounded-l-lg">
      <NavLink to={'/admin'}>
        <div className="flex items-center gap-2 ease-in duration-300 hover:bg-white hover:text-custom-slate py-4 px-2">
          <SvgComponent src={Svg.Home_Icon} className="Admin_Sidebar_Icon" />
          <span>خانه</span>
        </div>
      </NavLink>
      <NavLink to={'/admin/products'}>
        <div className="flex items-center gap-2 ease-in duration-300 hover:bg-white hover:text-custom-slate py-4 px-2">
          <SvgComponent src={Svg.Products_Icon} className="Admin_Sidebar_Icon" />
          <span>محصولات</span>
        </div>
      </NavLink>
      <NavLink to={'/admin/categories'}>
        <div className="flex items-center gap-2 ease-in duration-300 hover:bg-white hover:text-custom-slate py-4 px-2">
          <SvgComponent src={Svg.Categories_Icon} className="Admin_Sidebar_Icon" />
          <span>دسته بندی ها</span>
        </div>
      </NavLink>
      <NavLink to={'/admin/users'}>
        <div className="flex items-center gap-2 ease-in duration-300 hover:bg-white hover:text-custom-slate py-4 px-2">
          <SvgComponent src={Svg.Users_Icon} className="Admin_Sidebar_Icon" />
          <span>کاربران</span>
        </div>
      </NavLink>
      <NavLink to={'/admin/users'}>
        <div className="flex items-center gap-2 ease-in duration-300 hover:bg-white hover:text-custom-slate py-4 px-2">
          <SvgComponent src={Svg.Logout_Icon} className="Admin_Sidebar_Icon" />
          <span>خروج</span>
        </div>
      </NavLink>
    </aside>
  )
}

export { AdminSidebar }
