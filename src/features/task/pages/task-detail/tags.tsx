import { Chip, Stack } from '@mui/material';
import { FC } from 'react';
interface TagsProps {
  tags?: string[];
}

export const Tags: FC<TagsProps> = ({ tags }) => {
  return (
    <>
      {tags?.map((tag) => {
        return (
          <Stack key={tag} direction="row" spacing={1}>
            <Chip label={tag} />
          </Stack>
        );
      })}
    </>
  );
};
