import { Box } from '@mui/system';
import { FC } from 'react';

import { Rate } from '@/features/task/types';

import { CommissionPrice } from './commission-price';
interface CommissionViewProps {
  rates?: Rate[];
}

export const CommissionView: FC<CommissionViewProps> = ({ rates }) => {
  return (
    <>
      <Box display="flex" position="relative" width="100%">
        {rates?.map((rate) => {
          return <CommissionPrice key={rate.id} rate={rate} />;
        })}
      </Box>
    </>
  );
};
