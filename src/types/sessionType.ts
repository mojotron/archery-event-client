export type SessionType = {
  isCurrent?: boolean | undefined;
  id: string;
  createdAt: string;
  userAgent: string | null;
};

export type ResponseSessionsType = {
  message: string;
  sessions: SessionType[];
};
