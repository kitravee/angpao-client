import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import Link from '@/components/link';

const footerNavs = [
  {
    href: '/',
    icon: <HomeOutlinedIcon />,
    label: 'หน้าแรก',
  },
  { href: '/task', icon: <AddBoxOutlinedIcon />, label: 'โพสงาน' },
  {
    href: '/search',
    icon: <SearchRoundedIcon />,
    label: 'ค้นหา',
  },

  {
    href: '/',
    icon: <QrCodeScannerRoundedIcon />,
    label: 'สแกน',
  },
  {
    href: '/',
    icon: <AssignmentOutlinedIcon />,
    label: 'ใบงาน',
  },
];

const findHighlightIndex = (path: string) => {
  return footerNavs.findIndex((nav) => path === nav.href);
};
export const Footer: FC = () => {
  const router = useRouter();

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
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <BottomNavigation showLabels value={findHighlightIndex(router.pathname)}>
        {footerNavs.map(({ label, href, icon }) => (
          <BottomNavigationAction
            key={label}
            LinkComponent={Link}
            href={href}
            icon={icon}
            label={label}
          />
        ))}
      </BottomNavigation>
    </Paper>
    // </Box>
  );
};
