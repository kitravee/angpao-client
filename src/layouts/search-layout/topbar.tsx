import { useScrollTrigger } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/system';
import React, { FC } from 'react';

import { Back } from '@/components/back';

import { Search } from './search';
import { SearchHamberger } from './search-hamberger';

export const Topbar: FC = () => {
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
          <Back />
          <Search />
          <SearchHamberger />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
