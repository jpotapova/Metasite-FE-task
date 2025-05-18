import { useTheme } from "@common/Theme";
import { Logo } from "@components/Logo";
import React from "react";
interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  const theme = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.palette.contactify.backgroundLightest,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header>
        <div>
          <Logo />
        </div>
      </header>
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
};
