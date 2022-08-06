import { Container } from '@mui/system';
import Head from 'next/head';

import { MainLayout } from '@/layouts/main-layout';
import { PageComponent } from '@/types/next-page';

const Home: PageComponent = () => {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <Container>
        <h1 className="text-6xl font-bold">
          Welcome to
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
      </Container>
    </>
  );
};

Home.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

Home.auth = false;

export default Home;
