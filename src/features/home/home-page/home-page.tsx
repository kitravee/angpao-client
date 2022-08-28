import { Box } from '@mui/system';
import Head from 'next/head';

import { MainLayout } from '@/layouts/main-layout';
import { PageComponent } from '@/types/next-page';

import { BannerView } from './banner-view';
import { CategoryView } from './category-view';
import { FooterView } from './footer-view';
import { HighlightView } from './task-highlight-view';
import { WhyView } from './why-view';

const HomePage: PageComponent = () => {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>

      <BannerView />
      <CategoryView />

      <Box sx={{ px: 2, py: 3 }}>
        <HighlightView />
      </Box>
      <WhyView />
      <FooterView />
    </>
  );
};

HomePage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

HomePage.auth = false;

export default HomePage;
