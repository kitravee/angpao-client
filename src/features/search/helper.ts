import { TaskCardProps } from '@/components/task-card';

import { SearchTask } from './api/use-search';

export type TaskCard = Record<keyof TaskCardProps, string | any>;

export const taskTranformer = (taskCard: SearchTask): TaskCardProps => {
  const taskCardTranformer: TaskCard = {
    name: taskCard.name.th,
    image: taskCard?.imageUrl?.[0],
    title: taskCard?.name.th,
    types: [
      {
        name: taskCard?.taskDetail?.[0]?.commissionType,
        price: taskCard?.taskDetail?.[0]?.commissionValue,
      },
      {
        name: taskCard?.taskDetail?.[1]?.commissionType,
        price: taskCard?.taskDetail?.[1]?.commissionValue,
      },
    ],
  };

  return taskCardTranformer;
};
