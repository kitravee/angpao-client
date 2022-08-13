import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, useMemo } from 'react';

import { Role, UserType, UserTypeInfo } from '@/features/my/types';

interface UsertypeRadioProps {
  name: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const usertypes: {
  name: string;
  role: Role;
  userType: UserType;
  bgImage: string;
}[] = [
  {
    name: 'ทั่วไป',
    role: 'USER',
    userType: 'USER',
    bgImage: "url('/icons/user.png')",
  },
  {
    name: 'ไกด์รับงาน',
    role: 'MERCHANT',
    userType: 'GUIDE',
    bgImage: "url('/icons/guide.png')",
  },
  {
    name: 'ร้านค้า',
    role: 'MERCHANT',
    userType: 'OWNER',
    bgImage: "url('/icons/merchant.png')",
  },
  {
    name: 'แอดมินร้าน',
    role: 'MERCHANT',
    userType: 'ADMIN',
    bgImage: "url('/icons/admin.png')",
  },
];

export const UsertypeRadio: FC<UsertypeRadioProps> = React.forwardRef(
  (props, ref) => {
    const { onChange, value, name } = { ...props };
    const handleChage = (e: React.ChangeEvent<HTMLInputElement>): void => {
      onChange?.(e.target.value);
    };

    const memoValue: UserTypeInfo = useMemo(
      () => value && JSON?.parse(value),
      [value],
    );

    return (
      <FormControl sx={{ width: '100%' }}>
        <RadioGroup
          ref={ref}
          name={name}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            minHeight: '400px',
            justifyContent: 'space-between',
          }}
          value={value}
          onChange={handleChage}
        >
          {usertypes.map(({ name, userType, bgImage, role }) => (
            <Box
              key={name}
              sx={{
                position: 'relative',
                borderRadius: 2,
                backgroundColor: (theme) =>
                  userType === memoValue?.userType
                    ? `${theme.palette.primary.main}1A`
                    : '',
                backgroundImage: `${bgImage}`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '160px 160px',
                backgroundPosition: 'center bottom',
                width: '48%',
                height: '185px',
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
                    userType === memoValue?.userType
                      ? `2px solid ${theme.palette.primary.main}`
                      : '',
                  borderRadius: 2,
                  boxShadow: (theme) =>
                    userType === memoValue?.userType
                      ? theme.shadows[4]
                      : theme.shadows[2],
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  top: 0,
                  width: '100%',
                  height: '100%',
                }}
                value={JSON.stringify({ role, userType })}
              />
            </Box>
          ))}
        </RadioGroup>
      </FormControl>
    );
  },
);

UsertypeRadio.displayName = 'UsertypeRadio';
