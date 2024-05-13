import { Routes,Route } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import AboutUsPage from "./src/pages/AboutUs";
import NotFound from "./src/pages/NotFound";


function RouteComponant() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutUsPage/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </>
  );
}

export default RouteComponant;
