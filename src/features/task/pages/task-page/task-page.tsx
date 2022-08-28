import { Box } from '@mui/system';
import Head from 'next/head';

import { PhoneField } from '@/components/form-field';
import { DropzoneField } from '@/components/form-field/dropzone-field';
import { LocationUrlField } from '@/components/form-field/location-url-field';
import { RichTextAreaField } from '@/components/form-field/rich-text-area-field';
import { TagField } from '@/components/form-field/tag-field';
import { TitleField } from '@/components/form-field/title-field';
import { SubmitButton } from '@/components/submit-button';
import { AuthLayout } from '@/layouts/auth-layout';
import { PageComponent } from '@/types/next-page';

import { TaskFormProvider } from '../../components/task-form-provider';

import { PriceForForeigner } from './price-for-foreigner';
import { PriceForThai } from './price-for-thai';

const TaskPage: PageComponent = () => {
  return (
    <>
      <Head>
        <title>task | angpao</title>
      </Head>
      <Box px={2}>
        <TaskFormProvider
          onSubmit={async (_data) => {
            // console.log(data);
            // const res = await uploadImage(data.imageUrl);
            // console.log(res);
            // const response = await signIn('email-password-credentials', {
            //   username: data.username,
            //   password: data.password,
            //   redirect: false,
            // });
            // if (response?.ok) {
            //   router.push('/');
            // }
            // if (!response?.ok) {
            //   enqueueSnackbar(response?.error, {
            //     variant: 'error',
            //   });
            // }
          }}
        >
          <Box
            sx={{
              '& > div': { paddingBottom: 3 },
              '& > div:last-child': { paddingBottom: 6 },
            }}
          >
            <TitleField />
            <RichTextAreaField
              fieldName="description.th"
              id="description-area-field"
              inputLabelName="รายละเอียด"
              placeholder="รายละเอียดโปรโมชั่น"
            />
            <PhoneField />
            <LocationUrlField />
            <TagField />
            <DropzoneField />
            <PriceForThai />
            <PriceForForeigner />
            <RichTextAreaField
              fieldName="taskDetail.th"
              id="benefit-description-area-field"
              inputLabelName="รายละเอียดการรับเงิน"
              placeholder="เช่น ติดต่อช่องจำหน่ายตั๋วช่อง 4 สำหรับช่องทาง Angpao"
            />
          </Box>
          <SubmitButton>ตกลง</SubmitButton>
        </TaskFormProvider>
      </Box>
    </>
  );
};

TaskPage.getLayout = (page) => {
  return <AuthLayout title="สร้างงาน">{page}</AuthLayout>;
};

TaskPage.auth = false;

export default TaskPage;
