import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/slices/CourseSlice";
import HomeLayout from "../../layouts/HomeLayout";
import CourseCard from "../../components/CourseCard";

function CourseList() {
  const dispatch = useDispatch();

  const { courseData } = useSelector((state) => state.courses);

  async function loadCourses() {
    await dispatch(getAllCourses());
  }

  useEffect(() => {
    console.log("Hi");
    loadCourses();
  }, []);

  return (
    <HomeLayout>
      <div className="min-h-[88vh] flex flex-col sm:gap-10 gap-5 text-white sm:pt-12 sm:pl-14 pt-12 pb-4">
        <h1 className="text-center sm:text-3xl font-semibold sm:mb-5">
          Explore the courses made by
          <span className="font-bold text-yellow-500">Industry experts</span>
        </h1>
        <div className="sm:mb-10 flex flex-wrap justify-center gap-14">
          {console.log(courseData)}
          {courseData?.map((element) => (
            <CourseCard key={element._id} data={element} />
          ))}
        </div>
      </div>
    </HomeLayout>
  );
}

export default CourseList;
