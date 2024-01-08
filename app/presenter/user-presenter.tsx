const presentUsers = (
  users: {
    id: string;
    email: string;
    name: string | null;
  }[]
) => {
  const formattedUsers = users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      is_internal: user.email.includes("@site.com"),
    };
  });

  return formattedUsers;
};

const presentUser = (user: {
  id: string;
  email: string;
  name: string | null;
}) => {
  const formattedUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    is_internal: user.email.includes("@site.com"),
  };

  return formattedUser;
};

export { presentUsers, presentUser };
