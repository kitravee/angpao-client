import { Box } from '@mui/system';
import { FC } from 'react';

import { CategoryIcon } from '@/components/category-icon';

import { HOMEPAGE_SCHEMA } from '../constants';
interface CategoryViewProps {
  someProps?: any;
}

export const CategoryView: FC<CategoryViewProps> = () => {
  return (
    <Box
      className="overflow-x-scroll"
      display="flex"
      sx={{
        px: 2,
        pt: 6,
        pb: 2,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        boxShadow: 4,
        '& > div': { mr: 4, minWidth: '60px' },

        '-ms-overflow-style': 'none' /* Internet Explorer 10+ */,
        scrollbarWidth: 'none' /* Firefox */,
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {HOMEPAGE_SCHEMA.categories.map((category) => (
        <CategoryIcon key={category.src} {...category} />
      ))}
    </Box>
  );
};
