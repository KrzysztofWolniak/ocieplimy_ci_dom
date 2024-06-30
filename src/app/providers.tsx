import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextThemesProvider attribute="class" defaultTheme="dark">
			<NextUIProvider>{children}</NextUIProvider>
		</NextThemesProvider>
	);
}
