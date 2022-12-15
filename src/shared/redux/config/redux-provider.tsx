"use client";

import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//
import store from "../store";

// Create a client
const queryClient = new QueryClient();

export default function ReduxProvider({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient} >
        {children}
      </QueryClientProvider>
    </Provider>
  );
}