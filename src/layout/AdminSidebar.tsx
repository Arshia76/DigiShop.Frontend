import { Svg } from '@/assets'
import { SvgComponent } from '@/components/ui'
import { useAuthContext } from '@/features/auth/context'
import { Routes } from '@/lib/routes'
import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {
  const { signout } = useAuthContext()
  return (
    <aside className='flex flex-col w-44 bg-custom-black text-white'>
      <NavLink to={Routes.ADMIN.MAIN}>
        <div className='flex items-center gap-2 ease-in duration-300 hover:bg-white hover:text-custom-slate py-4 px-2'>
          <SvgComponent src={Svg.Home_Icon} className='Admin_Sidebar_Icon' />
          <span>خانه</span>
        </div>
      </NavLink>
      <NavLink to={Routes.ADMIN.PRODUCTS}>
        <div className='flex items-center gap-2 ease-in duration-300 hover:bg-white hover:text-custom-slate py-4 px-2'>
          <SvgComponent
            src={Svg.Products_Icon}
            className='Admin_Sidebar_Icon'
          />
          <span>محصولات</span>
        </div>
      </NavLink>
      <NavLink to={Routes.ADMIN.CATEGORIES}>
        <div className='flex items-center gap-2 ease-in duration-300 hover:bg-white hover:text-custom-slate py-4 px-2'>
          <SvgComponent
            src={Svg.Categories_Icon}
            className='Admin_Sidebar_Icon'
          />
          <span>دسته بندی ها</span>
        </div>
      </NavLink>
      <NavLink to={Routes.ADMIN.USERS}>
        <div className='flex items-center gap-2 ease-in duration-300 hover:bg-white hover:text-custom-slate py-4 px-2'>
          <SvgComponent src={Svg.Users_Icon} className='Admin_Sidebar_Icon' />
          <span>کاربران</span>
        </div>
      </NavLink>
      <NavLink to={Routes.ADMIN.ORDERS}>
        <div className='flex items-center gap-2 ease-in duration-300 hover:bg-white hover:text-custom-slate py-4 px-2'>
          <SvgComponent
            src={Svg.Credit_Card_Icon}
            className='Admin_Sidebar_Icon'
          />
          <span>سفارشات</span>
        </div>
      </NavLink>
      <NavLink to={Routes.HOME}>
        <div className='flex items-center gap-2 ease-in duration-300 hover:bg-white hover:text-custom-slate py-4 px-2'>
          <SvgComponent src={Svg.Globe_Icon} className='Admin_Sidebar_Icon' />
          <span>مشاهده سایت</span>
        </div>
      </NavLink>

      <div
        onClick={() => signout()}
        className='flex items-center gap-2 ease-in duration-300 cursor-pointer hover:bg-white hover:text-custom-slate py-4 px-2'
      >
        <SvgComponent src={Svg.Logout_Icon} className='Admin_Sidebar_Icon' />
        <span>خروج</span>
      </div>
    </aside>
  )
}

export { AdminSidebar }
