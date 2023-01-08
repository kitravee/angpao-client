import LoginIcon from '@mui/icons-material/Login';
import { Button, useScrollTrigger } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/system';
import { useSession } from 'next-auth/react';
import React, { FC } from 'react';

import Link from '@/components/link';

export const Topbar: FC = () => {
  const { data, status } = useSession();
  const onScrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <AppBar
      className="max-w-md"
      // disableGutters
      color="inherit"
      component="nav"
      elevation={onScrollTrigger ? 3 : 0}
      sx={{
        position: 'fixed',
        top: 0,
        width: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <Toolbar disableGutters>
        <Box
          alignItems="center"
          display="flex"
          justifyContent="space-between"
          // flex-direction="column"
          p={2}
          width="100%"
        >
          {/* <Box>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              aria-label="account of current user"
              color="inherit"
              size="large"
              onClick={() => {
                return;
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box> */}
          <Box>
            <img alt="angpao" src="/icons/angpao-icons.svg" width="150px" />
          </Box>
          {status === 'unauthenticated' && (
            <Button
              LinkComponent={Link}
              className="text-white bg-gradient-to-br from-ag1 to-ag2 hover:bg-gradient-to-bl focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              href="/signin"
              startIcon={<LoginIcon />}
            >
              เข้าสู่ระบบ
            </Button>
          )}

          {status === 'loading' && null}

          {status === 'authenticated' && <div>{`สวัสดี, ${data?.name}`}</div>}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
