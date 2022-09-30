import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import { IconButton } from '@mui/material';
import { FC } from 'react';

import Link from '@/components/link';
interface SearchHambergerProps {
  someProps?: any;
}

export const SearchHamberger: FC<SearchHambergerProps> = () => {
  return (
    <>
      <IconButton
        LinkComponent={Link}
        aria-label="fingerprint"
        color="secondary"
        size="large"
      >
        <MenuOpenRoundedIcon />
      </IconButton>
    </>
  );
};
