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
          'bg-custom-blue text-white [&>.loader]:border-x-white [&>.loader]:border-y-custom-blue',
        secondary:
          'bg-custom-red text-white [&>.loader]:border-x-white [&>.loader]:border-y-custom-red',
        green:
          'bg-custom-light-gray text-custom-green [&>.loader]:border-x-custom-green [&>.loader]:border-y-custom-light-gray',
        red: 'bg-custom-light-gray text-custom-red [&>.loader]:border-x-custom-red [&>.loader]:border-y-custom-light-gray',
        slate:
          'bg-custom-light-gray text-custom-slate [&>.loader]:border-x-custom-slate [&>.loader]:border-y-custom-light-gray',
        yellow:
          'bg-custom-light-gray text-custom-yellow [&>.loader]:border-x-custom-yellow [&>.loader]:border-y-custom-light-gray',
        blue: 'bg-custom-light-gray text-custom-blue [&>.loader]:border-x-custom-blue [&>.loader]:border-y-custom-light-gray',
      },
    },
  }
);

export { buttonVariants };
