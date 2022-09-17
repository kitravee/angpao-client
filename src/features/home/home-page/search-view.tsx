import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

const id = 'search-input';

export const SearchView = () => {
  return (
    <Box
      bottom={0}
      left="50%"
      position="absolute"
      sx={{ transform: 'translate(-50%,50%)' }}
      width="80%"
    >
      <TextField
        fullWidth
        InputProps={{
          startAdornment: <SearchRoundedIcon color="action" sx={{ mr: 1 }} />,
        }}
        id={id}
        placeholder="สวนสยาม"
        size="medium"
        sx={{ backgroundColor: 'white', borderRadius: 2 }}
        type="text"
      />
    </Box>
  );
};
