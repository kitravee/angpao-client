import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { IconButton, Link } from '@mui/material';
import { useRouter } from 'next/router';
import { FC } from 'react';
interface BackProps {
  someProps?: any;
}

export const Back: FC<BackProps> = () => {
  const router = useRouter();
  return (
    <>
      <IconButton
        LinkComponent={Link}
        aria-label="fingerprint"
        color="secondary"
        size="large"
        onClick={() => {
          router.back();
        }}
      >
        <ArrowBackRoundedIcon />
      </IconButton>
    </>
  );
};
