import useUser from "./useUser";

const UserAvatar = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="flex items-center justify-center gap-x-2">
      <img
        src="/avatar.png"
        alt="user-avatar"
        className="w-7 h-7 rounded-full object-cover object-center"
      />
      <span>{user?.name}</span>
    </div>
  );
};

export default UserAvatar;
