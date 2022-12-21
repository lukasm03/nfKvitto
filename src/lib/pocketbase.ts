import Pocketbase from "pocketbase";
import { writable } from "svelte/store";

export const pb = new Pocketbase("https://172.105.131.135");
export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
    currentUser.set(pb.authStore.model);
});