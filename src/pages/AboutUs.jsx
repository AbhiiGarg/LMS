import HomeLayout from "../layouts/HomeLayout";
import AboutUsMainImage from "../assets/images/aboutMainImage.png";
import APJ from "../assets/images/apj.png";
import BillGates from "../assets/images/billGates.png";
import Einstein from "../assets/images/einstein.png";
import NelsonMandela from "../assets/images/nelsonMandela.png";
import SteveJobs from "../assets/images/steveJobs.png";
import Slider from "../components/Slider";

function AboutUsPage() {
  const educationHeros = [
    {
      name: "APJ",
      quotes:
        "Education is the most powerful tool you can use to change the world",
      image: APJ,
    },
    {
      name: "Bill Gates",
      quotes:
        "Education is the most powerful tool you can use to change the world",
      image: BillGates,
    },
    {
      name: "Einstein",
      quotes:
        "Education is the most powerful tool you can use to change the world",
      image: Einstein,
    },
    {
      name: "Nelson Mandela",
      quotes:
        "Education is the most powerful tool you can use to change the world",
      image: NelsonMandela,
    },
    {
      name: "Steve Jobs",
      quotes:
        "Education is the most powerful tool you can use to change the world",
      image: SteveJobs,
    },
  ];

  return (
    <HomeLayout>
      <div className="sm:pl-20 pt-20 flex flex-col text-white">
        <div className="flex sm:flex-row flex-col-reverse items-center sm:gap-5 mx-10">
          <section className="sm:w-1/2 sm:space-y-10 space-y-5">
            <h1 className="sm:text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="sm:text-xl text-gray-200">
              Our goal is to provide the affordable and quality education to the
              world. We are providing the platform for the aspiring teachers and
              students to share their skills creativity and knowledege to each
              other to empower and contribute in the growth and wellness of
              mankind.
            </p>
          </section>
          <div className="sm:w-1/2">
            <img
              id="test1"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0,0,0))",
              }}
              className="drop-shadow-2xl"
              src={AboutUsMainImage}
            />
          </div>
        </div>
        <div className="carousel w-[100%] sm:w-1/2 my-16 m-auto">
          {educationHeros.map((value, index) => {
            return (
              <Slider
                value={value}
                key={index}
                prev={index == 0 ? educationHeros.length - 1 : index - 1}
                next={index == educationHeros.length - 1 ? 0 : index + 1}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUsPage;
