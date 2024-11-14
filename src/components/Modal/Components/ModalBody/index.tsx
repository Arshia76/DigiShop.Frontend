import * as React from 'react';

export interface ModalBodyProps {
  children: React.ReactNode;
}

const ModalBody = ({ children }: ModalBodyProps) => {
  return (
    <div
      className={`w-full rounded-2xl flex flex-col overflow-auto
     flex-1`}
    >
      {children}
    </div>
  );
};

export { ModalBody };
