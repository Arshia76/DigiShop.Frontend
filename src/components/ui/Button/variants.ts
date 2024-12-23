import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  `flex gap-2 items-center justify-center rounded-md outline-none font-medium 
  transition-all duration-300 focus:outline-none h-10 text-md ease-in
  ease-in disabled:cursor-not-allowed disabled:opacity-80 font-medium 
  `,
  {
    variants: {
      colour: {
        primary: 'bg-custom-black text-warmGray-200 [&>.loader]:border-x-white [&>.loader]:border-y-custom-black',
        secondary: 'bg-custom-gray text-custom-slate [&>.loader]:border-x-white [&>.loader]:border-y-custom-slate',
      },
    },
  }
)

export { buttonVariants }
