import { FaBook, FaPaintBrush, FaProjectDiagram } from 'react-icons/fa';
import { IoLogoGameControllerB } from "react-icons/io";

function App() {
  return (
    <div class="min-h-screen bg-black flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full min-h-96 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <div class="flex space-x-4 overflow-x-auto">
          <a href="https://x.com/sakshivij21"><img src="https://img.shields.io/badge/twitter-%2312100E.svg?&style=for-the-badge&logo=x&logoColor=white" alt="Twitter" /></a>
          <a href="https://www.linkedin.com/in/sakshi-vij-b77058126/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
          <a href="https://leetcode.com/sakshivij12/"><img src="https://img.shields.io/badge/leetcode-%2312100E.svg?&style=for-the-badge&logo=leetcode&logoColor=white" alt="Leetcode" /></a>
          <a href="https://medium.com/@sakshivij12"><img src="https://img.shields.io/badge/medium-%2312100E.svg?&style=for-the-badge&logo=medium&logoColor=white" alt="Medium" /></a>
          <a href="mailto:sakshivij12@gmail.com?subject=Hola%20Sakshi"><img src="https://img.shields.io/badge/gmail-%23D14836.svg?&style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" /></a>
          <a href="https://github.com/sakshivij"><img src="https://img.shields.io/badge/github-%2312100E.svg?&style=for-the-badge&logo=github&logoColor=white" alt="Github" /></a>
        </div>
        <div class="relative mt-20 ml-10 mb-40">
          <h1 class="text-3xl font-bold absolute top-0 left-0 transform -translate-x-4 -translate-y-4">Hello! I'm Sakshi</h1>
          <h1 class="text-xl absolute top-2 left-4 transform translate-x-4 translate-y-4">Software developer from India</h1>
        </div>

        <div class="mt-10">
          <p>
            <span class="italic font-bold">One line that describes me:</span> You might not find me deveoping a solution, but you will definitely find me solving a problem.
          </p>
        </div>

        <div class="mt-20">
          <div class="flex justify-around py-4 text-[#7b241c] font-bold">
            <a href="#" className="flex items-center hover:text-gray-400">
              <IoLogoGameControllerB className="text-2xl mr-2" />
              Game Zone
            </a>   
            <a href="#" className="flex items-center hover:text-gray-400">
              <FaProjectDiagram className="text-2xl mr-2" />
              Projects
            </a>   
            <a href="#" className="flex items-center hover:text-gray-400">
              <FaBook className="text-2xl mr-2" />
              Tech Reads
            </a> 
            <a href="#" className="flex items-center hover:text-gray-400">
              <FaPaintBrush className="text-2xl mr-2" />
              Personal
            </a>            
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
