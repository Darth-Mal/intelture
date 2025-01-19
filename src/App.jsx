import InteltureHomePage from "./pages/home";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<InteltureHomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
