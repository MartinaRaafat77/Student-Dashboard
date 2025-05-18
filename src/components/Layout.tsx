import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import './Layout.css'; // Optional, for styling layout

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
