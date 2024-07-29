const UserProfile = ({ user, setUser }) => {
  return (
    <>
      <h1>{user.name}</h1>
      <h2>{user.age} anos</h2>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Aumentar a idade
      </button>
    </>
  );
};

export default UserProfile;
