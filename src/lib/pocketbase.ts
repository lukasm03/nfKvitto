import Pocketbase from 'pocketbase';
import { writable } from 'svelte/store';

export const pb = new Pocketbase('https://nfdatabas.fly.dev');
export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange(() => {
	currentUser.set(pb.authStore.model);
});
