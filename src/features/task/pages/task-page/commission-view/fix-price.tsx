import { Grid } from '@mui/material';
import { FC } from 'react';

import { PriceField } from '@/components/form-field/price-field';

interface FixPriceProps {
  someProps?: any;
}

export const FixPrice: FC<FixPriceProps> = () => {
  return (
    <Grid container component="span" spacing={1}>
      <Grid item component="span" mb={2} xs={12}>
        <PriceField
          fieldName="thaiValue"
          inputLabelName="คนไทย"
          startLabel="บาท"
        />
      </Grid>
      <Grid item component="span" xs={12}>
        <PriceField
          fieldName="foreignerValue"
          inputLabelName="ชาวต่างชาติ"
          startLabel="บาท"
        />
      </Grid>
    </Grid>
  );
};
