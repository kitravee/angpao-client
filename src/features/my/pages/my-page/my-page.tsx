import { Box } from '@mui/system';
// import { signIn } from 'next-auth/react';
import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';

import { UsertypeRadioField } from '@/components/form-field';
// import { FirstNameField } from '@/components/form-field/first-name-field';
// import { LastNameField } from '@/components/form-field/last-name-field';
// import { LineIdField } from '@/components/form-field/line-id-field';
import { MerchantField } from '@/components/form-field/merchant-name-field';
import { SubmitButton } from '@/components/submit-button';
import { AuthLayout } from '@/layouts/auth-layout';
import { PageComponent } from '@/types/next-page';

import { useChangeRole } from '../../api/use-change-role';
import { MyFormProvider } from '../../components/my-form-provider';
import { UserTypeInfo } from '../../types';

const MyPage: PageComponent = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { mutateAsync: mutateChangeRole } = useChangeRole();
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>my | angpao</title>
      </Head>

      <div className="flex flex-col px-4 pb-12 align-items-center">
        <MyFormProvider
          onSubmit={async (data) => {
            const userTypeInfo: UserTypeInfo = JSON.parse(data.userTypeInfo);
            const merchantName = data?.merchantName;
            const formData = {
              roleName: userTypeInfo.role,
              userType: userTypeInfo.userType,
              merchantName: merchantName,
            };
            try {
              await mutateChangeRole(formData);
              const signinResponse = await signIn('refresh-token', {
                accessToken: session?.access_token,
                redirect: false,
              });
              if (signinResponse?.ok) {
                router.push('/');
              }

              if (!signinResponse?.ok) {
                enqueueSnackbar(signinResponse?.error, {
                  variant: 'error',
                });
              }
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
            <UsertypeRadioField />
            <MerchantField />
          </Box>

          <SubmitButton>ตกลง</SubmitButton>
        </MyFormProvider>
      </div>
    </>
  );
};

MyPage.getLayout = (page) => {
  return <AuthLayout title="สร้างงานสร้างอาชีพ">{page}</AuthLayout>;
};

MyPage.auth = false;

export default MyPage;
