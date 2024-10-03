export const { API_URL } = process.env;

export const API_PATH = {
  login: "/user/login",
  register: "/user/signup",
  createGroup: "/group/create",
  addMember: "/group/addMembers",
  getUserList: "/user/getUserList",
  getUserByGroup: (id)=>`/user/getUserByGroup?groupId=${id}`,
  getGroupByUser: (id)=>`/users/?userId=${id}`,
};

export const getFullPath = (path) => `${API_URL}${path}`;
