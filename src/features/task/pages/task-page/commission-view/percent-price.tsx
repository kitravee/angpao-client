import { Grid } from '@mui/material';
import { FC } from 'react';

import { PriceField } from '@/components/form-field/price-field';

interface PercentPriceProps {
  someProps?: any;
}

export const PercentPrice: FC<PercentPriceProps> = () => {
  return (
    <Grid container spacing={1}>
      <Grid item mb={2} xs={12}>
        <PriceField
          fieldName="thaiValue"
          inputLabelName="คนไทย"
          startLabel="%"
        />
      </Grid>
      <Grid item xs={12}>
        <PriceField
          fieldName="foreignerValue"
          inputLabelName="ชาวต่างชาติ"
          startLabel="%"
        />
      </Grid>
    </Grid>
  );
};
