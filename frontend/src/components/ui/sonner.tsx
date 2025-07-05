import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import type { ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover-foreground",
          "--normal-text": "var(--popover)",
          "--normal-border": "var(--border-muted-foreground)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
