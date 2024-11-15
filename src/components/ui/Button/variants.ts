import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  `flex gap-2 items-center justify-center rounded-md outline-none font-medium 
  transition-all duration-300 focus:outline-none h-10 text-md ease-in
  ease-in disabled:cursor-not-allowed font-medium disabled:hover:opacity-75 
  `,
  {
    variants: {
      colour: {
        primary:
          'bg-custom-black text-warmGray-200 [&>.loader]:border-x-custom-black [&>.loader]:border-y-custom-black',
        secondary:
          'bg-custom-gray text-custom-slate [&>.loader]:border-x-custom-gray [&>.loader]:border-y-custom-gray',
      },
    },
  }
);

export { buttonVariants };
