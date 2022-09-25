import { Chip, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { useIsClient } from 'usehooks-ts';

import { MainLayout } from '@/layouts/main-layout';
import { ReactHtmlMarkdown } from '@/lib/markdown/react-html-markdown';
import { PageComponent } from '@/types/next-page';

import { data } from '../../mock/detail';

import { CommissionView } from './commission-view';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};

const TaskDetailPage: PageComponent = () => {
  const isClient = useIsClient();

  return (
    <>
      <Head>
        <title>task detail | angpao</title>
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
              {data.name.th}
            </Typography>
            <Box>
              <img
                alt={data.name.th}
                src={data.imageUrl[0]}
                style={{ borderRadius: 8 }}
                width="100%"
              />
            </Box>

            {data.tags.map((tag) => {
              return (
                <Stack key={tag} direction="row" spacing={1}>
                  <Chip label={tag} />
                </Stack>
              );
            })}
            <CommissionView />
            <ReactHtmlMarkdown>{data.description.th}</ReactHtmlMarkdown>
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
