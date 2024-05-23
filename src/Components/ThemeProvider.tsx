"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "react-hot-toast";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <Providers>
            <NextThemesProvider {...props}>
                {children}
                <Toaster
                    reverseOrder={true}
                />
            </NextThemesProvider>
        </Providers>
    );
};