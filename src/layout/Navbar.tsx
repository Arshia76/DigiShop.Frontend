import { Svg } from '@/assets'
import { Button, SvgComponent } from '@/components/ui'
import { useAuthContext } from '@/features/auth/context'
import { useCartContext } from '@/features/cart/context'
import { Routes } from '@/lib/routes'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const { cartItems } = useCartContext()
  const { user, isAuthenticated, signout } = useAuthContext()

  const totalItems = cartItems.reduce((total, current) => {
    return (total += current.selectedQuantity)
  }, 0)

  return (
    <header className='flex items-center bg-custom-light-gray justify-around shadow-lg py-4 top-0 sticky z-50'>
      {/* logo */}
      <h1
        className='text-4xl cursor-pointer'
        onClick={() => navigate(Routes.HOME)}
      >
        دیجی شاپ
      </h1>

      <div className='flex items-center gap-4'>
        <div
          className='relative cursor-pointer me-6'
          onClick={() => navigate(Routes.CART)}
        >
          <span
            className='absolute top-0 left-0 -translate-x-4 -translate-y-4 rounded-full
          flex items-center justify-center p-1 w-6 h-6 bg-custom-black text-white'
          >
            {totalItems}
          </span>
          <SvgComponent src={Svg.Cart_Icon} className='Navbar_Icon' />
        </div>
        {!isAuthenticated && (
          <Button
            colour={'primary'}
            className='w-fit px-8'
            onClick={() => navigate(Routes.SIGNIN)}
          >
            ورود / ثبت نام
          </Button>
        )}
        {user?.role === 'Admin' ? (
          <>
            <Button
              colour={'primary'}
              className='w-fit px-8'
              onClick={() => navigate(Routes.ADMIN.MAIN)}
            >
              پنل ادمین
            </Button>
            <Button
              className='w-fit px-8 bg-slate-800 text-white'
              onClick={() => navigate(Routes.PROFILE + '/' + user.id)}
            >
              پروفایل
            </Button>
          </>
        ) : user?.role === 'User' ? (
          <Button
            colour={'primary'}
            className='w-fit px-8'
            onClick={() => navigate(Routes.PROFILE + '/' + user.id)}
          >
            پروفایل
          </Button>
        ) : null}
        {isAuthenticated && (
          <Button
            colour={'secondary'}
            className='w-fit px-8'
            onClick={() => signout()}
          >
            خروج
          </Button>
        )}
      </div>
    </header>
  )
}

export { Navbar }
