import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";

const Navbar = (): ReactElement => {
  const [currentItem, setCurrentItem] = useState("home");
  function toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  }

  const navItems = useMemo(
    () => ({
      home: "Home",
      about: "About",
      resume: "Resume",
      projects: "Projects",
    }),
    []
  );

  const handleNavItemClick = useCallback((selectedItem: string) => {
    const element = document.getElementById(selectedItem);
    const nav = document.getElementById("nav")!;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const navheight = nav.getBoundingClientRect().height;

      const offsetPosition =
        elementPosition - document.body.getBoundingClientRect().top - navheight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentItem(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0% -60% 0%",
        // threshold: 0.1,
      } // Adjust rootMargin as needed
    );

    // Get all the section elements
    const sections = document.querySelectorAll(
      Object.keys(navItems)
        .map((key) => `#${key}`)
        .join(", ")
    );

    // Observe each section element
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      // Clean up the observer when the component unmounts
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [navItems]);

  return (
    <div id="nav-div" className="flex justify-around items-center dark:bg-slate-700 bg-slate-100 sticky top-0 z-50">
      <h1 id="title" className="dark:text-white text-2xl font-bold">Bamba Fall</h1>
      <nav
        id="nav"
        className=" w-[60%] flex gap-5 md:gap-10 justify-center md:justify-end items-center py-6 px-32"
        style={{ height: "8vh" }}
      >
        {Object.entries(navItems).map((entry) => {
          const key = entry[0];
          const value = entry[1];

          return (
            <a
              key={key}
              href={`#${value}`}
              className={
                "font-bold transition-colors duration-500 " +
                (key === currentItem
                  ? "text-blue-500"
                  : "dark:text-white text-gray-500 hover:text-black")
              }
              onClick={() => {
                setCurrentItem(key);
                handleNavItemClick(key);
              }}
            >
              {value}
            </a>
          );
        })}
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            onChange={toggleTheme}
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-200 cursor-pointer"
          ></label>
        </div>
      </nav>

<nav id="burger" className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    <div className="hidden w-full" id="navbar-hamburger">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <li>
          <a
          href="#home"
          className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
        </li>
        <li>
          <a 
          href="#about"
           className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">About</a>
        </li>
        <li>
          <a 
          href="#resume"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Resume</a>
        </li>
        <li>
          <a 
          href="#projects"
           className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Projects</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  );
};

export default Navbar;
