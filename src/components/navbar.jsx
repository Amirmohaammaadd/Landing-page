import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants";
import { useState } from "react";
const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  /////////////////////////////////////////////////////////////////////

  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // User is scrolling down
        setIsSticky(false);
      } else {
        // User is scrolling up
        setIsSticky(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastScrollY]);

  ///////////////////////////////////////////////////////

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
  <div
      className={`sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 transition-transform duration-300 ${
        isSticky ? "transform translate-y-0 " : "transform -translate-y-full"
      }`}
    >      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* ---------------------------------------- */}
          {/* ----------------- part A --------------- */}
          <div className="flex items-center flex-shrink-0">
            <img src={logo} className="h-10 w-10 mr-2" alt="Logo" />
            <span className="text-xl tracking-tight">React js</span>
          </div>
          {/* ---------------------------------------- */}
          {/* ----------------- part B --------------- */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              );
            })}
          </ul>
          {/* ---------------------------------------- */}
          {/* ----------------- part C --------------- */}

          {/* <div className="hidden lg:flex justify-center space-x-12 items-center"> */}
          <div className="hidden lg:flex justify-center gap-4 items-center">
            <a className="py-2 px-3 border rounded-md" href="#">
              Sign In
            </a>
            <a
              className="bg-gradient-to-r from-orange-500 to bg-orange-800 py-2 px-3 rounded-md"
              href="#"
            >
              Create an account
            </a>
          </div>
          {/* ---------------------------------------- */}

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            <div className="flex gap-3 mt-4">
              <a className="py-2 px-3 border rounded-md" href="#">
                Sign In
              </a>
              <a
                className="bg-gradient-to-r from-orange-500 to bg-orange-800 py-2 px-3 rounded-md"
                href="#"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
