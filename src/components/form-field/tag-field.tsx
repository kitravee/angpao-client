import {
  Autocomplete,
  AutocompleteRenderGetTagProps,
  Chip,
  InputLabel,
  TextField,
} from '@mui/material';
import { FC } from 'react';
import { useController } from 'react-hook-form';

interface TagFieldProps {
  someProps?: any;
}

const id = 'tags-contained';

const fieldName = 'tags';

export const TagField: FC<TagFieldProps> = () => {
  const { field } = useController<any, typeof fieldName>({
    name: fieldName,
  });

  return (
    <>
      <InputLabel shrink htmlFor={id}>
        คำค้นหาหมวดหมู่
      </InputLabel>
      <Autocomplete
        freeSolo
        multiple
        // defaultValue={[top100Tags[13].title]}
        clearOnBlur={true}
        id={id}
        options={top100Tags.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} placeholder="หมวดหมู่" variant="outlined" />
        )}
        renderTags={(
          value: readonly string[],
          getTagProps: AutocompleteRenderGetTagProps,
        ) =>
          value.map((option: string, index: number) => (
            // key have already apply by getTagProps
            // eslint-disable-next-line react/jsx-key
            <Chip
              label={option}
              variant="outlined"
              {...getTagProps({ index })}
            />
          ))
        }
        onChange={(event, newValue) => {
          field.onChange(newValue);
        }}
      />
    </>
  );
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Tags = [
  { title: 'ตลาดน้ำ', year: 1994 },
  { title: 'ใจกลางเมือง', year: 1972 },
  { title: 'สวนหนุก', year: 1972 },
  { title: 'สวนน้ำ', year: 1972 },
];
