import { BrowserRouter } from "react-router-dom";

import Router from "./router";
import ScrollRestoration from "./scrollRestoration"; // 👈 ADD

export default function App() {
  return (
    // <AudioProvider>
    <BrowserRouter>
      <ScrollRestoration /> {/* 👈 MUST be inside BrowserRouter */}
      <Router />
    </BrowserRouter>
    // </AudioProvider>
  );
}
