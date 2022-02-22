import { useQuery, UseQueryOptions } from "react-query";
import api from "../Global/axios";
import { createUseUserKey } from "./keys";
import { User } from "./types";

export const useUsers = (
  username: string, 
  options?: UseQueryOptions<User>) => {
  return useQuery(
    createUseUserKey(username),
    () => api.get<User>(`/users/${username}`).then((response) => response.data),
    options
  );
};
