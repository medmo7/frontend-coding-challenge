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
          <div className='starts-box'>
            <div className='starts-box-el' >
              Stars:{repo.watchers_count} 
            </div>
            <div className='starts-box-el'>
            Issues:{repo.open_issues}
            </div>
          </div>
        </div>
      </section>
    );
  });
}
