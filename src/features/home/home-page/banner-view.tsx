import { Box } from '@mui/system';
import Image from 'next/image';
import { FC } from 'react';

import { HOMEPAGE_SCHEMA } from '../constants';

import { SearchView } from './search-view';

interface BannerViewProps {
  someProps?: any;
}

export const BannerView: FC<BannerViewProps> = () => {
  return (
    <Box height="250px" position="relative">
      <Image
        alt={HOMEPAGE_SCHEMA.banner.image.alt}
        layout="fill"
        objectFit="cover"
        src={HOMEPAGE_SCHEMA.banner.image.src}
      />
      <SearchView />
    </Box>
  );
};
