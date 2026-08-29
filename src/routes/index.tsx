// NAME: Index Route
// PATH: /src/routes/index.tsx

import { createFileRoute } from "@tanstack/react-router";
import { ModeToggle } from "@/components/blocks/mode-toggle";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="flex items-center justify-center grow space-x-4">
			<Button>Home</Button>
			<ModeToggle />
		</div>
	);
}
