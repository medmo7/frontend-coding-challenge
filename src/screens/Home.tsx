import React from 'react';
import { IRepo } from '../interfaces';

const ReposList = React.lazy<any>(() => import('../components/ReposList'));

const Home = () => {
  const [repos, setRepos] = React.useState<IRepo[] | null>(null);

  React.useEffect(() => {
    fetchReposData();
  }, []);

  const fetchReposData = async () => {
    const today = new Date('2020-10-20');
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    const fetchDate = `${year}-${month}-${day}`;
    // const url = `https://api.github.com/search/repositories?q=created:>${fetchDate}&sort=stars&order=desc`;
    const url = `https://api.github.com/search/repositories?q=created:>2020-10-20&sort=stars&order=desc`;
    const data = await fetch(url);
    const dataJson = await data.json();
    console.log(dataJson);
    setRepos(dataJson.items);
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>...loading</div>}>
        {repos ? (
          <section className='episode-layout'>
            <ReposList repos={repos} />
          </section>
        ) : null}
      </React.Suspense>
    </React.Fragment>
  );
};

export default Home;
