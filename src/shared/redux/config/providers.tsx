"use client";

import { useServerInsertedHTML } from "next/navigation";
import { PropsWithChildren } from "react";
import ReduxProvider from "./redux-provider";

type P = PropsWithChildren;

export default function Providers({ children }: P) {
  return (
    <>
      <ReduxProvider>
        {children}
      </ReduxProvider>
    </>
  );
}