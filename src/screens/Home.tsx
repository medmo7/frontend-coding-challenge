import React from 'react';

import InfiniteScroll from 'react-infinite-scroller';

import { IRepo } from '../interfaces';

const ReposList = React.lazy<any>(() => import('../components/ReposList'));

const Home = () => {
  const [repos, setRepos] = React.useState<IRepo[]>([]);
  const [pageNumber, setPageNumber] = React.useState<number>(0);

  React.useEffect(() => {
    fetchReposData();
  }, []);

  const fetchReposData = async () => {
    const today = new Date();
    today.setDate(today.getDate() - 30);
    const nextPageNumber = pageNumber + 1;
    const fetchDate = today.toLocaleDateString();
    const url = `https://api.github.com/search/repositories?q=created:>${fetchDate}&sort=stars&order=desc&page=${nextPageNumber}`;
    // const url = `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc`;
    const data = await fetch(url);
    const dataJson = await data.json();
    console.log(dataJson);
    setRepos([...repos,...dataJson.items]);
    setPageNumber(nextPageNumber)
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>...loading</div>}>
          <section className='episode-layout'>
            <InfiniteScroll
              pageStart={0}
              loadMore={fetchReposData}
              hasMore={true || false}
              loader={
                <div className='loader' key={0}>
                  Loading ...
                </div>
              }>
              <ReposList repos={repos} />
            </InfiniteScroll>
          </section>
      </React.Suspense>
    </React.Fragment>
  );
};

export default Home;
