import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useThemeContext } from "store/themeContext";
import PageLoader from "components/PageLoader";
import Home from "pages/Home";
import Chat from "pages/Chat";
import Sidebar from "components/SideBar";
import "assets/styles/index.scss";

function App() {
  const [appLoaded, setAppLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const prefersDark = true;

  useEffect(() => {
    if (prefersDark) document.body.classList.add("dark-theme");
    loadContent();
  }, []);

  const loadContent = () => {
    setLoading(true);
    setTimeout(() => setAppLoaded(true), 3000);
  };

  if (!appLoaded) return <PageLoader done={loading} />;

  return (
    <BrowserRouter>
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
