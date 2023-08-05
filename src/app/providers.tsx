"use client";
import { Toaster } from "@/Components/ui/toaster"

import { FC } from 'react';
import { SessionProvider } from "next-auth/react";

export const Providers: FC<{ children: React.ReactNode }> = ({ children}) => (
  <SessionProvider>
    {children}
    <Toaster />
  </SessionProvider>
);
