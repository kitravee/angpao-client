import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { FC } from 'react';

import { HOMEPAGE_SCHEMA } from '../constants';

interface FooterViewProps {
  someProps?: any;
}

export const FooterView: FC<FooterViewProps> = () => {
  return (
    <Box sx={{ backgroundColor: 'secondary.main', py: 6 }}>
      <Box minHeight="52px" position="relative">
        <Image
          alt={HOMEPAGE_SCHEMA.footer.alt}
          layout="fill"
          objectFit="contain"
          src={HOMEPAGE_SCHEMA.footer.icon}
        />
      </Box>
      <Box px={9} py={6}>
        <Typography color="white" textAlign="center">
          {HOMEPAGE_SCHEMA.footer.description}
        </Typography>
      </Box>
    </Box>
  );
};
