const dataSource = {
  users: [],
  orders: [],
};

exports.add = async (input, user) => {
  dataSource[input].push(user);
  return dataSource;
};
