import { useTheme } from "@common/Theme";
import { Divider } from "@components/Divider";
import { Logo } from "@components/Logo";
import React from "react";

import { Container } from "./Container";
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
      <header
        style={{
          backgroundColor: theme.palette.contactify.backgroundDark,
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(2),
        }}
      >
        <Container>
          <Logo />
        </Container>
      </header>
      <Divider />
      <main style={{ flex: 1 }}>
        <Container>{children}</Container>
      </main>
    </div>
  );
};
