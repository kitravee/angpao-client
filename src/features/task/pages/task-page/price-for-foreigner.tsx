import { Grid } from '@mui/material';
import { FC } from 'react';

import { PriceField } from '@/components/form-field/price-field';

interface PriceForThaiProps {
  someProps?: any;
}

export const PriceForForeigner: FC<PriceForThaiProps> = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <PriceField
          fieldName="foreignerRateValue"
          inputLabelName="ค่าใช้จ่ายสำหรับชาวต่างชาติ"
          startLabel="ชาวต่างชาติ"
        />
      </Grid>
      <Grid item xs={6}>
        <PriceField
          fieldName="foreignerServiceValue"
          inputLabelName="ค่าบริการ"
          startLabel="ชาวต่างชาติ"
        />
      </Grid>
    </Grid>
  );
};
