import { Box } from '@mui/system';
import { FC } from 'react';

import { data } from '../../../mock/detail';

import { CommissionPrice } from './commission-price';
interface CommissionViewProps {
  someProps?: any;
}

export const CommissionView: FC<CommissionViewProps> = ({}) => {
  return (
    <>
      <Box display="flex" position="relative" width="100%">
        {data.rates.map((rate) => {
          return <CommissionPrice key={rate.id} rate={rate} />;
        })}
      </Box>
    </>
  );
};
