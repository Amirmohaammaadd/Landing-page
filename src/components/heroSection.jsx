import video from "../assets/video2.mp4";
import video1 from "../assets/video1.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl sm:text-6xl text-center tracking-wide mt-10">
        Virtual build tools <br />
        <span className="bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text">
          for Developers
        </span>
      </h1>

      <p className="mt-10 text-lg text-center text-neutral-500 w-2/3">
        We'll begin by creating our application using Vite and installing and
        setting up tailwind css in our project. Then we will work on creating
        Navbar which is fully responsive and has a mobile drawer to display all
        links of the page. The website also contains a beautiful hero section
        which uses gradient text, to give a modern look to the site. We will
        also be using video tag to display few videos in autoplay and loop mode.
        The site also contains a feature section that lists all the features of
        the product displayed in a clean UI.
      </p>

      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-900 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>

        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documention
        </a>
      </div>

      {/* -------------------- video ------------------ */}

      <div className="flex flex-col items-center md:flex-row justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 md:w-1/3 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 md:w-1/3 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* -------------------- video ------------------ */}
    </div>
  );
};

export default HeroSection;
