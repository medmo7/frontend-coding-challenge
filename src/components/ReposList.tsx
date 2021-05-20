import React from 'react';
import { IRepo } from '../interfaces';

import { Icon, InlineIcon } from '@iconify/react';
import starIcon from '@iconify-icons/akar-icons/star';
import issuesIcon from '@iconify-icons/codicon/issues';


export default function ReposList(props: any): Array<JSX.Element> {
  const { repos } = props;

  return repos.map((repo: IRepo) => {
    return (
      <section className='repo-box'>
        <img
          className='repo-image'
          src={repo.owner.avatar_url}
          alt={repo.owner.login}
        />
        <div className='repo-details'>
          <h2>{repo.name}</h2>
          <div>{repo.description}</div>
          <div className='starts-box'>
            <div className='starts-box-el'>
              <Icon icon={starIcon} style={{margin:"5px"}}/>
              {repo.watchers_count}
            </div>

            <div className='starts-box-el'>
              <Icon icon={issuesIcon} style={{margin:"5px"}} />
              {repo.open_issues}
            </div>
          </div>
        </div>
      </section>
    );
  });
}
