import Pocketbase from "pocketbase";
import { w as writable } from "./index2.js";
const pb = new Pocketbase("https://nfdatabas.fly.dev");
const currentUser = writable(pb.authStore.model);
pb.authStore.onChange(() => {
  currentUser.set(pb.authStore.model);
});
export {
  currentUser as c
};
