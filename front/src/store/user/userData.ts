import { selector } from "recoil";
import { instance } from "util/axios";

export const userData = selector({
  key: "userData",
  get: async() => instance.get(`/getuser?id=${localStorage.getItem('user_id')}`).then((res) => res.data)
})