// NAME: Index Route
// PATH: /src/routes/index.tsx

import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="flex flex-col items-center justify-center grow">
			<Button>Home</Button>
		</div>
	);
}
