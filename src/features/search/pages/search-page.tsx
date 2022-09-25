import Head from 'next/head';

import { SearchLayout } from '@/layouts/search-layout';
import { PageComponent } from '@/types/next-page';

import { SearchView } from './search-view';

const SearchPage: PageComponent = () => {
  return (
    <>
      <Head>
        <title>search | angpao</title>
      </Head>
      <SearchView />
    </>
  );
};

SearchPage.getLayout = (page) => {
  return <SearchLayout>{page}</SearchLayout>;
};

SearchPage.auth = false;

export default SearchPage;
