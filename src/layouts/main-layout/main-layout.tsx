import { Footer } from './footer';
import { Topbar } from './topbar';

interface MainLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-slate-100">
      <div className="container max-w-md bg-white">
        <Topbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};
