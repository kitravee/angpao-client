import { Toolbar } from '@mui/material';

import { Footer } from './footer';
import { Topbar } from './topbar';

interface MainLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-slate-100">
      <div className="container relative max-w-md min-h-screen pb-10 overflow-hidden bg-white">
        <Topbar />
        <Toolbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};
