import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../ui/LoadingSpinner";
import UserMenu from "../dashboard/UserMenu";

const ProtectedLayout = () => {
  const { user, isLoading } = useAuth();

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : user ? (
        <>
          <Outlet />
          <UserMenu />
        </>
      ) : (
        <Navigate
          to="/login"
          replace={true}
          state={{ redirectUrl: window.location.pathname }}
        />
      )}
    </div>
  );
};

export default ProtectedLayout;
