import { Box } from '@mui/system';
import { signIn } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';

import {
  EmailField,
  PasswordField,
  PhoneField,
  // UsertypeRadioField,
} from '@/components/form-field';
import { FirstNameField } from '@/components/form-field/first-name-field';
import { LastNameField } from '@/components/form-field/last-name-field';
import { LineIdField } from '@/components/form-field/line-id-field';
import { SubmitButton } from '@/components/submit-button';
import { AuthLayout } from '@/layouts/auth-layout';
import { PageComponent } from '@/types/next-page';

import { usePostSignup } from '../../api/use-signup';
import { SignupFormProvider } from '../../components/signup-form-provider';

const SignupPage: PageComponent = () => {
  const { mutateAsync: mutateSignup } = usePostSignup();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <>
      <Head>
        <title>signup | angpao</title>
      </Head>

      <div className="flex flex-col px-4 pb-12 align-items-center">
        <SignupFormProvider
          onSubmit={async (data) => {
            try {
              await mutateSignup(data);

              //auto signin when register succes
              const signinResponse = await signIn(
                'email-password-credentials',
                {
                  username: data.username,
                  password: data.password,
                  redirect: false,
                },
              );
              if (signinResponse?.ok) {
                router.push('/');
              }

              if (!signinResponse?.ok) {
                enqueueSnackbar(signinResponse?.error, {
                  variant: 'error',
                });
              }
              router.push('/');
            } catch (error: any) {
              // handle Signup error
              enqueueSnackbar(error?.message, {
                variant: 'error',
              });
            } finally {
              // console.log('settled');
            }
          }}
        >
          <Box
            sx={{
              '& > div': { paddingBottom: 3 },
              '& > div:last-child': { paddingBottom: 6 },
            }}
          >
            {/* <UsertypeRadioField /> */}
            <FirstNameField />
            <LastNameField />
            <EmailField />
            <PasswordField />
            <PhoneField />
            <LineIdField />
          </Box>

          <SubmitButton>สมัครสมาชิก</SubmitButton>
        </SignupFormProvider>
      </div>
    </>
  );
};

SignupPage.getLayout = (page) => {
  return <AuthLayout title="สมัครสมาชิก">{page}</AuthLayout>;
};

SignupPage.auth = false;

export default SignupPage;
