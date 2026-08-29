// NAME: Vite Configuration
// PATH: /vite.config.ts

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	server: {
		port: 3000,
	},
	resolve: {
		tsconfigPaths: true,
	},
	plugins: [
		// WARNING: tanstackStart() must precede viteReact().
		tanstackStart(),
		viteReact(),
	],
});
