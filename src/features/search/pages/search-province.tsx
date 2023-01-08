import { Popper } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import * as React from 'react';

import { useGetProvinces } from '@/features/setting/api/use-provinces';

const PopperMy = function (props: any) {
  return <Popper {...props} placement="bottom-start" style={{ width: 200 }} />;
};

export const ProvinceSelect = () => {
  const { data: provinces, isLoading } = useGetProvinces();
  const router = useRouter();

  return (
    <Autocomplete
      autoHighlight
      PopperComponent={PopperMy}
      getOptionLabel={(option) => option.name.th}
      id="country-select-demo"
      loading={isLoading}
      options={provinces || []}
      renderInput={(params) => (
        <TextField
          variant="outlined"
          {...params}
          placeholder="ทั้งหมด"
          sx={{
            '& fieldset': {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          }}
        />
      )}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option.name.th}
        </Box>
      )}
      size="small"
      sx={{ borderRadiusTopRight: 0, borderRadiusTopLeft: 0 }}
      onChange={(_, value) => {
        router.push({
          pathname: '/search',
          query: {
            ...router.query,
            provinceId: value?.id,
          },
        });
      }}

      // sx={{ width: 200 }}
    />
  );
};
