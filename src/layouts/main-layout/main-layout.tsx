import { Footer } from './footer';
import { Topbar } from './topbar';

interface MainLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Topbar />
      {children}
      <Footer />
    </>
  );
};
