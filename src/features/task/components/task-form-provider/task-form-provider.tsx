import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC, ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useIsClient } from 'usehooks-ts';

import { isDevelopment } from '@/const/env';

import { TaskFormData } from '../../types';

import { DEFAULT_TASK_FORM } from './constant';
import { taskSchema } from './task-schema';

type Props = {
  children: ReactNode;
  defaultValues?: TaskFormData;
  onSubmit?: (formData: TaskFormData) => Promise<void>;
};

const TaskFormProvider: FC<Props> = (props) => {
  const { children, defaultValues = DEFAULT_TASK_FORM, onSubmit } = props;

  const methods = useForm<TaskFormData>({
    defaultValues,
    resolver: yupResolver(taskSchema),
  });

  const handleSubmit = async (data: TaskFormData) => {
    await onSubmit?.(data);
  };

  const isClient = useIsClient();

  return (
    <FormProvider {...methods}>
      <form
        className="w-full pt-10"
        role="form"
        onSubmit={methods.handleSubmit(handleSubmit)}
      >
        {children}
      </form>

      {/* TODO: only for delelopment mode 
       isClient prevent dehydrate problem */}
      {isClient && isDevelopment ? (
        <DevTool control={methods.control} placement="top-right" />
      ) : null}
    </FormProvider>
  );
};

export { TaskFormProvider };
