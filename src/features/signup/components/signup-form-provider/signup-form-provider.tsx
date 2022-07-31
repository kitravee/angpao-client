import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC, ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useIsClient } from 'usehooks-ts';

import { SigninFormData } from '@/features/signin/types';

import { DEFAULT_SIGNUP_FORM } from './constant';
import { signupSchema } from './signup-schema';

type Props = {
  children: ReactNode;
  defaultValues?: SigninFormData;
  onSubmit?: (formData: SigninFormData) => Promise<void>;
};

const SigninFormProvider: FC<Props> = (props) => {
  const { children, defaultValues = DEFAULT_SIGNUP_FORM, onSubmit } = props;

  const methods = useForm<SigninFormData>({
    defaultValues,
    resolver: yupResolver(signupSchema),
  });

  const handleSubmit = async (data: SigninFormData) => {
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
      {isClient ? (
        <DevTool control={methods.control} placement="top-right" />
      ) : null}
    </FormProvider>
  );
};

export { SigninFormProvider };
