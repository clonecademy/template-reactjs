import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { Menu, MenuItem, MenuTrigger, Popover } from "react-aria-components";
import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<MenuTrigger>
			<Button variant="outline" size="icon">
				<SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
				<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
				<span className="sr-only">Toggle theme</span>
			</Button>
			<Popover placement="bottom end" className="min-w-32">
				<Menu
					className="rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-md outline-none"
					onAction={(key) => setTheme(key as "light" | "dark" | "system")}
				>
					<MenuItem
						id="light"
						className={({ isFocused }) =>
							cn(
								"cursor-default rounded-md px-2 py-1.5 text-sm outline-none select-none",
								isFocused && "bg-accent text-accent-foreground",
							)
						}
					>
						Light
					</MenuItem>
					<MenuItem
						id="dark"
						className={({ isFocused }) =>
							cn(
								"cursor-default rounded-md px-2 py-1.5 text-sm outline-none select-none",
								isFocused && "bg-accent text-accent-foreground",
							)
						}
					>
						Dark
					</MenuItem>
					<MenuItem
						id="system"
						className={({ isFocused }) =>
							cn(
								"cursor-default rounded-md px-2 py-1.5 text-sm outline-none select-none",
								isFocused && "bg-accent text-accent-foreground",
							)
						}
					>
						System
					</MenuItem>
				</Menu>
			</Popover>
		</MenuTrigger>
	);
}
