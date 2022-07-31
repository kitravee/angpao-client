import LoadingButton from '@mui/lab/LoadingButton';
import { Box } from '@mui/system';
import Head from 'next/head';

// import { Button as Btt } from '@/components';
import {
  EmailField,
  PasswordField,
  PhoneField,
  UsertypeRadioField,
} from '@/components/form-field';
import { AuthLayout } from '@/layouts/auth-layout';
import { PageComponent } from '@/types/next-page';

import { SigninFormProvider } from '../../components/signup-form-provider';

const SignupPage: PageComponent = () => {
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
            <UsertypeRadioField />
            <EmailField />
            <PasswordField />
            <PhoneField />
          </Box>

          <LoadingButton
            disableElevation
            fullWidth
            // loading
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

SignupPage.getLayout = (page) => {
  return <AuthLayout title="สมัครสมาชิก">{page}</AuthLayout>;
};

SignupPage.auth = false;

export default SignupPage;
