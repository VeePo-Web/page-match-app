import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="life"
      themes={["death", "life"]}
      storageKey="parker-gawryletz-theme"
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  );
}
