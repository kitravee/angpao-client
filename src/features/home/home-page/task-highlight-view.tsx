import { Box } from '@mui/system';
import { FC } from 'react';

import { TaskCard } from '@/components/task-card';
import { taskTranformer } from '@/features/search/helper';

import { HOMEPAGE_SCHEMA } from '../constants';

interface HighlightViewProps {
  someProps?: any;
}

export const HighlightView: FC<HighlightViewProps> = () => {
  return (
    <Box sx={{ '& > div': { mb: 3 } }}>
      {HOMEPAGE_SCHEMA.tasks.map((task) => (
        <TaskCard key={task.title} {...taskTranformer(task as any)} />
      ))}
    </Box>
  );
};
