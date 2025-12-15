import { useState } from "react";
import img from "../assets/code.png";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavlinkClasses = `
    relative block 
    w-full md:w-auto  
     text-lg         
    text-white font-medium no-underline
    py-4 px-8 md:py-0 md:px-2    
  hover:text-purple-400
    border-l-4 md:border-l-0        
    border-transparent
    transition-all duration-300 ease-in-out
    overflow-hidden

    hover:bg-white/10 md:hover:bg-transparent 
    hover:border-white
    hover:translate-x-2 md:hover:translate-x-0 

  
    after:content-[''] after:absolute after:bottom-0
    after:left-1/2 after:-translate-x-1/2
    after:w-[80%] after:h-0.5
    after:bg-white after:rounded
    after:scale-x-0
    after:transition-transform after:duration-300
    hover:after:scale-x-100
  `;

  return (
    <>
      <div
        id="overlay"
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 
          w-full h-full bg-black/50
          transition-opacity duration-300
          z-999
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          md:hidden 
        `}
      ></div>

      <nav
        className="
           fixed top-0 left-0 w-full 
         bg-[#0a0014] 
         py-4 px-8
         shadow-[0_4px_20px_rgba(0,0,0,0.4)]
         backdrop-blur-xl
         transition-all duration-300
         z-1000
         max-[768px]:py-4 max-[768px]:px-6
        "
      >
        <div className="max-w-[1200px]  justify-between mx-auto flex items-center">
          <div className="animate-[float_3s_ease-in-out_infinite] ">
            <img
              src={img}
              alt="logo"
              className="w-16 h-14 object-contain   drop-shadow-[0_0_20px_rgba(97,218,251,0.5)] transition-all duration-400"
            />
          </div>
          <a
            href="#home"
            className="
              text-white text-2xl font-bold no-underline
              mr-auto
              transition-all duration-300
              tracking-wide
              [text-shadow:2px_2px_8px_rgba(0,0,0,0.4)]
              hover:-translate-y-0.5
              hover:[text-shadow:4px_4px_12px_rgba(0,0,0,0.4)]
            "
          >
            Nakul Kumar
          </a>

        
          <div
            id="hamburger"
            onClick={() => setIsOpen(!isOpen)}
            className="
              md:hidden flex flex-col gap-[5px] cursor-pointer
              p-2 rounded-md
              transition-all duration-300
              hover:bg-white/10
            "
          >
            <span
              className={`w-7 h-[3px] bg-white rounded transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-7 h-[3px] bg-white rounded transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-7 h-[3px] bg-white rounded transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>

          <ul
            id="navLinks"
            className={`
              fixed top-[70px] right-0 text-white
              w-[300px] h-[calc(100vh-70px)]
                  bg-[#0a0014] 
              flex flex-col py-8 shadow-[-4px_0_20px_rgba(0,0,0,0.4)]
              overflow-y-auto
              transition-transform duration-500 ease-in-out
              transform

              ${isOpen ? "translate-x-0" : "translate-x-full"}

              md:static md:w-auto md:h-auto 
              md:bg-none md:shadow-none 
              md:flex-row md:py-0 md:gap-8
              md:translate-x-0 md:overflow-visible
            `}
          >
      
            <li className="w-full md:w-auto opacity-0 md:opacity-100  animate-fadeSlide md:animate-none delay-100">
              <a href="#home" className={NavlinkClasses}>
                Home
              </a>
            </li>
            <li className="w-full md:w-auto opacity-0 md:opacity-100 animate-fadeSlide md:animate-none delay-300">
              <a href="#about" className={NavlinkClasses}>
                About
              </a>
            </li>

            <li className="w-full md:w-auto opacity-0 md:opacity-100 animate-fadeSlide md:animate-none delay-400">
              <a href="#skills" className={NavlinkClasses}>
                Skills
              </a>
            </li>

            <li className="w-full md:w-auto opacity-0 md:opacity-100 animate-fadeSlide md:animate-none delay-500">
              <a href="#projects" className={NavlinkClasses}>
                Projects
              </a>
            </li>

            <li className="w-full md:w-auto opacity-0 md:opacity-100 animate-fadeSlide md:animate-none delay-600">
              <a href="#contact" className={NavlinkClasses}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
