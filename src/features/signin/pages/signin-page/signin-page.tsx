import { Box } from '@mui/system';
import { signIn } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { EmailField, PasswordField } from '@/components/form-field';
import { SubmitButton } from '@/components/submit-button';
import { AuthLayout } from '@/layouts/auth-layout';
import { PageComponent } from '@/types/next-page';

import { SigninFormProvider } from '../../components/signin-form-provider';

const SigninPage: PageComponent = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>signin | angpao</title>
      </Head>

      <div className="flex flex-col px-4 pb-12 align-items-center">
        <SigninFormProvider
          onSubmit={async (data) => {
            await signIn('email-password-credentials', {
              username: data.username,
              password: data.password,
              redirect: false,
            });
            router.push('/');
          }}
        >
          <Box
            sx={{
              '& > div': { paddingBottom: 3 },
              '& > div:last-child': { paddingBottom: 6 },
            }}
          >
            <EmailField />
            <PasswordField />
          </Box>

          <SubmitButton>เข้าสู่ระบบ</SubmitButton>
        </SigninFormProvider>
      </div>
    </>
  );
};

SigninPage.getLayout = (page) => {
  return <AuthLayout title="เข้าสู่ระบบ">{page}</AuthLayout>;
};

SigninPage.auth = false;

export default SigninPage;
