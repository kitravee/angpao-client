import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';

const id = 'search-input';

export const Search = () => {
  const router = useRouter();

  return (
    <Box>
      <TextField
        fullWidth
        InputProps={{
          startAdornment: <SearchRoundedIcon color="action" sx={{ mr: 1 }} />,
        }}
        color="secondary"
        defaultValue={router?.query?.keyword}
        id={id}
        placeholder="สวนสยาม"
        size="small"
        sx={{ backgroundColor: 'white', borderRadius: 2 }}
        type="text"
        onKeyDown={(e: any) => {
          if (e.key === 'Enter') {
            router.push({
              pathname: '/search',
              query: { ...router.query, keyword: e?.target?.value },
            });
          }
        }}
      />
    </Box>
  );
};
