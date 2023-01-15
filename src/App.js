import React from "react";
import { Route, Routes } from "react-router-dom";
import Mailbody from "./pages/mail-body/Mailbody";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mailbody />} />
      <Route path="/unread-mails" element={<Mailbody />} />
      <Route path="/readed-mails" element={<Mailbody />} />
      <Route path="/favorite-mails" element={<Mailbody />} />
    </Routes>
  );
}

export default App;
