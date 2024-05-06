import { Routes,Route } from "react-router-dom";
import HomePage from "./src/pages/HomePage";

function RouteComponant() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default RouteComponant;
