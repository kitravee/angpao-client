import LoadingButton from '@mui/lab/LoadingButton';
import Head from 'next/head';

// import { Button as Btt } from '@/components';
import { AuthLayout } from '@/layouts/auth-layout';
import { PageComponent } from '@/types/next-page';

import { EmailField } from '../../components/email-field';
import { PasswordField } from '../../components/password-field';
import { SigninFormProvider } from '../../components/signin-form-provider';

import { Header } from './header';

const SigninPage: PageComponent = () => {
  return (
    <>
      <Head>
        <title>signin | angpao</title>
      </Head>

      <Header />

      <div className="flex flex-col px-10 py-2 align-items-center">
        <SigninFormProvider
          onSubmit={async (data) => {
            // TODO: Connect API
            // eslint-disable-next-line no-console
            await console.log(data);
          }}
        >
          <div className="pb-6">
            <EmailField />
          </div>
          <div className="pb-6">
            <PasswordField />
          </div>

          <LoadingButton
            disableElevation
            fullWidth
            loading
            color="primary"
            size="large"
            sx={{ color: 'white' }}
            type="submit"
            variant="contained"
          >
            เข้าสู่ระบบ
          </LoadingButton>
        </SigninFormProvider>
      </div>
    </>
  );
};

SigninPage.getLayout = (page) => {
  return <AuthLayout>{page}</AuthLayout>;
};

SigninPage.auth = false;

export default SigninPage;
