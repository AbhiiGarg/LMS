function Slider({value,index,prev,next}) {
    console.log(value.name +":- " + prev+" " + index + " "+ next);

  return (
    <div id={`slide${index}`} className="carousel-item relative w-full">
      <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
        <img src={value.image} className="w-40 rounded-full border border-gray-500" />
        <p className="sm:text-xl text-gray-200">{value.quotes}</p>
        <h3 className="sm:text-2xl font-semibold">{value.name}</h3>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={`about#slide${prev}`} className="btn btn-circle ">
            ❮
          </a>
          <a href={`about#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Slider;
