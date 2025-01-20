import { BrowserRouter as Router, Routes, Route } from "react-router";
import {RedirectToSignIn, SignedIn, SignedOut, SignIn} from "@clerk/clerk-react";
import {ThemeProvider} from "@mui/material";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";



import MainLayout from "./layouts/MainLayout.tsx";
import Home from "./pages/Home.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import {customTheme} from "../lib/customTheme.ts";
import DashBoardLayout from "./layouts/DashBoardLayout.tsx";

//
const queryClient = new QueryClient();


function App() {
  return (
      <Router>
            <Routes>
                <Route path="/" element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                } />
                <Route path="/signIn" element={
                    <div className="grid justify-center items-center mt-10">
                        <SignIn redirectUrl={'/dashboard'} />
                    </div>
                } />
                <Route path="/dashboard" element={
                    <QueryClientProvider client={queryClient}>
                        <SignedIn>
                            <ThemeProvider theme={customTheme}>
                                <DashBoardLayout>
                                    <Dashboard />
                                </DashBoardLayout>
                            </ThemeProvider>
                        </SignedIn>

                        <SignedOut>
                            <RedirectToSignIn />
                        </SignedOut>
                        <ReactQueryDevtools initialIsOpen={false} />
                    </QueryClientProvider>
                } />
            </Routes>
      </Router>
  )
}

export default App
