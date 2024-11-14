import { cva } from 'class-variance-authority'

const textareaContainerVariants = cva(
  `rounded-md text-sm font-medium transition-all ease-in-out
    duration-75 text-md w-full flex items-start justify-start
    pt-2 relative group bg-custom-light-gray text-custom-slate
   `
)

const textareaVariants = cva(
  `disabled:placeholder:text-custom-gray after:border-custom-gray
  resize-none p-0  focus-visible:outline-none 
   `
)

export { textareaVariants, textareaContainerVariants }
