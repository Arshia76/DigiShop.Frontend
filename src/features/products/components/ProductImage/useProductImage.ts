import { useFilePicker } from 'use-file-picker'

export function useProductImage() {
  const { openFilePicker, plainFiles, clear } = useFilePicker({
    accept: 'image/*',
  })

  return { openFilePicker, plainFiles, clear }
}
