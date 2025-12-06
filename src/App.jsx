// src/App.jsx
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PdfViewer from "./pages/PdfViewer";

function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-slate-950">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />          
            <Route path="/details/:id" element={<PdfViewer />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;