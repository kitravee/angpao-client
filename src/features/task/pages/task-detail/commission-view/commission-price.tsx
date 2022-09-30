import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import NumberFormat from 'react-number-format';

interface CommissionPriceProps {
  someProps?: any;
  rate?: {
    id: number;
    commissionType: string;
    commissionValue: number;
    commissionRateType: string;
  };
}

export const CommissionPrice: FC<CommissionPriceProps> = ({ rate }) => {
  return (
    <Box width="50%">
      <Box alignItems="flex-end" display="flex" overflow="hidden">
        <Typography className="line-clamp-1" fontWeight="bold" variant="body1">
          {rate?.commissionType === 'THAI' ? 'คนไทย' : 'ต่างชาติ'}
        </Typography>
        <Typography
          color="primary"
          fontWeight="bold"
          lineHeight="1"
          sx={{ mx: 1 }}
          variant="h4"
        >
          <NumberFormat
            thousandSeparator
            displayType="text"
            value={rate?.commissionValue}
          />
        </Typography>
        <Typography variant="body1">
          {rate?.commissionRateType === 'FIX' ? 'บาท' : '%'}
        </Typography>
      </Box>
    </Box>
  );
};
