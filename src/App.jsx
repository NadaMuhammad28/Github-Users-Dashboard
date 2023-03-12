//pages
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Error, Dashboard } from "./pages/index";
import OfflineMode from "./components/OfflineMode";
function App() {
  console.log(navigator.onLine);
  return (
    <div className="App">
      {!navigator.onLine && <OfflineMode />}
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
