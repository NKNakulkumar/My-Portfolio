
const skills = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  {name:"MySQL", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

export default function Skills() {
  return (
<section className="relative w-full min-h-screen  bg-main  text-white py-40 px-4 md:px-6 lg:px-6 overflow-hidden cursor-pointer" id="skills" >
  <h1 className="text-5xl font-bold mb-12 relative px-6 md:px-10 lg:px-18 z-10">Skills</h1>

  <div className="mb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center">
    {skills.map((skill, idx) => (
      <div
        key={idx}
        role="button"
        className="group relative w-36 h-36 md:w-44 md:h-44 lg:w-32 lg:h-32 focus:outline-none"
      >
        <div className="relative group flex flex-col items-center justify-center">
          
          <div
            className="w-24 h-24 bg-purple-900/20 rounded-[30%] transform rotate-45 border border-purple-500/20 
            group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 
            group-hover:scale-110 group-hover:border-purple-400/50"
          ></div>

  
         <div className="absolute inset-0 flex items-center justify-center -rotate-45">
  <div className="rotate-45 animate-[float_3s_ease-in-out_infinite]">
    <img
      src={skill.icon}
      alt={skill.name}
      className="w-12 h-12   transition-transform duration-400  group-hover:scale-110"
    />
  </div>
</div>

        
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-sm font-medium whitespace-nowrap bg-purple-900/80 px-3 py-1 rounded-full">
              {skill.name}
            </span>
          </div>

        </div>
      </div>
    ))}
  </div>
</section>
  );
}
