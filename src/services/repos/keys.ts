import { QueryKey } from "react-query";

export const createUseReposKey = (username: string): QueryKey => [
  "useRepos",
  username,
];
