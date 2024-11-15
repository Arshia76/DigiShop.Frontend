import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Control, useController } from 'react-hook-form';
import { inputVariants, inputContainerVariants } from './variants';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  error?: string;
  label?: string;
  containerClassName?: string;
  mainContainerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  control?: Control<any>;
}

const Input = ({
  className,
  containerClassName,
  mainContainerClassName,
  labelClassName,
  errorClassName,
  label,
  startIcon,
  endIcon,
  error,
  name,
  control,
  ...props
}: InputProps) => {
  const { field } = useController({ name: name ?? '', control });
  return (
    <div
      className={cn(
        `flex flex-col relative border-2 border-transparent w-full focus-within:border-2 
        focus-within:border-custom-slate rounded-lg`,
        mainContainerClassName
      )}
    >
      <div
        className={cn(
          inputContainerVariants({
            className: containerClassName,
          })
        )}
      >
        {startIcon}
        {label && (
          <label
            className={cn(
              `absolute duration-300 z-10 pointer-events-none 
                transition-all text-custom-dark-gray ease-in-out
                top-0 start-2 !leading-10 text-sm font-medium
                 ${
                   startIcon || field.value || props.value
                     ? `-translate-y-1/2 text-xs leading-4`
                     : `group-focus-within:-translate-y-1/2
                group-focus-within:text-xs group-focus-within:leading-4
              `
                 } 
                 `,
              labelClassName
            )}
          >
            {label}
          </label>
        )}
        <input
          {...field}
          {...props}
          className={cn(
            inputVariants({
              className,
            }),
            'bg-transparent w-full'
          )}
        />
        {endIcon}
      </div>
      {error && (
        <span
          className={cn(`!text-xs text-custom-red ps-1 mt-1`, errorClassName)}
        >
          {error}
        </span>
      )}
    </div>
  );
};

Input.displayName = 'Input';

export { Input };
