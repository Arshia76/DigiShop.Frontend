import { FormProvider, useForm } from 'react-hook-form'

const HookFormProvider = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm()
  return <FormProvider {...methods}>{children}</FormProvider>
}

export { HookFormProvider }
