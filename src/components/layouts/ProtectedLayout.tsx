import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../ui/LoadingSpinner";

const ProtectedLayout = () => {
  const { data, isLoading } = useAuth();

  console.log(data);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : data ? (
        <>
          <Outlet />
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
