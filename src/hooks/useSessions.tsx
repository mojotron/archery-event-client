import { useQuery } from "@tanstack/react-query";
import { getSessions } from "../lib/api";

export const SESSIONS_QUERY_KEY = "sessions";

const useSessions = () => {
  const { data, ...rest } = useQuery({
    queryKey: [SESSIONS_QUERY_KEY],
    queryFn: getSessions,
  });

  return { sessions: data?.sessions, ...rest };
};

export default useSessions;
