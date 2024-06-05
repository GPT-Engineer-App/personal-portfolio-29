const users = [];

export const register = (username, email, password) => {
  const user = { username, email, password };
  users.push(user);
  return user;
};

export const login = (email, password) => {
  const user = users.find((user) => user.email === email && user.password === password);
  if (user) {
    return user;
  } else {
    throw new Error("Invalid email or password");
  }
};
