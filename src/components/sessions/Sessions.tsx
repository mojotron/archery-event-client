import useSessions from "../../hooks/useSessions";
import LoadingSpinner from "../ui/LoadingSpinner";
import SessionCard from "./SessionCard";

const Sessions = () => {
  const { sessions, isPending, isSuccess, isError } = useSessions();

  return (
    <div className="p-2">
      <h2 className="font-passion-one text-main-100 text-xl tracking-wide">
        Sessions
      </h2>

      {isPending && <LoadingSpinner />}

      {isError && <p>Failed to get sessions.</p>}

      {isSuccess && (
        <ul className="space-y-1">
          {sessions?.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sessions;
