import { Box } from '@mui/system';
import Head from 'next/head';
import { useSnackbar } from 'notistack';

import { PhoneField } from '@/components/form-field';
import { CategoriesDropdown } from '@/components/form-field/categories-dropdown';
import { DropzoneField } from '@/components/form-field/dropzone-field';
import { LocationUrlField } from '@/components/form-field/location-url-field';
import { RichTextAreaField } from '@/components/form-field/rich-text-area-field';
import { TagField } from '@/components/form-field/tag-field';
import { TitleField } from '@/components/form-field/title-field';
import { SubmitButton } from '@/components/submit-button';
import { AuthLayout } from '@/layouts/auth-layout';
import { PageComponent } from '@/types/next-page';

import { ProvincesDropdown } from '../../../../components/form-field/provinces-dropdown';
import { useCreateTask } from '../../api/use-create-task';
import { uploadImage } from '../../api/use-image-upload';
import { TaskFormProvider } from '../../components/task-form-provider';
import { taskSubmitTransform } from '../../transformer/task-transformer';

import { CommissionView } from './commission-view';

const TaskPage: PageComponent = () => {
  const { mutateAsync: mutateCreateTask } = useCreateTask();

  const { enqueueSnackbar } = useSnackbar();

  return (
    <>
      <Head>
        <title>task | angpao</title>
      </Head>
      <Box px={2}>
        <TaskFormProvider
          onSubmit={async (data) => {
            let imageUrl: any = undefined;
            if (data?.imageUrl) {
              const response = await uploadImage(data?.imageUrl as any);
              imageUrl = response?.url;
            }
            try {
              await mutateCreateTask(
                taskSubmitTransform({
                  ...data,
                  imageUrl,
                }),
              );
            } catch (error: any) {
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
            <TitleField />
            <RichTextAreaField
              fieldName="description.th"
              id="description-area-field"
              inputLabelName="รายละเอียด"
              placeholder="รายละเอียดโปรโมชั่น"
            />
            <PhoneField />
            <LocationUrlField />
            <CategoriesDropdown />
            <TagField />
            <DropzoneField />
            <ProvincesDropdown />
            <CommissionView />
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
