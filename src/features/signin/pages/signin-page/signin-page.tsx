import Head from 'next/head';

import { Button } from '@/components';
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
          <div className="pb-2">
            <EmailField />
          </div>
          <div className="pb-6">
            <PasswordField />
          </div>
          <Button size="large">เข้าสู่ระบบ</Button>
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
