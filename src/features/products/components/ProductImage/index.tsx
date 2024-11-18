export interface ProductImageProps {
  files: Array<any>
  openFilePicker: () => void
}

const ProductImage = ({ files, openFilePicker }: ProductImageProps) => {
  return (
    <div className="border border-custom-gray p-2 w-fit cursor-pointer rounded-lg" onClick={openFilePicker}>
      <div className="flex justify-center w-full">
        {/* <GrAttachment size={20} /> */}
        <span>{files && files.length ? files?.[0].name : 'تصویر محصول را انتخاب کنید'}</span>
      </div>
      {files && files.length ? (
        <div className="w-full h-64">
          <img src={URL.createObjectURL(files?.[0])} alt={files?.[0]?.name} className="object-contain w-full h-full" />
        </div>
      ) : null}
    </div>
  )
}

export { ProductImage }
