import { Typography } from '@mui/material';

import { Topbar } from './topbar';

interface AuthLayoutProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title }) => {
  return (
    <div className="bg-slate-100">
      <div className="container h-screen max-w-md pb-10 bg-white">
        <Topbar />
        <Typography sx={{ marginTop: 3 }} textAlign="center" variant="h5">
          {title}
        </Typography>
        {children}
      </div>
    </div>
  );
};
