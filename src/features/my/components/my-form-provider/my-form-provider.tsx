import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC, ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useIsClient } from 'usehooks-ts';

import { isDevelopment } from '@/const/env';
import { MyFormData } from '@/features/my/types';

import { DEFAULT_ROLE_FORM } from './constant';
import { mySchema } from './my-schema';

type Props = {
  children: ReactNode;
  defaultValues?: MyFormData;
  onSubmit?: (formData: MyFormData) => Promise<void>;
};

const MyFormProvider: FC<Props> = (props) => {
  const { children, defaultValues = DEFAULT_ROLE_FORM, onSubmit } = props;

  const methods = useForm<MyFormData>({
    defaultValues,
    resolver: yupResolver(mySchema),
  });

  const handleSubmit = async (data: MyFormData) => {
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

export { MyFormProvider };
