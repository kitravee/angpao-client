import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import React, { FC } from 'react';

import Link from '@/components/link';

export const Footer: FC = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      className="max-w-md"
      elevation={3}
      sx={{
        position: 'fixed',
        transform: 'translateX(-50%)',
        width: '100%',
        left: '50%',
        bottom: 0,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          LinkComponent={Link}
          href="/"
          icon={<HomeOutlinedIcon />}
          label="หน้าแรก"
        />
        <BottomNavigationAction
          LinkComponent={Link}
          href="/task"
          icon={<AddBoxOutlinedIcon />}
          label="โพสงาน"
        />
        <BottomNavigationAction
          LinkComponent={Link}
          href="#"
          icon={<QrCodeScannerRoundedIcon />}
          label="สแกน"
        />
        <BottomNavigationAction
          LinkComponent={Link}
          href="#"
          icon={<AssignmentOutlinedIcon />}
          label="ใบงาน"
        />
      </BottomNavigation>
    </Paper>
    // </Box>
  );
};
