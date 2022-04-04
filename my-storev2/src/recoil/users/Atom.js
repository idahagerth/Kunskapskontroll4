import { atom } from "recoil";

export const getAllUsers = async () => {
  const response = await fetch("https://k4backend.osuka.dev/users");
  return await response.json();
};

export const allUsers = atom({
  key: "allUsers",
  default: getAllUsers(),
});
