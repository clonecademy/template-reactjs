// NAME: Index Route
// PATH: /src/routes/index.tsx

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return <div>Home</div>;
}
