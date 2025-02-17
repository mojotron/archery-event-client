import { useQuery } from "@tanstack/react-query";
// api
import { getUser } from "../lib/api";
// import { UserType } from "../types/userType";

const AUTH_QUERY_KEY = "auth";

const useAuth = () => {
  const { data, ...rest } = useQuery({
    queryKey: [AUTH_QUERY_KEY],
    queryFn: getUser,
    staleTime: Infinity,
  });

  return { data, ...rest };
};

export default useAuth;
