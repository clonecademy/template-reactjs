// NAME: TanStack Router Configuration
// PATH: /src/router.tsx

import { createRouter, ErrorComponent } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
	const router = createRouter({
		routeTree,
		scrollRestoration: true,
		defaultErrorComponent: ({ error, reset }) => (
			<ErrorComponent error={error} />
		),
	});

	return router;
}
