import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/providers/theme-provider";

export function Providers({ children }: Readonly<{ children: ReactNode }>) {
	return <ThemeProvider>{children}</ThemeProvider>;
}
