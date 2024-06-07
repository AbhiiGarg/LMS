import { useNavigate } from "react-router-dom"

function CourseCard({data}){
    const navigate=useNavigate();

    return <>
    <div 
    onClick={()=>navigate("/course/description")}
    className="text-white sm:w-[22rem] sm:h-[430px] shawdow-lg rounded-lg cursor-pointer group overflow-hidden bg-zinc-780">
        <div className="overflow-hidden">
            <img className="h-48 w-full rounded-tl-lg rounded-tr-lg group-hover:scale-110 transition-all ease-in-out duration-300" 
            src={data?.thumbnail?.secure_url} />

            <div className="p-3 space-y-1 text-white bg-slate-600">
                <h2 className="text-xl font-bold text-yellow-500 line-clamp-2">
                    {data?.title}
                </h2>
                <p className="line-clamp-2">
                    {data?.description}
                </p>
                <p className="font-semibold">
                    <span className="text-yellow-500 font-bold">Category : </span>
                    {data?.category}
                </p>
                <p className="font-semibold">
                    <span className="text-yellow-500 font-bold">Total lectures : </span>
                    {data?.numberOfLectures}
                </p>
                <p className="font-semibold">
                    <span className="text-yellow-500 font-bold">Instructor : </span>
                    {data?.createdBy}
                </p>
            </div>
        </div>
    </div>
    </>
}

export default CourseCard