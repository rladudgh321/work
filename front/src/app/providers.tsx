"use client";

import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

interface Props {
  children?: React.ReactNode;
}

export const NextProvider = ({ children }: Props) => {
  return (
    <>
          {children}
          <ToastContainer
            autoClose={1000}
            pauseOnFocusLoss={false}
            pauseOnHover={false}
          />
    </>
  );
};

export default function NextLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};