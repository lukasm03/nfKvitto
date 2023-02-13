import type { PageLoad } from './$types';

export const load = (({ params }) => {
	console.log(params)
	return {
		kvitto: {
			id: `${params}`
		}
	};
}) satisfies PageLoad;
