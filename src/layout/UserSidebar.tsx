import { Svg } from '@/assets'
import { SvgComponent } from '@/components/ui'
import { NavLink, NavNavLink } from 'react-router-dom'

const UserSidebar = () => {
  return (
    <aside>
      <NavLink to={'/'}>
        <div className='flex items-center gap-2 ease-in duration-300 hover:bg-white hover:text-custom-slate py-4 px-2'>
          <SvgComponent src={Svg.Home_Icon} className='Admin_Sidebar_Icon' />
          <span>خانه</span>
        </div>
      </NavLink>
      <NavLink to={'/admin/products'}>
        <div className='flex items-center gap-2 ease-in duration-300 hover:bg-white hover:text-custom-slate py-4 px-2'>
          <SvgComponent
            src={Svg.Products_Icon}
            className='Admin_Sidebar_Icon'
          />
          <span>محصولات</span>
        </div>
      </NavLink>
      <NavLink to={'/admin/categories'}>
        <div className='flex items-center gap-2 ease-in duration-300 hover:bg-white hover:text-custom-slate py-4 px-2'>
          <SvgComponent
            src={Svg.Categories_Icon}
            className='Admin_Sidebar_Icon'
          />
          <span>دسته بندی ها</span>
        </div>
      </NavLink>
    </aside>
  )
}

export { UserSidebar }
