import * as React from 'react';

export interface ModalFooterProps {
  children: React.ReactNode;
}

const ModalFooter = ({ children }: ModalFooterProps) => {
  return (
    <div
      className={`w-full flex items-center justify-end px-4 py-2 
    rounded-b-2xl`}
    >
      {children}
    </div>
  );
};

export { ModalFooter };
