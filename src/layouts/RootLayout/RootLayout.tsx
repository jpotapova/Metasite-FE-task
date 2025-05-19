import { useTheme } from "@common/Theme";
import { Divider } from "@components/Divider";
import { Logo } from "@components/Logo";
import { MaxWidthContainer } from "@components/MaxWidthContainer";
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
        <MaxWidthContainer>
          <Logo />
        </MaxWidthContainer>
        <Divider />
      </header>

      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
};
