import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { FC } from 'react';

import Link from '@/components/link';

import { HOMEPAGE_SCHEMA } from '../constants';

interface WhyViewProps {
  someProps?: any;
}

export const WhyView: FC<WhyViewProps> = () => {
  return (
    <Box pb={4} position="relative" px={2} width="100%">
      <Box display="flex">
        <Box height="128px" position="relative" width="40%">
          <Image
            alt={HOMEPAGE_SCHEMA.sectionWhy.image.alt}
            layout="fill"
            objectFit="contain"
            src={HOMEPAGE_SCHEMA.sectionWhy.image.src}
          />
        </Box>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="60%"
        >
          <Box>
            <Typography
              color="primary"
              fontWeight="bold"
              sx={{ display: 'inline-block' }}
              variant="h5"
            >
              {HOMEPAGE_SCHEMA.sectionWhy.content.main.primary}
            </Typography>
            <Typography
              color="text.secondary"
              fontWeight="bold"
              sx={{ display: 'inline-block' }}
              variant="h5"
            >
              {HOMEPAGE_SCHEMA.sectionWhy.content.main.secoundary}
            </Typography>
          </Box>
          <Box>
            <Typography
              color="text.secondary"
              fontWeight="bold"
              sx={{ display: 'inline-block' }}
              variant="h6"
            >
              {HOMEPAGE_SCHEMA.sectionWhy.content.reward}
            </Typography>
          </Box>
          <Button
            LinkComponent={Link}
            href="/signup"
            sx={{ px: 4, py: 2, mt: 1, borderRadius: '24px !important' }}
            variant="contained"
          >
            <Typography
              color="white"
              fontWeight="bold"
              sx={{ display: 'inline-block' }}
              variant="h5"
            >
              สมัครสมาชิก
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
