import { useEffect } from 'react'
import { Control, useController } from 'react-hook-form'

export interface ProductImageProps {
  name: string
  control: Control<any>
  files: Array<any>
  openFilePicker: () => void
  image: string
}

const ProductImage = ({ files, openFilePicker, name, control, image }: ProductImageProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control })

  useEffect(() => {
    if (files && files.length) {
      field.onChange(files[0])
    }
    // eslint-disable-next-line
  }, [files.length])
  return (
    <div className="border border-custom-gray p-2 w-fit cursor-pointer rounded-lg" onClick={openFilePicker}>
      <div className="flex justify-center w-full">
        {/* <GrAttachment size={20} /> */}
        <span>{files && files.length ? files?.[0].name : image ? null : 'تصویر محصول را انتخاب کنید'}</span>
      </div>
      {(files && files.length) || image ? (
        <div className="w-full h-64">
          <img
            src={files.length ? URL.createObjectURL(files[0]) : image ? image : ''}
            alt={files?.[0]?.name}
            className="object-contain w-full h-full"
          />
        </div>
      ) : null}
      {error && <span className={'text-xs text-custom-red ps-1 mt-1'}>{error.message}</span>}
    </div>
  )
}

export { ProductImage }
