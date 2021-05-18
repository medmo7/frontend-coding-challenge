// export interface IState {
//     episodes: Array<IEpisode>;
//     favorites: Array<any>;
//   }
//   export interface IAction {
//     type: string;
//     payload: any;
//   }

export interface IRepo {
  name: string;
  description: string;
  stars: number;
  open_issues: number;
  owner:{
    login: string;
    avatar_url: string;
  }
  
}

//   export interface EpisodeProps {
//     episodes: Array<IEpisode>;
//     favorites: Array<IEpisode>;
//     toggleFavAction: (episode: IEpisode) => IAction;
//   }
