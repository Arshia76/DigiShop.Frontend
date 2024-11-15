import { cva } from 'class-variance-authority';

const inputContainerVariants = cva(
  `text-sm font-medium transition-all ease-in-out duration-75 
  text-md rounded-md flex items-center justify-start px-2 relative 
  group w-full bg-custom-light-gray text-custom-slate after:border-custom-gray
  `
);

const inputVariants = cva(
  `disabled:placeholder:text-custom-dark-gray px-1 !leading-10 py-0 focus-visible:outline-none
   `
);

export { inputVariants, inputContainerVariants };
