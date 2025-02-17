import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return <div className="text-main-100">{JSON.stringify(user)}</div>;
};

export default Profile;
