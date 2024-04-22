import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QueryProvider } from "./lib/react-query/QueryProvider.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// const queryClient = new QueryClient({});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        {/* <QueryClientProvider client={queryClient}> */}
        <App />
        {/* </QueryClientProvider> */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
