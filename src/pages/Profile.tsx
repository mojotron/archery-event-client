import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="text-main-100">
      {
        <header>
          <div className="uppercase inline-block font-bold border border-main-700 rounded-full px-0.5 py-0.5 bg-sec-green-500 text-main-700 space-x-[2px]">
            <span>{user?.firstName[0]}</span>
            <span>{user?.lastName[0]}</span>
          </div>
        </header>
      }
    </div>
  );
};

export default Profile;
