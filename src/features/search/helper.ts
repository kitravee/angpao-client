import { TaskCardProps } from '@/components/task-card';

import { SearchTask } from './api/use-search';

export type TaskCard = Record<keyof TaskCardProps, string | any>;

export const taskTranformer = (taskCard: SearchTask): TaskCardProps => {
  const taskCardTranformer: TaskCard = {
    id: `/task-detail/${taskCard.id}`,
    name: taskCard.name.th,
    image: taskCard?.imageUrl?.[0],
    title: taskCard?.name.th,
    types: [
      {
        name:
          taskCard?.rates?.[0]?.commissionType === 'THAI'
            ? 'คนไทย'
            : 'ต่างชาติ',
        price: taskCard?.rates?.[0]?.commissionValue,
        unit: taskCard?.rates?.[1]?.commissionRateType === 'FIX' ? 'บาท' : '%',
      },
      {
        name:
          taskCard?.rates?.[1]?.commissionType === 'THAI'
            ? 'คนไทย'
            : 'ต่างชาติ',
        price: taskCard?.rates?.[1]?.commissionValue,
        unit: taskCard?.rates?.[1]?.commissionRateType === 'FIX' ? 'บาท' : '%',
      },
    ],
  };

  return taskCardTranformer;
};
