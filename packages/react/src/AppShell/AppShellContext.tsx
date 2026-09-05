'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppShellContextType {
  isMobileSidebarOpen: boolean;
  toggleMobileSidebar: () => void;
  closeMobileSidebar: () => void;
}

const AppShellContext = createContext<AppShellContextType | undefined>(undefined);

export const useAppShellContext = () => {
  const context = useContext(AppShellContext);
  return context;
};

export const AppShellProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen((prev) => !prev);
  };

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  return (
    <AppShellContext.Provider value={{ isMobileSidebarOpen, toggleMobileSidebar, closeMobileSidebar }}>
      {children}
    </AppShellContext.Provider>
  );
};
