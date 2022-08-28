import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { FC } from 'react';

interface CategoryIconProps {
  alt: string;
  src: string;
  description: string;
}

export const CategoryIcon: FC<CategoryIconProps> = ({
  alt,
  src,
  description,
}) => {
  return (
    <Box alignItems="center" display="flex" flexDirection="column">
      <Box pb={0.5}>
        <Image alt={alt} height={36} src={src} width={36} />
      </Box>

      <Typography color="secondary.main" variant="body2">
        {description}
      </Typography>
    </Box>
  );
};
