import React from 'react';
import { IRepo } from '../interfaces';

export default function ReposList(props: any): Array<JSX.Element> {
  const { repos } = props;

  return repos.map((repo: IRepo) => {
    return (
      <section className='repo-box'>
        <img className='repo-image' src={repo.owner.avatar_url} alt={repo.owner.login} />
        <div className='repo-details'>
          <h2>{repo.name}</h2>
          <div>{repo.description}</div>
          <section style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              Stars:{repo.watchers_count} Issues:{repo.open_issues}
            </div>
          </section>
        </div>
      </section>
    );
  });
}
