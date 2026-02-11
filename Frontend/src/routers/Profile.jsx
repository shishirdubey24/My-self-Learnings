import { useSelector } from "react-redux";

const Profile = () => {
  // Select user object from Redux store
  const user = useSelector((state) => state.data.user);
  console.log("user is", user);

  // Handle case when user is null (not logged in)
  if (!user) return <div className="mt-10 ml-20">No user logged in</div>;

  return (
    <div className="mt-10 ml-20">
      <div className="grid grid-cols-1 gap-6">
        <div className="text-4xl">The name is: {user.name}</div>
        <div className="text-4xl">The email is: {user.email}</div>
      </div>
    </div>
  );
};

export default Profile;
