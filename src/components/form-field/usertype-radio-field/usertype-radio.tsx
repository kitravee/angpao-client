import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react';

import { Role } from '@/features/signup/types';

interface UsertypeRadioProps {
  name: string;
  className?: string;
  value?: Role;
  onChange?: (value: Role) => void;
}

const usertypes: { name: string; value: Role; bgImage: string }[] = [
  { name: 'ร้านค้า', value: 'MERCHANT', bgImage: "url('/icons/merchant.png')" },
  { name: 'ไกด์นำเที่ยว', value: 'USER', bgImage: "url('/icons/user.png')" },
];

export const UsertypeRadio: FC<UsertypeRadioProps> = React.forwardRef(
  (props, ref) => {
    const { onChange, value, name } = { ...props };
    const handleChage = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const deliveryBoxValue = e.target.value as Role;
      onChange?.(deliveryBoxValue);
    };

    return (
      <FormControl sx={{ width: '100%' }}>
        <RadioGroup
          ref={ref}
          name={name}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            height: '200px',
            justifyContent: 'space-between',
          }}
          value={value}
          onChange={handleChage}
        >
          {usertypes.map(({ name, value: templateValue, bgImage }) => (
            <Box
              key={name}
              sx={{
                backgroundImage: `${bgImage}`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '160px 160px',
                backgroundPosition: 'center bottom',
                width: '48%',
              }}
            >
              <FormControlLabel
                control={<Radio />}
                data-testid="checkout-delivery-box-reuse"
                label={
                  <Typography fontWeight="bold" sx={{ mt: 0.5 }} variant="h6">
                    {name}
                  </Typography>
                }
                sx={{
                  margin: '0px',
                  backgroundColor: 'transparent',
                  border: (theme) =>
                    templateValue === value
                      ? `2px solid ${theme.palette.primary.main}`
                      : '',
                  borderRadius: 2,
                  boxShadow: (theme) =>
                    templateValue === value
                      ? theme.shadows[4]
                      : theme.shadows[2],
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  top: 0,
                  width: '100%',
                  height: '100%',
                }}
                value={templateValue}
              />
            </Box>
          ))}
        </RadioGroup>
      </FormControl>
    );
  },
);

UsertypeRadio.displayName = 'UsertypeRadio';
