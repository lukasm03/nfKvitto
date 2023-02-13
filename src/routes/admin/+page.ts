import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		kvitto: {
			id: `${params}`
		}
	};
}) satisfies PageLoad;
