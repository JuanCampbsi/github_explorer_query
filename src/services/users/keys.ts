import { QueryKey } from "react-query";

export const createUseUserKey = (username: string): QueryKey => [
  "useUser",
  username,
];
