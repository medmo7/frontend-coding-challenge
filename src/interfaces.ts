
export interface IRepo {
  name: string;
  description: string;
  watchers_count: number;
  open_issues: number;
  owner:{
    login: string;
    avatar_url: string;
  }
  
}
