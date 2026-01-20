import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      <nav className="w-full px-8 py-4 flex justify-between items-center bg-gray-950 shadow-md fixed top-0 z-50">
        <h1 className="text-xl font-bold">Shiwanshu</h1>
        <div className="space-x-6 text-gray-300">
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      <div className="pt-24 flex flex-col items-center p-6">

        <motion.h1 
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mt-6"
        >
          Shiwanshu Gilorkar
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mt-2 text-center"
        >
          Computer Science Engineer | Java & Full Stack Developer
        </motion.p>

        <div className="mt-12 w-full max-w-4xl space-y-12">

          {["Skills", "Projects", "Contact"].map((title, i) => (
            <motion.section
              key={title}
              id={title.toLowerCase()}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <h2 className="text-2xl font-semibold mb-4">{title}</h2>

              {title === "Skills" && (
                <ul className="list-disc list-inside text-gray-300">
                  <li>Java, SQL</li>
                  <li>Data Structures & OOP</li>
                  <li>MySQL, Firebase, GCP</li>
                </ul>
              )}

              {title === "Projects" && (
                <ul className="list-disc list-inside text-gray-300">
                  <li>Library Management System (Java + JDBC)</li>
                  <li>Serverless Task Manager (Firebase)</li>
                  <li>Command Line Search Engine (Java)</li>
                  <li>IoT Food Freshness Monitoring System</li>
                </ul>
              )}

              {title === "Contact" && (
  <>
    <div className="mb-6 text-gray-300 space-y-2">
      <p><b>Email:</b> shiwanshugilorkar@gmail.com</p>
      <p><b>GitHub:</b> github.com/Shiwanshu123</p>
      <p><b>LinkedIn:</b> linkedin.com/in/shiwanshu-gilorkar</p>
    </div>

    <form className="space-y-4">
      <input 
        type="text" 
        placeholder="Your Name"
        className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
      />

      <input 
        type="email" 
        placeholder="Your Email"
        className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
      />

      <textarea 
        rows="4"
        placeholder="Your Message"
        className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
      />

      <button 
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold"
      >
        Send Message
      </button>
    </form>
  </>
)}

            </motion.section>
          ))}

        </div>
      </div>
    </div>
  );
}
