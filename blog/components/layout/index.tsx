import React, { ComponentPropsWithoutRef } from 'react';
import Footer from '@/components/navigation/footer';
import Header from '@/components/navigation/header';

interface IMainLayout extends ComponentPropsWithoutRef<'div'> {}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen lg:justify-center lg:items-center p-2">
      <div className="flex flex-col flex-grow md:w-2/3">
        <Header />

        <main className="flex-grow ">{children}</main>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
