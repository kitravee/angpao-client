export { default } from '@/features/task/pages/task-detail';

import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

import { queryTaskId } from '@/features/task/api/use-query-task-id';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const { params } = context;

  try {
    const taskDetail = await queryTaskId(
      params?.['task-id'] as string,
      session?.access_token,
    );
    return {
      props: {
        session,
        taskDetail,
      },
    };
  } catch (err) {
    return {
      props: {
        session,
      },
    };
  }
};
