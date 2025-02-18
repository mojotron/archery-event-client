import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { getLogout } from "../../lib/api";
import { FaUser as IconProfile } from "react-icons/fa6";
import {
  IoSettingsSharp as IconSettings,
  IoLogOut as IconLogout,
} from "react-icons/io5";

const UserMenu = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout } = useMutation({
    mutationFn: getLogout,
    onSuccess: () => {
      queryClient.clear();
      navigate("/login", { replace: true });
    },
  });

  return (
    <nav className="absolute bottom-2 left-2">
      <ul className="text-main-300">
        <li
          onClick={() => navigate("/dashboard")}
          className="hover:text-main-100 cursor-pointer flex gap-1 items-center"
        >
          <IconProfile />
          <span>profile</span>
        </li>
        <li
          onClick={() => navigate("/dashboard/settings")}
          className="hover:text-main-100 cursor-pointer flex gap-1 items-center"
        >
          <IconSettings />
          <span>settings</span>
        </li>
        <li
          onClick={() => logout()}
          className="hover:text-sec-blue-300 cursor-pointer flex gap-1 items-center"
        >
          <IconLogout />
          <span>logout</span>
        </li>
      </ul>
    </nav>
  );
};

export default UserMenu;
