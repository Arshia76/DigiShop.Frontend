import * as React from 'react';

export interface ModalHeaderProps {
  children: React.ReactNode;
}

const ModalHeader = ({ children }: ModalHeaderProps) => {
  return (
    <div
      className={`w-full !font-bold flex items-center justify-between p-4 bg-white rounded-t-2xl shadow-sm border-b border-custom-light-gray`}
    >
      {children}
    </div>
  );
};

export { ModalHeader };
