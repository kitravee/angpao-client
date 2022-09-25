import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { BackdropLoading } from '@/components/backdrop';
import { TaskCard } from '@/components/task-card';

import { useSearch } from '../api/use-search';
import { taskTranformer } from '../helper';

interface SearchViewProps {
  someProps?: any;
}

export const SearchView: FC<SearchViewProps> = () => {
  const { ref, inView } = useInView();
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useSearch();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      {isLoading ? (
        <BackdropLoading />
      ) : (
        <Box my={4}>
          <Box sx={{ '& > div': { mx: 2, my: 2 } }}>
            {data?.pages?.map((group) =>
              group?.data?.map((item) => {
                taskTranformer(item?.task);
                return (
                  <TaskCard
                    key={item?.task?.id}
                    {...taskTranformer(item?.task)}
                  />
                );
              }),
            )}
            <Box display="flex" justifyContent="center" mx={2}>
              <Button
                ref={ref}
                disabled={!hasNextPage || isFetchingNextPage}
                variant="contained"
                onClick={() => fetchNextPage()}
              >
                {isFetchingNextPage
                  ? 'Loading more...'
                  : hasNextPage
                  ? 'Load More'
                  : 'Nothing more to load'}
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
