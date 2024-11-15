import { cva } from 'class-variance-authority'

const textareaContainerVariants = cva(
  `rounded-md text-sm font-medium transition-all ease-in-out
    duration-75 text-md w-full flex items-start justify-start
    pt-2 relative group bg-custom-light-gray text-custom-slate
    after:border-custom-gray  border-2 border-transparent w-full focus-within:border-2 
    focus-within:border-custom-slate rounded-lg 
   `
)

const textareaVariants = cva(
  `disabled:placeholder:text-custom-gray after:border-custom-gray
  resize-none p-0  focus-visible:outline-none 
   `
)

export { textareaVariants, textareaContainerVariants }
