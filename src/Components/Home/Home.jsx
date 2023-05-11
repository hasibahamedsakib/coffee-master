import { Button } from "flowbite-react";
import home from "../../assets/Home.png";
const Home = () => {
  return (
    <section
      style={{ backgroundImage: `url(${home})` }}
      className={` h-[700px] bg-center bg-cover text-center text-white font-Pacifico`}
    >
      <div className="container flex items-center justify-end h-full">
        <div className=" w-1/2 text-justify">
          <h1 className="text-3xl  ">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="my-4">
            The morning starts with a coffee. Coffee is my favorite. Everyone
            loves it. A cup of coffee can change your mood. Coffee is a
            delicious drink. When you think you have nothing to do now, you sit
            down with a coffee and enjoy it.
          </p>
          <Button gradientMonochrome="pink">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
