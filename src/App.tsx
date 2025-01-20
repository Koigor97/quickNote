import { BrowserRouter as Router, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout.tsx";
import Home from "./pages/Home.tsx";
import {RedirectToSignIn, SignedIn, SignedOut, SignIn} from "@clerk/clerk-react";
import Dashboard from "./pages/Dashboard.tsx";
import {ThemeProvider} from "@mui/material";
import {customTheme} from "../lib/customTheme.ts";
import DashBoardLayout from "./layouts/DashBoardLayout.tsx";

//

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
                    <>
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
                    </>
                } />
            </Routes>

      </Router>
  )
}

export default App
