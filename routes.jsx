import { Routes,Route } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import AboutUsPage from "./src/pages/AboutUs";
import NotFound from "./src/pages/NotFound";
import Signup from "./src/pages/Signup";
import Login from "./src/pages/Login";
import CourseList from "./src/pages/Courses/CourseList";


function RouteComponant() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutUsPage/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/courses" element={<CourseList/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </>
  );
}

export default RouteComponant;
