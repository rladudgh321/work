import Navbar from '@/app/components/Navbar';
import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export const NextLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};