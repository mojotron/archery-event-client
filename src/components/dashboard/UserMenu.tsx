import { useNavigate } from "react-router";

const UserMenu = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li onClick={() => navigate("/dashboard")}>profile</li>
        <li onClick={() => navigate("/dashboard/settings")}>settings</li>
        <li>logout</li>
      </ul>
    </nav>
  );
};

export default UserMenu;
