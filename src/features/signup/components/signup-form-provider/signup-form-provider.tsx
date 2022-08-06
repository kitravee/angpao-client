import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC, ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useIsClient } from 'usehooks-ts';

import { isDevelopment } from '@/const/env';
import { SignupFormData } from '@/features/signup/types';

import { DEFAULT_SIGNUP_FORM } from './constant';
import { signupSchema } from './signup-schema';

type Props = {
  children: ReactNode;
  defaultValues?: SignupFormData;
  onSubmit?: (formData: SignupFormData) => Promise<void>;
};

const SignupFormProvider: FC<Props> = (props) => {
  const { children, defaultValues = DEFAULT_SIGNUP_FORM, onSubmit } = props;

  const methods = useForm<SignupFormData>({
    defaultValues,
    resolver: yupResolver(signupSchema),
  });

  const handleSubmit = async (data: SignupFormData) => {
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

export { SignupFormProvider };
