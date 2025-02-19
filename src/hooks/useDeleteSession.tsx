import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSession } from "../lib/api";
import { SESSIONS_QUERY_KEY } from "./useSessions";
import { ResponseSessionsType } from "../types/sessionType";

const useDeleteSession = (sessionId: string) => {
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation({
    mutationFn: () => deleteSession(sessionId),
    onSuccess: () => {
      queryClient.setQueryData<ResponseSessionsType>(
        [SESSIONS_QUERY_KEY],
        (cache) => {
          return {
            message: cache?.message,
            sessions: cache?.sessions.filter((s) => s.id !== sessionId),
          } as ResponseSessionsType;
        }
      );
    },
  });

  return { deleteSession: mutate, ...rest };
};

export default useDeleteSession;
