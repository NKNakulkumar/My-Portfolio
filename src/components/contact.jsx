import { MdAttachEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdMyLocation } from "react-icons/md";
export default function Contact() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-main text-white" id="contact" >
   
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24">
  
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-700/30 blur-[170px] rounded-full animate-slow-spin"></div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight relative z-10">
          Let's <span className="text-purple-400">Connect</span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-2xl relative z-10">
          Whether you have a project idea, want to collaborate, or simply want to say hello — I’m always open.
        </p>


        <div className="absolute top-20 right-32 w-16 h-16 rounded-xl bg-purple-500/20 border border-purple-400/20 animate-float"></div>
        <div className="absolute top-64 right-10 w-10 h-10 rounded-full bg-blue-500/30 animate-float-delayed"></div>
        <div className="absolute top-40 left-10 w-14 h-14 rounded-full bg-pink-500/20 animate-float-slow"></div>
      </section>

  
      <section className="relative z-20 px-6 md:px-12 lg:px-24 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        

        <div className="flex flex-col gap-8 mt-10">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="text-gray-300 text-lg">
            Fill out the form and I'll get back to you shortly.
          </p>


          <div className="flex flex-col gap-6 ">
   
            <div className="group flex items-center gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-purple-400/40 hover:shadow-purple-500/20 hover:shadow-xl cursor-pointer">
              <div className="w-14 h-14 rounded-xl  bg-purple-500/20 flex items-center justify-center text-purple-300 text-2xl group-hover:scale-110 transition">
               <MdAttachEmail/>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-400">nakulmail@gmail.com</p>
              </div>
            </div>

            <div className="group flex items-center gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-purple-400/40 hover:shadow-purple-500/20 hover:shadow-xl cursor-pointer">
              <div className="w-14 h-14 rounded-xl  bg-purple-500/20 flex items-center justify-center text-purple-300 text-2xl group-hover:scale-110 transition">
             <FaPhoneFlip />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-400">+91 9876543210</p>
              </div>
            </div>

        
            <div className="group flex items-center gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-purple-400/40 hover:shadow-purple-500/20 hover:shadow-xl cursor-pointer">
              <div className="w-14 h-14 rounded-xl  bg-purple-500/20 flex items-center justify-center text-purple-300 text-2xl group-hover:scale-110 transition">
              <MdMyLocation/>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-gray-400">Moradabad, India</p>
              </div>
            </div>
          </div>
        </div>

   
        <form className="relative w-full p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition">
          
          <h3 className="text-3xl font-bold mb-8">Send a Message</h3>

   
          <div className="relative mb-6">
            <input
              type="text"
              required
              className="peer w-full p-4 bg-transparent border border-gray-500/30 rounded-xl outline-none text-white focus:border-purple-500 transition"
            />
            <label className="absolute left-4 top-4 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:-translate-y-5 peer-focus:text-purple-400 peer-valid:-translate-y-5 peer-valid:text-purple-400">
              Your Name
            </label>
          </div>

    
          <div className="relative mb-6">
            <input
              type="email"
              required
              className="peer w-full p-4 bg-transparent border border-gray-500/30 rounded-xl outline-none text-white focus:border-purple-500 transition"
            />
            <label className="absolute left-4 top-4 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:-translate-y-5 peer-focus:text-purple-400 peer-valid:-translate-y-5 peer-valid:text-purple-400">
              Your Email
            </label>
          </div>

      
          <div className="relative mb-6">
            <textarea
              required
              rows="4"
              className="peer w-full p-4 bg-transparent border border-gray-500/30 rounded-xl outline-none text-white focus:border-purple-500 transition"
            ></textarea>
            <label className="absolute left-4 top-4 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:-translate-y-5 peer-focus:text-purple-400 peer-valid:-translate-y-5 peer-valid:text-purple-400">
              Message
            </label>
          </div>

   
          <button className="w-full py-3 mt-4 bg-purple-600 hover:bg-purple-700 transition font-semibold rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 cursor-pointer ">
            Send Message
          </button>
        </form>
      </section>


      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes floatDelayed {
          0% { transform: translateY(0px); }
          50% { transform: translateY(16px); }
          100% { transform: translateY(0px); }
        }
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: floatSlow 7s ease-in-out infinite; }
        .animate-float-delayed { animation: floatDelayed 8s ease-in-out infinite; }
        .animate-slow-spin { animation: slowSpin 25s linear infinite; }
      `}</style>
    </div>
  );
}
