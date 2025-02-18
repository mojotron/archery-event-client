import { SessionType } from "../../types/sessionType";
import { MdDeleteForever as IconDelete } from "react-icons/md";

type Params = {
  session: SessionType;
};

const SessionCard = ({ session }: Params) => {
  const createdAt = new Date(session.createdAt).toLocaleString();

  return (
    <li className="relative p-2 bg-main-500 text-main-100 rounded-md">
      {session.isCurrent && (
        <p className="text-sec-green-300">CURRENT SESSION</p>
      )}
      <p>created at: {createdAt}</p>
      <p className="text-main-300 text-sm">{session.userAgent}</p>

      <button className="absolute top-1 right-1 font-bold text-error text-xl cursor-pointer">
        <IconDelete />
      </button>
    </li>
  );
};

export default SessionCard;
