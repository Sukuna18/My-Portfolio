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
    <div
      id="nav-div"
      className="flex justify-around items-center dark:bg-slate-700 bg-slate-100 fixed w-full top-0 z-50"
    >
      <h1 id="title" className="dark:text-white text-2xl font-bold">
        Bamba Fall
      </h1>
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
        <div
          id="theme"
          className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
        >
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
    </div>
  );
};

export default Navbar;
