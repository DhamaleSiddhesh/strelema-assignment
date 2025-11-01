import React from 'react';
import LandingHeader from '../components/LandingHeader';
import LandingFooter from '../components/LandingFooter';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingHeader />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <LandingFooter />
    </div>
  );
};

export default MainLayout;