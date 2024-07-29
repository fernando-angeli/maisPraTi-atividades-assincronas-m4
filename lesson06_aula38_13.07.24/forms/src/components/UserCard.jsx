import UserProfile from "./UserProfile";

const UserCard = ({ user, setUser }) => {
  return (
    <>
      <UserProfile user={user} setUser={setUser} />
    </>
  );
};

export default UserCard;
