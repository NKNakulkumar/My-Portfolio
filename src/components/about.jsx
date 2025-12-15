export default function About() {
  return (
    <section className="w-full bg-main text-white py-35 px-6 flex flex-col items-center min-h-screen"  id="about">

      <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
      <p className="text-gray-300 text-center max-w-2xl leading-relaxed mb-12">
        I am a passionate developer who loves building modern, scalable, and
        user‑friendly web applications. With a strong focus on clean code,
        performance, and great UI/UX, I enjoy creating digital experiences that
        feel smooth and intuitive.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl h-auto min-h-64">
      
        <div className="group bg-[#0f1436] p-8 rounded-2xl shadow-xl border border-white/10 transform transition-all duration-500 hover:rotate-1 hover:-translate-y-2 hover:shadow-purple-500/20 hover:border-purple-500/40">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-purple-600/20 border border-purple-500/40">
              <img
  src="https://cdn-icons-png.freepik.com/256/10329/10329552.png"
  alt="React Icon"
  className="w-10 h-10"
/>
         
            </div>
            <h3 className="text-2xl font-semibold">Full Stack Developer</h3>
          </div>

          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-all duration-300">
            Skilled in creating end‑to‑end web applications with efficient
            backend logic and smooth frontend interactions.
          </p>
        </div>

     
        <div className="group bg-[#0f1436] p-8 rounded-2xl shadow-xl border border-white/10 transform transition-all duration-500 hover:-rotate-1 hover:-translate-y-2 hover:shadow-blue-500/20 hover:border-blue-500/40">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/40">
             <img
  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  alt="React Icon"
  className="w-10 h-10 animate-spin transition-all duration-300"
/>
            </div>
            <h3 className="text-2xl font-semibold">React.js Developer</h3>
          </div>

          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-all duration-300">
            Experienced in building dynamic, component‑based UIs with smooth
            animations and optimized performance using React.js.
          </p>
        </div>
      </div>

 
      <style>{`
        .group:hover {
          position: relative;
        }
        .group:hover::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: skewX(-20deg);
          animation: shine 0.8s forwards;
        }
        @keyframes shine {
          to { left: 200%; }
        }
      `}</style>
    </section>
  );
}
