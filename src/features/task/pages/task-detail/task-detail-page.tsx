import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import { useIsClient } from 'usehooks-ts';

import { MainLayout } from '@/layouts/main-layout';
import { ReactHtmlMarkdown } from '@/lib/markdown/react-html-markdown';
import { PageComponent } from '@/types/next-page';

import { Task } from '../../types';

import { CommissionView } from './commission-view';
import { Tags } from './tags';

const TaskDetailPage: PageComponent<{ taskDetail: Task }> = ({
  taskDetail,
}) => {
  const isClient = useIsClient();

  return (
    <>
      <Head>
        <title>{taskDetail?.name?.th} | angpao</title>
      </Head>

      <Box
        sx={{
          '& > div': { paddingBottom: 3 },
          '& > div:last-child': { paddingBottom: 6 },
          position: 'relative',
          px: 2,
          py: 5,
        }}
      >
        {isClient && (
          <>
            <Typography
              gutterBottom
              color="text.primary"
              fontWeight="bold"
              variant="h5"
            >
              {taskDetail?.name?.th}
            </Typography>
            <Box>
              <img
                alt={taskDetail?.name?.th}
                src={taskDetail?.imageUrl?.[0]}
                style={{ borderRadius: 8 }}
                width="100%"
              />
            </Box>

            <Tags tags={taskDetail?.tags} />
            <CommissionView rates={taskDetail?.rates} />
            <ReactHtmlMarkdown>{taskDetail?.description?.th}</ReactHtmlMarkdown>
          </>
        )}
      </Box>
    </>
  );
};

TaskDetailPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

TaskDetailPage.auth = false;

export default TaskDetailPage;
