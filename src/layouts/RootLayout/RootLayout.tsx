import { useTheme } from "@common/Theme";
import { Container } from "@components/Container";
import { Divider } from "@components/Divider";
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
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          backgroundColor: theme.palette.contactify.backgroundDark,
        }}
      >
        <Container>
          <Logo />
        </Container>
        <Divider />
      </header>

      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
};
