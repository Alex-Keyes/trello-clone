import { browser } from '$app/environment';
import { redirectToHomeIfLoggedIn } from '$lib/utils/auth.utils';
import type { PageLoad } from './$types';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const load = (({ url }) => {
	const userId = url.searchParams.get('userId');
	const secret = url.searchParams.get('secret');

	if (browser) {
		redirectToHomeIfLoggedIn();
	}

	return {
		userId,
		secret,
	};
}) satisfies PageLoad;
