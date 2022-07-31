import LoadingButton from '@mui/lab/LoadingButton';
import { Box } from '@mui/system';
import Head from 'next/head';

import { EmailField, PasswordField } from '@/components/form-field';
import { AuthLayout } from '@/layouts/auth-layout';
import { PageComponent } from '@/types/next-page';

import { SigninFormProvider } from '../../components/signin-form-provider';

const SigninPage: PageComponent = () => {
  return (
    <>
      <Head>
        <title>signin | angpao</title>
      </Head>

      <div className="flex flex-col px-4 pb-12 align-items-center">
        <SigninFormProvider
          onSubmit={async (data) => {
            // TODO: Connect API
            // eslint-disable-next-line no-console
            await console.log(data);
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
          <LoadingButton
            disableElevation
            fullWidth
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
  return <AuthLayout title="เข้าสู่ระบบ">{page}</AuthLayout>;
};

SigninPage.auth = false;

export default SigninPage;
