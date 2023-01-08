import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';

import Link from './link';

interface CategoryIconProps {
  alt: string;
  src: string;
  description: string;
  categoryName: string;
}

export const CategoryIcon: FC<CategoryIconProps> = ({
  alt,
  src,
  description,
  categoryName,
}) => {
  const router = useRouter();

  return (
    <Box alignItems="center" display="flex" flexDirection="column">
      <Link
        key={src}
        shallow
        href={{
          pathname: '/search',
          query: { ...router?.query, categoryName },
        }}
        sx={{ textDecoration: 'none' }}
      >
        <Box
          alignItems="center"
          display="flex"
          justifyContent="center"
          pb={0.5}
        >
          <Image alt={alt} height={36} src={src} width={36} />
        </Box>

        <Typography color="secondary.main" variant="body2">
          {description}
        </Typography>
      </Link>
    </Box>
  );
};
