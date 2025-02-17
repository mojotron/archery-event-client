import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { data } = useAuth();

  return <div className="text-main-100">{JSON.stringify(data)}</div>;
};

export default Profile;
