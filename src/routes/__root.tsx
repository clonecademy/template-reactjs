// NAME: Root Layout
// PATH: /src/routes/__root.tsx

import {
	createRootRoute,
	ErrorComponent,
	type ErrorComponentProps,
	HeadContent,
	Link,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Providers } from "@/components/providers";
import appCss from "../styles/app.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		links: [{ rel: "stylesheet", href: appCss }],
	}),
	component: RootComponent,
	notFoundComponent: NotFoundPage,
	// TODO: Override error boundary per route (remove if not needed).
	errorComponent: ({ error, reset }: ErrorComponentProps) => {
		return <ErrorComponent error={error} />;
	},
});

function NotFoundPage() {
	return (
		<div className="flex flex-col items-center justify-center grow">
			<h1>Error 404: Page Not Found</h1>
			<p>You navigated to a webpage that does not exist.</p>
			<Link to="/">Click here to go back.</Link>
		</div>
	);
}

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body className="min-h-dvh flex flex-col">
				<Providers>{children}</Providers>
				<Scripts />
			</body>
		</html>
	);
}
