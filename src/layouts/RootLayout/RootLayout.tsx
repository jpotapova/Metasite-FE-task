import { Logo } from "@components/Logo";
import React from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div>
      <header>
        <div>
          <Logo />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};
