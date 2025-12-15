import { MdAttachEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdMyLocation } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative w-full bg-main text-white  pt-20 pb-10 overflow-hidden">
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-700/20 blur-[170px] rounded-full animate-slow-spin"></div>

      <div className="absolute bottom-32 right-20 w-14 h-14 rounded-xl bg-purple-500/20 border border-purple-400/30 animate-float"></div>
      <div className="absolute bottom-20 left-24 w-10 h-10 rounded-full bg-blue-500/20 animate-float-delayed"></div>

      <div className="relative z-20  px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Nakul.dev</h2>
          <p className="text-gray-300 max-w-xs">
            Creating modern, immersive digital experiences with clean code &
            creativity.
          </p>

          <div className="flex gap-4 mt-6 animate-[float_4s_ease-in-out_infinite]">
            {[
              {
                icon: "https://cdn-icons-png.freepik.com/512/2702/2702602.png",
                label: "Google",
              },
              {
                icon: "https://cdn-icons-png.freepik.com/512/2111/2111432.png",
                label: "GitHub",
                url:"https://github.com/NKNakulkumar",
              },
              {
                icon: "https://cdn-icons-png.freepik.com/512/5969/5969020.png",
                label: "Twitter",
              },
              {
                icon: "https://cdn-icons-png.freepik.com/512/174/174855.png",
                label: "Instagram",
              },
            ].map((social, i) => (
              <div
                key={i}
                className="  group w-12 h-12 rounded-xl 
    bg-white/60 border border-white/20 
    flex items-center justify-center 
     cursor-pointer
    transition-all duration-500 ease-out 
    
    hover:bg-white/20 
    hover:scale-110  
    hover:shadow-[0_0_15px_4px_rgba(255,255,255,0.4)]
    hover:animate-spinY"
              >
                <span className="group-hover:rotate-360  transition-transform duration-600              ">
                  <img src={social.icon} alt="" />
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-gray-300">
            {["home", "projects", "skills", "about", "contact"].map(
              (link, i) => (
                <li
                  key={i}
                  className="group flex items-center justify-between cursor-pointer hover:text-purple-400 transition"
                >
                  <a href={`#${link}`}>{link}</a>
                  <span className="opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition text-purple-400">
                    ➜
                  </span>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="flex flex-col gap-3 text-gray-300">
            {[
              "Web Development",
              "UI/UX Design",
              "Full Stack Apps",
              "Website Optimization",
              "Chrome Extensions",
            ].map((service, i) => (
              <li
                key={i}
                className="group flex items-center justify-between cursor-pointer hover:text-purple-400 transition"
              >
                {service}
                <span className="opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition text-purple-400">
                  ➜
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>

          <ul className="flex flex-col gap-6 text-gray-300">
            <li className="flex items-center gap-4 hover:text-purple-400 transition cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300 text-2xl hover:scale-110 transition">
                <MdAttachEmail />
              </div>
              <span>nakulmail@gmail.com</span>
            </li>

            <li className="flex items-center gap-4 hover:text-purple-400 transition cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300 text-2xl hover:scale-110 transition">
                <FaPhoneFlip className="text-purple-300 text-2xl" />
              </div>
              <span>+91 9876543210</span>
            </li>

            <li className="flex items-center gap-4 hover:text-purple-400 transition cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300 text-2xl hover:scale-110 transition">
                <MdMyLocation className="text-purple-300 text-2xl" />
              </div>
              <span>Moradabad, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-20 mt-14 border-t border-white/10 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} Nakul Kumar • All Rights Reserved.
      </div>
    </footer>
  );
}
