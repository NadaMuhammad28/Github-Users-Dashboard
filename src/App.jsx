//pages
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Error, Dashboard } from "./pages/index";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Dashboard />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
