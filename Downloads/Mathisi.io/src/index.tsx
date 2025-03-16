import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { OnBoardingScreen } from "./screens/OnBoardingScreen";
import { HomeScreen } from "./screens/HomeScreen";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding" element={<OnBoardingScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/courses" element={<HomeScreen />} />
        <Route path="/schedule" element={<HomeScreen />} />
        <Route path="/settings" element={<HomeScreen />} />
        <Route path="/search" element={<HomeScreen />} />
        <Route path="/notifications" element={<HomeScreen />} />
        <Route path="/profile" element={<HomeScreen />} />
        <Route path="/course/:id" element={<HomeScreen />} />
        <Route path="/" element={<Navigate to="/onboarding" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);