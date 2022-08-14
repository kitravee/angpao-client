import { Grid } from '@mui/material';
import { FC } from 'react';

import { PriceField } from '@/components/form-field/price-field';

interface PriceForThaiProps {
  someProps?: any;
}

export const PriceForThai: FC<PriceForThaiProps> = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <PriceField
          fieldName="thaiRateValue"
          inputLabelName="ค่าใช้จ่ายสำหรับคนไทย"
          startLabel="คนไทย"
        />
      </Grid>
      <Grid item xs={6}>
        <PriceField
          fieldName="thaiServiceValue"
          inputLabelName="ค่าบริการ"
          startLabel="คนไทย"
        />
      </Grid>
    </Grid>
  );
};
