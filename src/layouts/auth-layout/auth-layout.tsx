import { Topbar } from './topbar';

interface AuthLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="bg-slate-100">
      <div className="container h-screen max-w-md pb-10 bg-white">
        <Topbar />
        {children}
      </div>
    </div>
  );
};
