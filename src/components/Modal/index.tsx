import * as React from 'react'
import { createPortal } from 'react-dom'
import { ModalBody, ModalFooter, ModalHeader } from './Components'

export interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  width: string
}

const Modal = ({ children, isOpen, width }: ModalProps) => {
  return createPortal(
    <div
      className={`fixed end-0 top-0 w-screen h-screen z-50 ${
        isOpen ? 'opacity-1' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300 ease-in-out`}
      style={{
        background: 'rgba(0,0,0,.5)',
      }}
    >
      <div
        className={`modal-portal fixed top-1/2 end-1/2 -translate-x-1/2
          -translate-y-1/2 bg-white shadow-2xl rounded-2xl 
          flex flex-col max-h-[90%] !w-11/12 ${width}
          ${isOpen ? 'animate-modalScaleIn' : 'animate-modalScaleOut'}`}
      >
        {children}
      </div>
    </div>,
    document.body
  )
}

Modal.displayName = 'Modal'
Modal.Body = ModalBody
Modal.Header = ModalHeader
Modal.Footer = ModalFooter

export { Modal }
