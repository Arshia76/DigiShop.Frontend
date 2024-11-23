import toast from 'react-hot-toast'

interface AlertProps {
  type: 'success' | 'error' | 'info'
  message: string | string[]
}

const Alert = ({ type, message }: AlertProps) => {
  if (Array.isArray(message))
    return message.forEach((m) =>
      toast.custom(
        (t) => (
          <div
            onClick={() => {
              toast.dismiss(t.id)
            }}
            className={`${t.visible ? 'animate-alertFadeIn' : 'animate-alertFadeOut'} max-w-md w-auto py-2 px-4 border-2 ${
              type === 'success'
                ? 'border-custom-green'
                : type === 'error'
                ? 'border-custom-red'
                : type === 'info'
                ? 'border-custom-gray'
                : 'border-custom-gray'
            } shadow-md rounded-lg pointer-events-auto flex cursor-pointer
        items-start bg-white`}
          >
            <span className="text-md text-custom-slate p-0 ms-1">{m}</span>
          </div>
        ),
        { position: 'bottom-right' }
      )
    )
  else
    return toast.custom(
      (t) => (
        <div
          onClick={() => {
            toast.dismiss(t.id)
          }}
          className={`${t.visible ? 'animate-alertFadeIn' : 'animate-alertFadeOut'} max-w-md w-auto py-2 px-4 border-2 ${
            type === 'success'
              ? 'border-custom-green'
              : type === 'error'
              ? 'border-custom-red'
              : type === 'info'
              ? 'border-custom-gray'
              : 'border-custom-gray'
          } shadow-md rounded-lg pointer-events-auto flex cursor-pointer
      items-start bg-white`}
        >
          <span className="text-md text-custom-slate p-0 ms-1">{message}</span>
        </div>
      ),
      { position: 'bottom-right' }
    )
}

export { Alert }
