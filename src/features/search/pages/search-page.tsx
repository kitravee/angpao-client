import { Grid } from '@mui/material';
import Head from 'next/head';

import { Search } from '@/components/search';
import { CategoryView } from '@/features/home/home-page/category-view';
import { MainLayout } from '@/layouts/main-layout';
import { PageComponent } from '@/types/next-page';

import { ProvinceSelect } from './search-province';
import { SearchView } from './search-view';

const SearchPage: PageComponent = () => {
  return (
    <>
      <Head>
        <title>search | angpao</title>
      </Head>
      <Grid container sx={{ mt: 2, p: 2 }}>
        <Grid xs={4}>
          <ProvinceSelect />
        </Grid>
        <Grid xs={8}>
          <Search />
        </Grid>
      </Grid>

      <CategoryView />
      <SearchView />
    </>
  );
};

SearchPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

SearchPage.auth = false;

export default SearchPage;
