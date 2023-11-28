import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotesListing from "./pages/NotesListing";
import NoteDetails from "./pages/NoteDetails";
import CreateNote from "./pages/CreateNote";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NotesListing />} />
        <Route path="/note/:id" element={<NoteDetails />} />
        <Route path="/create" element={<CreateNote />} />
      </Routes>
    </Router>
  );
};

export default App;
