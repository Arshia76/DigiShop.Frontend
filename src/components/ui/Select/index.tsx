import * as React from 'react'
import ReactSelect from 'react-select'
import { Control, NoOptionsMessage } from './components'
import { cn } from '@/lib/utils'
import { Control as ControlType, useController } from 'react-hook-form'

import { customStyles } from './styles'

export interface SelectProps
  extends React.ComponentPropsWithoutRef<typeof ReactSelect> {
  icon?: React.ReactNode
  topSeacrh?: boolean

  error?: string
  errorClassName?: string
  labelClassName?: string
  label?: string
  control?: ControlType<any>
  onChange?: (newData: any) => void
}

const Select = ({
  className,
  isDisabled,
  icon,
  error,
  errorClassName,
  labelClassName,
  label,
  name,
  control,
  onChange,
  ...props
}: SelectProps) => {
  const { field } = useController({ name: name ?? '', control })
  const [focus, setFocus] = React.useState(false)

  return (
    <div
      className={cn(
        `flex flex-col w-full !leading-10 relative font-normal`,
        className
      )}
    >
      {label && (
        <label
          className={cn(
            `absolute duration-300 z-10 pointer-events-none 
                transition-all text-custom-slate ease-in-out
                top-0 start-2 !leading-10 text-sm font-medium
                 ${
                   field.value || props.value || focus
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
      <ReactSelect
        // @ts-ignore
        icon={icon}
        placeholder=''
        menuPlacement='auto'
        menuPortalTarget={document.body}
        components={{ NoOptionsMessage, Control }}
        isRtl
        styles={customStyles}
        className={`${isDisabled && 'opacity-50 pointer-events-none'}`}
        {...props}
        {...field}
        value={props.value || field.value}
        onChange={(newData) => {
          onChange ? onChange(newData) : field.onChange(newData)
        }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {error && (
        <span
          className={cn(
            `text-xs text-custom-red ps-1 mt-1 whitespace-nowrap`,
            errorClassName
          )}
        >
          {error}
        </span>
      )}
    </div>
  )
}

Select.displayName = 'Select'

export { Select }
