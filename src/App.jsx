//pages
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Error, Dashboard } from "./pages/index";
import Login from "./pages/login";
import PrivateRoute from "./pages/PrivateRoute";
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
          // element={<Dashboard />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/guest" element={<Dashboard />} />
        <Route path="/guest" element={<Dashboard />} />

        <Route path="*" element={<Error />} />
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
