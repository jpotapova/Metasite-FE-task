import React from "react";
import { Logo } from "@components/Logo";

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
            <main>
                {children}
            </main>
        </div>

    );
};
